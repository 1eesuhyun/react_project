import {Fragment, useState} from 'react'
import {useQuery} from "@tanstack/react-query";
import apiClient from "../../http-commons"
import {MainData, MainItem} from "../../commons/commonsData";
import {AxiosResponse} from "axios";
import {Link, useNavigate} from "react-router-dom";

function Home() {
    const nav=useNavigate()
    const {isLoading, isError, error, data} = useQuery<AxiosResponse<MainData, Error>>({
        queryKey: ['main-data'],
        queryFn: async () => {
            return await apiClient.get('/')
        }
    })
    if (isLoading) {
        return <h1 className={"text-center"}>Loading</h1>
    }
    if (isError) {
        return <h1 className={"text-center"}>Error:{error?.message}</h1>
    }
    return (
        <Fragment>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">

                    <table className="table">
                        <tbody>
                        <tr>
                            <td className="text-left" style={{"fontSize":"20px"}} onClick={()=>nav("/jeju/attraction")}>제주 추천 명소</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5">
                    {
                        data?.data.jlist.map((main: MainItem, index) =>
                            <div className="col mb-4">
                                <div className="card h-100" key={index}>
                                    <img className="card-img-top" src={main.image1}
                                         style={{"width": "100%", "height": "220px"}} onClick={()=>nav("/jeju/attraction_detail/"+main.contentid)}/>
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{main.title}</h5>
                                            {main.address}
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                    <table className="table">
                        <tbody>
                        <tr>
                            <td className="text-left" style={{"fontSize":"20px"}}>부산 추천 명소</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5">
                        {
                            data?.data.blist.map((main: MainItem, index) =>
                                <div className="col mb-5">
                                    <div className="card h-100" key={index}>
                                        <img className="card-img-top" src={main.image1}
                                             style={{"width": "100%", "height": "220px"}}/>
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder">{main.title}</h5>
                                                {main.address}
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <table className="table">
                        <tbody>
                        <tr>
                            <td className="text-left" style={{"fontSize":"20px"}}>서울 추천 명소</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5">
                        {
                            data?.data.slist.map((main: MainItem, index) =>
                                <div className="col mb-5">
                                    <div className="card h-100" key={index}>
                                        <img className="card-img-top" src={main.image1} style={{"width": "100%", "height": "220px"}}/>
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <Link to={"/jeju/attraction_detail/"+main.contentid} style={{"textDecoration":"none","color":"#212529"}}>
                                                    <h5 className="fw-bolder">{main.title}</h5>
                                                </Link>
                                                {main.address}
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home;