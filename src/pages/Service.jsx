import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import News from '../components/News';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import AnimatedText from '../components/AnimatedTextTo';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Service() {
    // State for Marketing Services
    const [marketingServices, setMarketingServices] = useState([]);
    const [marketingLoading, setMarketingLoading] = useState(true);
    const [marketingError, setMarketingError] = useState(null);

    // State for Tech Services
    const [techServices, setTechServices] = useState([]);
    const [techLoading, setTechLoading] = useState(true);
    const [techError, setTechError] = useState(null);

    // State for Academy Services
    const [academyServices, setAcademyServices] = useState([]);
    const [academyLoading, setAcademyLoading] = useState(true);
    const [academyError, setAcademyError] = useState(null);

    // Fetch Marketing Services
    useEffect(() => {
        const fetchMarketingServices = async () => {
            try {
                const response = await fetch('https://dev.digital-echoes.binary-group.com/admin/api/services');
                if (!response.ok) {
                    throw new Error('Failed to fetch marketing services');
                }
                const data = await response.json();
                setMarketingServices(data);
            } catch (err) {
                setMarketingError(err.message);
            } finally {
                setMarketingLoading(false);
            }
        };

        fetchMarketingServices();
    }, []);

    // Fetch Tech Services
    useEffect(() => {
        const fetchTechServices = async () => {
            try {
                const response = await fetch('https://dev.digital-echoes.binary-group.com/admin/api/tech_service');
                if (!response.ok) {
                    throw new Error('Failed to fetch tech services');
                }
                const data = await response.json();
                setTechServices(data);
            } catch (err) {
                setTechError(err.message);
            } finally {
                setTechLoading(false);
            }
        };

        fetchTechServices();
    }, []);

    // Fetch Academy Services
    useEffect(() => {
        const fetchAcademyServices = async () => {
            try {
                const response = await fetch('https://dev.digital-echoes.binary-group.com/admin/api/academy_service');
                if (!response.ok) {
                    throw new Error('Failed to fetch academy services');
                }
                const data = await response.json();
                setAcademyServices(data);
            } catch (err) {
                setAcademyError(err.message);
            } finally {
                setAcademyLoading(false);
            }
        };

        fetchAcademyServices();
    }, []);

    if (marketingLoading || techLoading || academyLoading) {
        return (
            <div className="main-root">
                <div className="container text-center py-5">
                    <p>Loading services...</p>
                </div>
            </div>
        );
    }

    if (marketingError || techError || academyError) {
        return (
            <div className="main-root">
                <div className="container text-center py-5">
                    <p>Error: {marketingError || techError || academyError}</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <main id="main_root" className="main-root">
                <Navbar />
                <header className="header-page v-dark-head dsn-header-animation pb-80 p-relative">
                    <div className="box-img h-100 w-100 h-100 p-absolute top-0 right-0" data-overlay="7">
                        <img alt="" className="cover-bg-img" src="https://i.postimg.cc/KYgXfzcg/bg-svg-fill.png" />
                    </div>
                    <div className="p-relative container dsn-hero-parallax-title h-100"
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
                                <h1 className="title-lg text-upper">Service We Offer</h1>
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
                                <Link
                                    className="button v-dark background-section"
                                    data-dsn-option='{"ease": "power4.inOut" , "duration" : 1.5}'
                                    to="/"
                                    rel="nofollow">
                                    <span
                                        className="title-btn text-upper p-relative z-index-1 heading-color"
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
                                {/* Social icons can be added here */}
                            </div>
                        </div>
                    </div>
                </header>

                <div className="wrapper" id="page_wrapper">
                    <div className="p-relative mb-section">
                        <div className="p-relative box-image-parallax dsn-style-cards">
                            {/* Marketing Services Section */}
                            <div className="root-posts has-filter">
                                <div className="dsn-filtering z-index-1 p-relative w-100 mb-70 pt-50 pb-50"></div>
                                <div className="container">
                                    <div className="section-title dsn-fill mb-70 d-flex flex-column">
                                        <AnimatedText className="title title-orange">
                                            Our Marketing Service
                                        </AnimatedText>
                                    </div>
                                </div>
                                <div className="container" style={{ paddingBottom: "100px" }}>
                                    <div className="service-slider-wrapper">
                                        <Swiper
                                            modules={[Navigation, Pagination]}
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            navigation
                                            pagination={{ clickable: true }}
                                            breakpoints={{
                                                768: { slidesPerView: 2 },
                                                1200: { slidesPerView: 2 }
                                            }}
                                            className="dsn-posts dsn-post-type-cards box-image-normal d-grid grid-md-2 dsn-isotope use-filter v-dark-head"
                                        >
                                            {marketingServices.map((service) => (
                                                <SwiperSlide key={service.id}>
                                                    <Link
                                                        to={`/service/${service.id}`}
                                                        className="dsn-item-post grid-item over-hidden p-relative has-border-radius fashion"
                                                        style={{ height: "auto" }}
                                                    >
                                                        <div className="box-content">
                                                            <div className="w-100">
                                                                <div className="box-image w-100 h-350 over-hidden before-z-index dsn-swiper-parallax-transform p-relative">
                                                                    <img
                                                                        alt={service.title}
                                                                        className="cover-bg-img dsn-swiper-parallax-transform"
                                                                        src={`https://dev.digital-echoes.binary-group.com/admin/${service.banner}`}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="post-content background-section z-index-1 d-flex flex-column" style={{ background: '#1a1a1a' }}>
                                                                <div className="post-info d-flex justify-content-between align-items-center p-20">
                                                                    <div className="cat d-flex p-0">
                                                                        <span className="background-main heading-color">
                                                                            {service.categories.string}
                                                                        </span>
                                                                    </div>
                                                                    <h2 className="post-title word-wrap d-inline-block title-block text-upper">
                                                                        <a className="effect-ajax init-color">
                                                                            {service.title}
                                                                        </a>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Services Section */}
                            <div className="root-posts has-filter" style={{ background: '#1a1a1a' }}>
                                <div className="dsn-filtering z-index-1 p-relative w-100 mb-70 pt-50 pb-50"></div>
                                <div className="container">
                                    <div className="section-title dsn-fill mb-70 d-flex flex-column">
                                        <AnimatedText className="title title-orange">
                                            Our Tech Service
                                        </AnimatedText>
                                    </div>
                                </div>
                                <div className="container" style={{ paddingBottom: "100px" }}>
                                    <div className="service-slider-wrapper">
                                        <Swiper
                                            modules={[Navigation, Pagination]}
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            navigation
                                            pagination={{ clickable: true }}
                                            breakpoints={{
                                                768: { slidesPerView: 2 },
                                                1200: { slidesPerView: 2 }
                                            }}
                                            className="dsn-posts dsn-post-type-cards box-image-normal d-grid grid-md-2 dsn-isotope use-filter v-dark-head"
                                        >
                                            {techServices.map((service) => (
                                                <SwiperSlide key={service.id}>
                                                    <Link
                                                        to={`/service/${service.id}`}
                                                        className="dsn-item-post grid-item over-hidden p-relative has-border-radius fashion"
                                                        style={{ height: "auto" }}
                                                    >
                                                        <div className="box-content">
                                                            <div className="w-100">
                                                                <div className="box-image w-100 h-350 over-hidden before-z-index dsn-swiper-parallax-transform p-relative">
                                                                    <img
                                                                        alt={service.title}
                                                                        className="cover-bg-img dsn-swiper-parallax-transform"
                                                                        src={`https://dev.digital-echoes.binary-group.com/admin/${service.banner}`}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="post-content background-section z-index-1 d-flex flex-column" style={{ background: '#2b2c2c' }}>
                                                                <div className="post-info d-flex justify-content-between align-items-center p-20">
                                                                    <div className="cat d-flex p-0">
                                                                        <span className="background-main heading-color">
                                                                            {service.categories.string}
                                                                        </span>
                                                                    </div>
                                                                    <h2 className="post-title word-wrap d-inline-block title-block text-upper">
                                                                        <a className="effect-ajax init-color">
                                                                            {service.title}
                                                                        </a>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>

                            {/* Academy Services Section */}
                            <div className="root-posts has-filter">
                                <div className="dsn-filtering z-index-1 p-relative w-100 mb-70 pt-50 pb-50"></div>
                                <div className="container">
                                    <div className="section-title dsn-fill mb-70 d-flex flex-column">
                                        <AnimatedText className="title title-orange">
                                            Our Academy Service
                                        </AnimatedText>
                                    </div>
                                </div>
                                <div className="container" style={{ paddingBottom: "100px" }}>
                                    <div className="service-slider-wrapper">
                                        <Swiper
                                            modules={[Navigation, Pagination]}
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            navigation
                                            pagination={{ clickable: true }}
                                            breakpoints={{
                                                768: { slidesPerView: 2 },
                                                1200: { slidesPerView: 2 }
                                            }}
                                            className="dsn-posts dsn-post-type-cards box-image-normal d-grid grid-md-2 dsn-isotope use-filter v-dark-head"
                                        >
                                            {academyServices.map((service) => (
                                                <SwiperSlide key={service.id}>
                                                    <Link
                                                        to={`/service/${service.id}`}
                                                        className="dsn-item-post grid-item over-hidden p-relative has-border-radius fashion"
                                                        style={{ height: "auto" }}
                                                    >
                                                        <div className="box-content">
                                                            <div className="w-100">
                                                                <div className="box-image w-100 h-350 over-hidden before-z-index dsn-swiper-parallax-transform p-relative">
                                                                    <img
                                                                        alt={service.title}
                                                                        className="cover-bg-img dsn-swiper-parallax-transform"
                                                                        src={`https://dev.digital-echoes.binary-group.com/admin/${service.banner}`}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="post-content background-section z-index-1 d-flex flex-column" style={{ background: '#1a1a1a' }}>
                                                                <div className="post-info d-flex justify-content-between align-items-center p-20">
                                                                    <div className="cat d-flex p-0">
                                                                        <span className="background-main heading-color">
                                                                            {service.categories.string}
                                                                        </span>
                                                                    </div>
                                                                    <h2 className="post-title word-wrap d-inline-block title-block text-upper">
                                                                        <a className="effect-ajax init-color">
                                                                            {service.title}
                                                                        </a>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <News />
                </div>
                <Footer />
            </main>

            <style jsx>{`
                .service-slider-wrapper {
                    position: relative;
                }
                .swiper {
                    padding: 10px;
                    margin: -10px;
                }
                .swiper-slide {
                    height: auto;
                }
                .swiper-button-next,
                .swiper-button-prev {
                    color: #fff;
                    background: #1a1a1a;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .swiper-button-next:after,
                .swiper-button-prev:after {
                    font-size: 20px;
                }
                .swiper-pagination-bullet {
                    background: #fff;
                    opacity: 0.5;
                }
                .swiper-pagination-bullet-active {
                    background: #ff6b00;
                    opacity: 1;
                }
            `}</style>
        </div>
    );
}