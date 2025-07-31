import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import News from '../components/News'
import Footer from '../components/Footer'

export default function SingleBlog() {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await fetch(`https://dev.digital-echoes.binary-group.com/admin/api/blogs/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch service');
                }
                const data = await response.json();
                setService(data[0]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchService();
    }, [id]);

    if (loading) {
        return (
            <div className="main-root"> </div>
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

    if (!service) {
        return (
            <div className="main-root">
                <div className="container text-center py-5">
                    <p>Service not found</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <main id="main_root" className="main-root">
                <Navbar />
                <div className="wrapper" id="page_wrapper">
                    <div className="p-relative mb-section">
                        <div className="p-relative box-image-parallax dsn-style-cards">
                            <div className="root-posts has-filter">
                                <div className="dsn-filtering z-index-1 p-relative w-100 mb-70 pt-50 pb-50">
                                </div>
                                <div className="container" style={{ paddingBottom: "500px" }}>
                                    <div
                                        className="dsn-posts dsn-post-type-cards box-image-normal d-grid grid-md-12 dsn-isotope use-filter v-dark-head"
                                        style={{
                                            "--grid-gap": "30px",
                                            "--grid-gap-col": "30px",
                                            "--grid-gap-row": "30px",
                                            gap: "30px",
                                            height: "fit-to-content",
                                            position: "relative",
                                        }}>
                                        <article
                                            className="dsn-item-post grid-item over-hidden p-relative has-border-radius fashion w-100"
                                            style={{
                                                left: "0px",
                                                position: "absolute",
                                                top: "0px",
                                                height: "auto",
                                            }}>
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
                                                <div className="post-content background-section z-index-1 d-flex flex-column">
                                                    <div className="post-info d-flex justify-content-between align-items-center p-20">
                                                        
                                                        <h2 className="post-title word-wrap d-inline-block title-block text-upper">
                                                            <a className="effect-ajax init-color">
                                                                {service.title}
                                                            </a>
                                                        </h2>
                                                    </div>
                                                    <div className="post-description p-20" dangerouslySetInnerHTML={{ __html: service.description }} />
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <News />
                </div>
                <Footer />
            </main>
        </div>
    )
}