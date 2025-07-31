import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import News from '../components/News'
import Team from '../components/Team'
import Form from '../components/Form'
import One from '../components/One'
import Two from '../components/Two'
import Three from '../components/Three'
import { Link } from "react-router-dom";

export default function MoneyMouth() {
    return (
        <div>
            <main id="main_root" className="main-root">
                <Navbar />
                <header className="header-page v-dark-head dsn-header-animation pb-80 p-relative">
                    <div
                        className="box-img h-100 w-100 h-100 p-absolute top-0 right-0"
                        data-overlay="7">
                        <img alt="" className="cover-bg-img" src="https://i.postimg.cc/KYgXfzcg/bg-svg-fill.png" />
                    </div>
                    <div
                        className="p-relative container dsn-hero-parallax-title h-100"
                        style={{
                            opacity: "1",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0%)",
                            translate: "none",
                            visibility: "inherit",
                        }}>
                        <div className="p-relative d-flex align-items-center w-100  h-100 ">
                            <div className="box-content d-flex flex-column z-index-1">
                                <h1 className="title-lg text-upper">Money <br/> Mouth @2025</h1>
                                <div className="contact-links d-flex flex-column w-50 mt-50">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-head w-100 p-relative mt-80 z-index-2">
                        <div className="container d-flex justify-content-between">
                            <div className="dsn-btn dsn-btn-shape rotate-icon d-flex">
                                <Link
                                    className="button v-dark background-section"
                                    data-dsn-option='{"ease": "power4.inOut" , "duration" : 1.5}'
                                    to="/"
                                    rel="nofollow">
                                    <span
                                        className="title-btn text-upper p-relative  z-index-1 heading-color"
                                        data-animate-text="Scroll Down">
                                        <span>Back</span>
                                    </span>
                                </Link>
                                <span className="icon v-dark background-section">
                                    <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="social-box d-flex align-items-center">
                                {/* <ul className="dsn-socials box-social">
                                    <li>
                                        <a className="background-main" href="#0" target="_blank">
                                            <i aria-hidden="true" className="fab fa-facebook-f" />{" "}
                                            <span>FB</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="background-main" href="#0" target="_blank">
                                            <i aria-hidden="true" className="fab fa-instagram" />{" "}
                                            <span>IN</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="background-main" href="#0" target="_blank">
                                            <i aria-hidden="true" className="fab fa-twitter" />{" "}
                                            <span>TW</span>
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </header>
                <div className="wrapper" id="page_wrapper">
                    <One/>
                    <Two/>
                    <Three/>
                    <News/>
                </div>
                <Footer/>
            </main>
        </div>
    )
}
