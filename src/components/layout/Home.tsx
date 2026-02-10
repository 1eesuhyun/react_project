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
    console.log(data?.data)
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
                    <div
                        className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5">
                        <div className="col mb-5">
                            {/*{
                                data?.data.list && data?.data.list.map((main: MainItem) =>
                                <div className="card h-100">
                                    <img className="card-img-top" src={main.image1}/>
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">Fancy Product</h5>
                                            $40.00 - $80.00
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                            <a className="btn btn-outline-dark mt-auto" href="#">상세보기</a>
                                        </div>
                                    </div>
                                </div>
                                )
                            }*/}
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Special Item</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        {' '}$18.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#">상세보기</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Sale Item</h5>
                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        {' '}$25.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#">상세보기</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Popular Item</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        $40.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="#">상세보기</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <table className="table">
                        <tbody>
                        <tr>
                            <td className="text-left">부산 여행</td>
                        </tr>
                        </tbody>
                    </table>
                    <div
                        className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5">
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Sale Item</h5>
                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        {' '}$25.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                    href="#">상세보기</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        $120.00 - $280.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                    href="#">상세보기</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Special Item</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        {' '}$18.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                    href="#">상세보기</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Popular Item</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        $40.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                    href="#">상세보기</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <table className="table">
                        <tbody>
                        <tr>
                            <td className="text-left">제주 여행</td>
                        </tr>
                        </tbody>
                    </table>
                    <div
                        className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-5">
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Sale Item</h5>
                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        {' '}$25.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                    href="#">상세보기</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        $120.00 - $280.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                    href="#">상세보기</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Special Item</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        {' '}$18.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                    href="#">상세보기</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Popular Item</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        $40.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                    href="#">상세보기</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home;