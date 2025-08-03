import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import News from '../components/News';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import AnimatedText from '../components/AnimatedTextTo';

export default function Band() {
    const [portfolios, setPortfolios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await fetch('https://dev.digital-echoes.binary-group.com/admin/api/portfolios');
                if (!response.ok) {
                    throw new Error('Failed to fetch portfolios');
                }
                const data = await response.json();
                setPortfolios(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolios();
    }, []);

    if (loading) {
        return (
            <div style={{height:"100vh"}}>
            </div>
        );
    }

    if (error) {
        return (
            <div className="main-root">
                <div className="container text-center py-5">
                    <p>Error: {error}</p>
                </div>
            </div>
        );
    }

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
                        <div className="p-relative d-flex align-items-center w-100 h-100">
                            <div className="box-content z-index-1">
                                <h1 className="title-lg text-upper">Portfolio</h1>
                                <div className="contact-links w-50 mt-20">
                                    <p>
                                        My creative spirit comes alive in the digital realm. With nimble
                                        fingers flying across the keyboard, I craft clear experiences out of
                                        nothing but ones and zeroes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-head w-100 p-relative mt-80 z-index-2">
                        <div className="container d-flex justify-content-between">
                            <div className="dsn-btn dsn-btn-shape rotate-icon d-flex">
                                <Link to='/' className="button v-dark background-section" href="#">
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
                    <div className="p-relative mb-section">
                        <div className="p-relative box-image-parallax dsn-style-cards">
                            <div className="root-posts has-filter">
                                <div className="dsn-filtering z-index-1 p-relative w-100 mb-70 pt-50 pb-50">
                                </div>
                                <div className="container">
                                    <div className="section-title dsn-fill mb-70 d-flex flex-column">
                                        <AnimatedText className="title title-orange">
                                            Our Portfolio Banding
                                        </AnimatedText>
                                    </div>
                                </div>
                                <div className="container" style={{ paddingBottom: "500px" }}>
                                    <div
                                        className="dsn-posts dsn-post-type-cards box-image-normal d-grid grid-md-2 dsn-isotope use-filter v-dark-head"
                                        style={{
                                            "--grid-gap": "30px",
                                            "--grid-gap-col": "30px",
                                            "--grid-gap-row": "30px",
                                            gap: "30px",
                                            position: "relative",
                                        }}>
                                        {portfolios.map((portfolio, index) => (
                                            <Link
                                                to={`/portfolio/${portfolio.id}`}
                                                key={portfolio.id}
                                                className="dsn-item-post grid-item over-hidden p-relative has-border-radius photography"
                                                style={{
                                                    left: index % 2 === 0 ? "0px" : "calc(50% + 15px)",
                                                    position: "absolute",
                                                    top: `${Math.floor(index / 2) * 400}px`
                                                }}>
                                                <div className="box-content">
                                                    <div className="w-100">
                                                        <div
                                                            className="box-image w-100 h-350 over-hidden before-z-index dsn-swiper-parallax-transform p-relative"
                                                            data-overlay="4">
                                                            <img
                                                                alt={portfolio.title}
                                                                className="cover-bg-img dsn-swiper-parallax-transform"
                                                                src={`https://dev.digital-echoes.binary-group.com/admin/${portfolio.photo}`}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="post-content background-section z-index-1 d-flex flex-column bg-customize">
                                                        <div className="post-info d-flex justify-content-between align-items-center p-20">
                                                            <div className="cat d-flex p-0">
                                                                <span className="background-main heading-color">
                                                                    {portfolio.categories?.string || 'Portfolio'}
                                                                </span>
                                                            </div>
                                                            <h2 className="post-title word-wrap d-inline-block title-block text-upper">
                                                                <a
                                                                    className="effect-ajax init-color"
                                                                    data-dsn-ajax="work">
                                                                    {portfolio.title}
                                                                </a>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <News/>
                </div>
                <Footer/>
                <style>{`
                    .bg-customize{
                        background:#171717 !important;
                    }
                `}</style>
            </main>
        </div>
    );
}