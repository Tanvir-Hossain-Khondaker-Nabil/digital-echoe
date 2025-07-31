import React, { useState, useEffect, useRef } from "react";
import AnimatedText from './AnimatedTextTo';
import { useAnimation } from './useAnimation';
import axios from 'axios';

const About = () => {
    const [about, setAbout] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const res = await axios.get('https://dev.digital-echoes.binary-group.com/admin/api/abouts');
                if (res.data && res.data.length > 0) {
                    setAbout(res.data[0]);
                }
            } catch (err) {
                console.error('Fetch error:', err);
                setError('Failed to load about section');
            } finally {
                setLoading(false);
            }
        };

        fetchAbout();
    }, []);


    if (loading) return <div className="loading"></div>;
    if (error) return <div className="error">{error}</div>;
    if (!about) return <div className="no-data">No about data available</div>;

    return (
        <section className="about-section section-padding p-relative" id='about' ref={sectionRef}>
            <div className="container">
                <div className="d-grid grid-lg-2">
                    <div className="box-text p-relative">
                        
                        <div className="bg-pattern p-absolute w-100"></div>
                        <AnimatedText className="title mb-30 dsn-fill title-orange">
                            {about.title.split(' ').map((word, index) =>
                                index === 3
                                    ? <React.Fragment key={index}><br />{word.toUpperCase()}</React.Fragment>
                                    : ` ${word}`
                            )}
                        </AnimatedText>
                        <div className="dsn-btn dsn-btn-shape mt-30 d-flex">
                            <a
                                className="button background-section effect-ajax"
                                href={about.button_link ?? '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="title-btn p-relative z-index-1 heading-color" data-animate-text={about.button_title}>
                                    <span>{about.button_title}</span>
                                </span>
                            </a>

                            <span className="icon background-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="corner-box over-hidden">
                        {about.photo && (
                            <img
                                className="cover-bg-img"
                                src={`https://dev.digital-echoes.binary-group.com/admin/${about.photo}`}
                                alt="About"
                                loading="lazy"
                            />
                        )}
                    </div>
                </div>

                <div className="experience d-flex justify-content-between background-section mt-30 dsn-layout-fade-up">
                    <div className="facts-inner p-10 d-grid grid-lg-2 gap-10 d-grid-no-space">
                        <div className="fact-item background-main has-border-radius p-30 dsn-up">
                            <h3 className="title title-color d-flex align-items-start justify-content-center">
                                {about.first_container_number}
                                <span className="background-theme p-5 has-border-radius">+</span>
                            </h3>
                            <p className="text-upper mt-20 v-light background-main p-5 text-center heading-color">
                                {about.first_container_title}
                            </p>
                        </div>

                        <div className="fact-item background-main has-border-radius p-30 dsn-up">
                            <h3 className="title title-color d-flex align-items-start justify-content-center">
                                {about.second_container_number}
                                <span className="background-theme p-5 has-border-radius">%</span>
                            </h3>
                            <p className="text-upper mt-20 v-light background-main p-5 text-center heading-color">
                                {about.second_container_title}
                            </p>
                        </div>
                    </div>

                    <div className="box-video dsn-up v-dark-head">
                        <div
                            className="box-img h-100 w-100 p-absolute top-0 right-0 dsn-hero-parallax-img before-z-index"
                            data-overlay="5"
                            style={{ padding: "10px 0", background: '#3e3e3e' }}
                        >
                            {about.third_container_photo && (
                                <img
                                    className="cover-bg-img"
                                    src={`https://dev.digital-echoes.binary-group.com/admin/${about.third_container_photo}`}
                                    alt="Video Background"
                                    loading="lazy"
                                />
                            )}
                        </div>
                        <div className="ex d-flex align-items-end h-100 p-relative z-index-1" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;