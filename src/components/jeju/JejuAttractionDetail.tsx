import {useNavigate,useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import {useMutation,useQuery} from "@tanstack/react-query";
import {JejuItem} from "../../commons/commonsData";
import apiClient from "../../http-commons";
import {AxiosResponse} from "axios";
import KakaoMap from "../../commons/KakaoMap";

interface DetailProps {
    data:{dto:JejuItem}
}

function JejuAttractionDetail(){
    const {contentid} = useParams();
    const nav=useNavigate();

    const {isLoading,isError,error,data,refetch:jejuDetail}=useQuery<DetailProps,Error>({
        queryKey:['detail-jeju',contentid],
        queryFn: async()=>{
            return await apiClient.get(`jeju/attratcion_detail/${contentid}`)
        }
    })
    if(isLoading){
        return <h1 className="text-center">Loading...</h1>
    }
    if(isError){
        return <h1 className="text-center">Error: {error?.message}</h1>
    }
}

export default JejuAttractionDetail()