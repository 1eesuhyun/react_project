import {Link} from "react-router-dom";
import {Fragment} from "react";
import {useState,useRef,useEffect} from "react";
import {useMutation} from "@tanstack/react-query";
import {AxiosResponse,AxiosError} from "axios";
import apiClient from "../../http-commons";

function Header() {
    const [login,setLogin]=useState<boolean>(false);
    const [id, setId]=useState<string>();
    const [pwd, setPwd]=useState<string>();

    const idRef = useRef<HTMLInputElement>(null);
    const pwdRef=useRef<HTMLInputElement>(null);

    interface LoginData{
        msg:string; // NOID, NOPWD, OK
        id?:string;
        name?:string;
    }
    /*
        1. 결과값 받는 경우 => interface / type
        2. 함수의 리턴형
        3. 매개변수의 데이터형
        ?. 데이터명 &&
        일반 => ts파일
        html리턴 => tsx파일
     */
    // 로그인 버튼 눌렀을 때
    const {mutate:loginOk}=useMutation({
        mutationFn: async (data)=>{
            const res:AxiosResponse<LoginData>=await apiClient.get(`/member/login/${id}/${pwd}`)
            return res.data
        },
        onSuccess: (data:LoginData)=>{
            if(data.msg==='NOID')
            {
                alert("아이디가 존재하지 않습니다")
                setId('');
                setPwd('')
                idRef.current?.focus();
            }
            else if(data.msg==='NOPWD')
            {
                alert("비밀번호가 틀립니다")
                setPwd('')
                pwdRef.current?.focus();
            }
            else if(data.msg==='OK' && data.id && data.name)
            {
                window.sessionStorage.setItem("id",data.id);
                window.sessionStorage.setItem("name",data.name);
                setLogin(true);
                window.location.reload();
            }
        },
        onError:(error:AxiosError)=>{
            console.log("login Error",error.message);
        }
    })
    // 메인화면이면 => 자동 실행
    // String id=(String)session.getAttribute("id")
    // if(id==null)
    useEffect(()=>{
        if(sessionStorage.getItem("id"))
        {
            setLogin(true);
        }
    })

    const memberLogin=()=>{
        if(!id || id.trim()==="")
        {
            idRef.current?.focus();
            return;
        }
        if(!pwd || pwd.trim()==="")
        {
            pwdRef.current?.focus();
            return;
        }
        loginOk() // useMutation => mutate / useQuery => refetch
    }
    const memberLogout=()=>{
        window.sessionStorage.clear()
        setId('')
        setPwd('')
        setLogin(false)
        window.location.reload()
    }
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="/">Korea</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#"
                                   role="button" data-bs-toggle="dropdown" aria-expanded="false">서울</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">명소</a></li>
                                    <li><a className="dropdown-item" href="#!">쇼핑</a></li>
                                    <li><a className="dropdown-item" href="#!">음식</a></li>
                                    <li><a className="dropdown-item" href="#!">축제</a></li>
                                    <li><a className="dropdown-item" href="#!">숙박</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#"
                                   role="button" data-bs-toggle="dropdown" aria-expanded="false">부산</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">명소</a></li>
                                    <li><a className="dropdown-item" href="#!">쇼핑</a></li>
                                    <li><a className="dropdown-item" href="#!">음식</a></li>
                                    <li><a className="dropdown-item" href="#!">축제</a></li>
                                    <li><a className="dropdown-item" href="#!">숙박</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#"
                                   role="button" data-bs-toggle="dropdown" aria-expanded="false">제주</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/jeju/attraction">명소</a></li>
                                    <li><a className="dropdown-item" href="#!">쇼핑</a></li>
                                    <li><a className="dropdown-item" href="#!">음식</a></li>
                                    <li><a className="dropdown-item" href="#!">축제</a></li>
                                    <li><a className="dropdown-item" href="#!">숙박</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to={"/youtube"}>동영상 검색</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={"/board/list"}>커뮤니티</Link></li>
                        </ul>
                        <form className="d-flex">
                            {
                                !login?(
                                    <div className="login">
                                        ID : <input type={"text"} size={10} className={"input-sm"} ref={idRef} value={id} onChange={(e:any)=>{setId(e.target.value)}}/>
                                        &nbsp;
                                        PWD : <input type={"password"} size={10} className={"input-sm"} ref={pwdRef} value={pwd} onChange={(e:any)=>{setPwd(e.target.value)}}/>
                                        &nbsp;
                                        <button className={"btn btn-outline-dark mt-auto"} type={"button"} onClick={memberLogin}>로그인</button>
                                    </div>):(
                                    <div className="login">
                                        {window.sessionStorage.getItem("name")}님
                                        &nbsp;<button className={"btn-sm btn-secondary"} onClick={memberLogout}>로그아웃</button>
                                    </div>
                                )
                            }
                        </form>
                    </div>
                </div>
            </nav>

            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Welcome To Korea</h1>
                        <p className="lead fw-normal text-white-50 mb-0">한국에 오신 여러분 환영합니다!</p>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header;