import {useState,useEffect,Fragment,useRef} from "react";
import {useQuery} from "@tanstack/react-query";
import {YoutubeApi} from "./YoutubeApi";
import {YoutubeItem} from "../commons/commonsData";
import {Link, useNavigate} from "react-router-dom";


function YoutubeFind() {
    const [fd,setFd,] = useState<string>("제주여행");
    const nav=useNavigate();
    const [curpage, setCurpage] = useState<number>(1);
    const fdRef=useRef<HTMLInputElement>(null);
    const {isLoading,isError,error,data,refetch:find}=useQuery({
        queryKey:['youtube'],
        queryFn: ()=>YoutubeApi(fd),
        enabled: fd.trim().length > 0,
    })
    const findClick=()=>{
        if(!fd.trim()){
            return fdRef.current?.focus();
        }
        if(fdRef.current){
            setFd(fdRef.current.value)
        }
        find()
    }
    if(isLoading){
        return <div>Loading...</div>;
    }
    if(isError){
        return <div>Error{error?.message}</div>;
    }
    return (
        <Fragment>
            <table className={"table"} style={{"marginTop":"20px"}} >
                <tbody>
                <tr>
                    <h3 className={"text-center"}>동영상 검색</h3>
                </tr>
                </tbody>
            </table>
            <div className="container">
                    <input type={"text"} size={30} className={"input-sm"} style={{"marginTop": "10px","marginBottom":"20px"}} placeholder={"Search..."}
                    value={fd} ref={fdRef} onChange={(e)=>{setFd(e.target.value)}}/>
                <button className={"btn-sm btn-primary"} onClick={findClick}>검색</button>
                <Link className={"btn btn-outline-dark mt-auto"}style={{"marginLeft":"880px"}} to={"/"}>홈으로</Link>
            </div>
            <div className="container">
                <div className="row">
                    {
                        data?.items.map((item:YoutubeItem)=>
                            <div className="col-6" key={item.id.videoId}>
                                <div className="single-post" style={{"margin": "0px auto"}}>
                                    <div className="post-thumb">
                                        <iframe src={"https://www.youtube.com/embed/"+item.id.videoId} title={item.snippet.title} allowFullScreen={true} width="600px" height="350px"/>
                                    </div>
                                    <div className="post-content">
                                        <h6 className={"post-content"}>
                                            {item.snippet.title}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default YoutubeFind