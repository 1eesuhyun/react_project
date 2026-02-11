import {Fragment, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../../http-commons";
import {Link} from "react-router-dom";
import {AxiosResponse} from "axios";
import {JejuItem, JejuData} from "../../commons/commonsData"
import PagePrint from "../../commons/PagePrint";
import App from "../../App";

function JejuAttractionList() {
    const [curpage, setCurpage] = useState<number>(1);
    const {isLoading, isError, error, data} = useQuery<AxiosResponse<JejuData, Error>>({
        queryKey:['jeju-attraction',curpage],
        queryFn:async()=>{
            return await apiClient.get(`jeju/attraction_react/${curpage}`)
        }
    })
    if(isLoading){
        return <h1 className={"text-center"}>Loading...</h1>
    }
    if(isError){
        return <h1 className={"text-center"}>Error...{error?.message}</h1>
    }
    console.log(data?.data)

    return (
        <Fragment>
            <h1 className={"text-center"}>제주 명소</h1>
        </Fragment>
    )
}

export default JejuAttractionList;