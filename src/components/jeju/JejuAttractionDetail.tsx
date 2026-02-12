import {useNavigate, useParams} from "react-router-dom";
import {useState, useEffect, Fragment} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {JejuItem} from "../../commons/commonsData";
import apiClient from "../../http-commons";
import {AxiosResponse} from "axios";
import KakaoMap from "../../commons/KakaoMap";

interface DetailProps {
    data: { dto: JejuItem }
}

function JejuAttractionDetail() {
    const {contentid} = useParams();
    const nav = useNavigate();

    const {isLoading, isError, error, data, refetch: jejuDetail} = useQuery<DetailProps, Error>({
        queryKey: ['detail-jeju', contentid],
        queryFn: async () => {
            return await apiClient.get(`/jeju/attratcion_detail/${contentid}`)
        }
    })

    const jejuData: JejuItem | undefined = data?.data.dto

    if (isLoading) {
        return <h1 className="text-center">Loading...</h1>
    }
    if (isError) {
        return <h1 className="text-center">Error: {error?.message}</h1>
    }
    return (
        <Fragment>
            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-end mb-4">
                    <h1 className="fw-bold">{jejuData?.title}</h1>
                    <button className={"btn btn-outline-dark mt-auto"} onClick={()=>nav(-1)} style={{"marginLeft":"320px"}}>목록</button>
                </div>

                <div className="row g-4">
                    <div className="col-lg-8">
                        <img src={jejuData?.image1} className="img-fluid rounded shadow" style={{"width":"100%","height":"500px"}} />
                        <div className="mt-4 p-3 bg-light rounded">
                            <h4>상세 설명</h4>
                            <p className="lead">{jejuData?.msg}</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <h4 className="card-title mb-5">이용 정보</h4>
                                <ul className="list-unstyled">
                                    <li className="mb-3"><strong>📍 주소 : </strong> {jejuData?.address}</li>
                                    <li className="mb-3"><strong>📞 문의 : </strong> {jejuData?.infocenter}</li>
                                    <li className="mb-3"><strong>🚗 주차 : </strong> {jejuData?.parking}</li>
                                    <li className="mb-3"><strong>👍 조회수 : </strong> {jejuData?.hit}</li>
                                    <li className="mb-3"><strong>⏰ 이용시간 : </strong><small>{jejuData?.usetime}</small>
                                    </li>
                                    <li className="mb-3"><strong>📅 휴무일:</strong> {jejuData?.restdate}</li>
                                </ul>
                                <hr/>
                                <table className={"table"}>
                                    <tbody>
                                    <tr>
                                        <td className={"text-center"}>
                                            {jejuData && <KakaoMap address={jejuData?.address} name={jejuData?.title} />}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default JejuAttractionDetail