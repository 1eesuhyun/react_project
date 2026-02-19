import {Link} from "react-router-dom";
import {Fragment} from "react";

function Header() {
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
                            <li className="nav-item"><Link className="nav-link" to={"/chatbot"}>챗봇</Link></li>
                        </ul>
                        <form className="d-flex">
                        <button className="btn btn-outline-dark" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Sign in
                            </button>
                            <button className="btn btn-outline-dark" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Sign up
                            </button>
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