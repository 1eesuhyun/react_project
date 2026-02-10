import {Fragment, useState} from 'react'
import {useQuery} from "@tanstack/react-query";
import apiClient from "../../http-commons"
import {MainData, MainItem} from "../../commons/commonsData";
import {AxiosResponse} from "axios";

function Home() {
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
                            <td className="text-left">서울 여행</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5">
                        {
                            data?.data.slist.map((main: MainItem, index) =>
                                <div className="col mb-4">
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
                                            <div className="text-center">
                                                <a className="btn btn-outline-dark mt-auto" href="#">상세보기</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <table className="table">
                        <tbody>
                        <tr>
                            <td className="text-left">부산 여행</td>
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
                                            <div className="text-center">
                                                <a className="btn btn-outline-dark mt-auto" href="#">상세보기</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <table className="table">
                        <tbody>
                        <tr>
                            <td className="text-left">제주 여행</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5">
                        {
                            data?.data.jlist.map((main: MainItem, index) =>
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
                                            <div className="text-center">
                                                <a className="btn btn-outline-dark mt-auto" href="#">상세보기</a>
                                            </div>
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