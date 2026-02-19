import { Fragment, useRef, useState } from "react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

function ChatBot() {

    // 전체 메시지 목록
    const [message, setMessage] = useState<Message[]>([]);
    // 입력값
    const [input, setInput] = useState("");

    // 마지막 AI 메시지를 직접 조작
    const streamingRef = useRef<HTMLDivElement | null>(null);

    // 스트리밍 상태
    const isStreaming = useRef(false);

    // 🔥 타이핑 효과용
    const typingQueue = useRef<string[]>([]);
    const typingTimer = useRef<number | null>(null);

    // 타이핑 시작
    const startTyping = () => {
        if (typingTimer.current !== null) return;

        typingTimer.current = window.setInterval(() => {
            if (!streamingRef.current) return;

            if (typingQueue.current.length === 0) {
                if (!isStreaming.current) {
                    clearInterval(typingTimer.current!);
                    typingTimer.current = null;
                }
                return;
            }

            if (streamingRef.current && typingQueue.current.length > 0) {
                streamingRef.current.textContent =
                    (streamingRef.current.textContent ?? "") +
                    typingQueue.current.shift()!;
            }
        }, 30); // ⏱ 타이핑 속도
    };

    const sendMessage = async () => {

        if (!input.trim() || isStreaming.current) return;

        // 사용자 메시지 + 빈 AI 메시지 추가
        setMessage(prev => [
            ...prev,
            { role: "user", content: input },
            { role: "assistant", content: "" }
        ]);

        const userMessage = input;
        setInput("");
        isStreaming.current = true;

        try {
            const response = await fetch(
                "http://localhost:8080/chat/stream?message=" +
                encodeURIComponent(userMessage)
            );

            const reader = response.body!.getReader();
            const decoder = new TextDecoder("utf-8");

            let fullContent = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder
                    .decode(value)
                    .replaceAll("data:", "");

                fullContent += chunk;

                // 🔥 문자 단위 큐 적재
                for (const ch of chunk) {
                    typingQueue.current.push(ch);
                }

                // 타이핑 시작
                startTyping();
            }

            // 스트리밍 종료
            isStreaming.current = false;

            // state 반영
            setMessage(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                    role: "assistant",
                    content: fullContent
                };
                return updated;
            });

        } catch (error) {
            console.error(error);
            isStreaming.current = false;
        }
    };

    return (
        <Fragment>

            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="chat-container row" style={{ margin: "0 auto" }}>

                        <div className="header">
                            Spring AI Chat (Streaming)
                        </div>

                        <div className="chat-box">

                            {message.map((msg, index) => {
                                const isLast = index === message.length - 1;
                                const isAssistant = msg.role === "assistant";

                                return (
                                    <div
                                        key={index}
                                        className={`message ${msg.role}`}
                                    >
                                        <div
                                            className="message-content"
                                            ref={
                                                isAssistant && isLast
                                                    ? streamingRef
                                                    : null
                                            }
                                        >
                                            {msg.content}
                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                        <div className="input-area">
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="메세지 입력"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) =>
                                        e.key === "Enter" && sendMessage()
                                    }
                                />
                                <button onClick={sendMessage}>
                                    전송
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </Fragment>
    );
}

export default ChatBot;