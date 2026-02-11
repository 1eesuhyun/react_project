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
        queryKey: ['jeju-attraction', curpage],
        queryFn: async () => {
            return await apiClient.get(`jeju/attraction_react/${curpage}`)
        }
    })
    if (isLoading) {
        return <h1 className={"text-center"}>Loading...</h1>
    }
    if (isError) {
        return <h1 className={"text-center"}>Error...{error?.message}</h1>
    }
    console.log(data?.data)

    return (
        <Fragment>
            <div className="container px-4 px-lg-5 mt-5">
                <table className="table">
                    <tbody>
                    <tr>
                        <td className={"text-left"}><h4>제주 명소</h4></td>
                    </tr>
                    </tbody>
                </table>
                <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4">
                    {
                        data?.data.list && data?.data.list.map((jeju: JejuItem, index) =>
                            <div className="col mb-5" key={index}>
                                <div className="card h-100 shadow-sm">
                                    <img className="card-img-top" src={jeju.image1}
                                         style={{width: "100%", height: "220px"}}/>
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder mb-2">{jeju.title}</h5>
                                            <p className="text-muted small mb-0">{jeju.address}</p>
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                            <a className="btn btn-outline-dark mt-auto" href="#">
                                                상세보기
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column mt-4">
                    <ul className="pagination mb-3">
                        {data?.data && <PagePrint data={data.data} setCurpage={setCurpage} />}
                    </ul>
                    <div className="text-muted">
                        <h5>Page {curpage} of {data?.data.totalpage} Pages</h5>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default JejuAttractionList;