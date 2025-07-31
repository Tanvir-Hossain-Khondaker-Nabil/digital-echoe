import React from 'react'

export default function Two() {
  return (
    <div>
      <section className="project-overview-background">
        <div className="main-container">
            <div className="content-wrapper">
            <div className="text-content">
                <div className="heading-container">
                    <header className="project-title-section">
                        <h2 className="project-title">
                        <span>PROJECT</span>
                        <br />
                        <span>OVERVIEW</span>
                        </h2>
                    </header>
                    <div className="description-container">
                        <p className="project-description">
                        <span>Recognizing the brand's commitment to</span>
                        <br />
                        <span>sustainability and natural ingredients, we crafted</span>
                        <br />
                        <span>a visual and narrative identity that resonate</span>
                        <br />
                        <span>deeply with eco-conscious consumers.</span>
                        </p>
                    </div>

                    <style jsx>{`
                        .heading-container {
                        display: flex;
                        max-height: 316px;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 15.5px;
                        }
                        @media (max-width: 991px) {
                        .heading-container {
                            width: 100%;
                            max-width: 100%;
                        }
                        }

                        .project-title-section {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        align-self: stretch;
                        }

                        .project-title {
                        align-self: stretch;
                        color: #ee7123;
                        font-family: "Gabarito", sans-serif;
                        font-size: 65px;
                        font-weight: 700;
                        line-height: 68px;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        margin: 0;
                        }
                        @media (max-width: 991px) {
                        .project-title {
                            font-size: 50px;
                            line-height: 52px;
                        }
                        }
                        @media (max-width: 640px) {
                        .project-title {
                            font-size: 36px;
                            line-height: 40px;
                            letter-spacing: 1px;
                        }
                        }

                        .description-container {
                        display: flex;
                        padding-top: 14.5px;
                        flex-direction: column;
                        align-items: flex-start;
                        align-self: stretch;
                        }

                        .project-description {
                        align-self: stretch;
                        color: #d9d9d9;
                        font-family: "Inter", sans-serif;
                        font-size: 15px;
                        font-weight: 400;
                        line-height: 27px;
                        margin: 0;
                        }
                        @media (max-width: 991px) {
                        .project-description {
                            font-size: 16px;
                            line-height: 28px;
                        }
                        }
                        @media (max-width: 640px) {
                        .project-description {
                            font-size: 14px;
                            line-height: 24px;
                        }
                        }
                    `}</style>
                    </div>
            </div>
            </div>
            <div className="image-section">
                <div className="image-wrapper">
                    <img
                    src="https://i.postimg.cc/T3rZ4Jtm/2-jpg.png"
                    alt="Project overview visual"
                    className="project-image"
                    />
                </div>

                <style jsx>{`
                    .image-section {
                    display: flex;
                    width: 60%;
                    flex-direction: column;
                    align-items: flex-start;
                    flex-shrink: 0;
                    align-self: stretch;
                    }
                    @media (max-width: 991px) {
                    .image-section {
                        width: 100%;
                        max-width: 700px;
                    }
                    }

                    .image-wrapper {
                    display: flex;
                    height: 642px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    align-self: stretch;
                    }
                    @media (max-width: 991px) {
                    .image-wrapper {
                        height: 500px;
                    }
                    }
                    @media (max-width: 640px) {
                    .image-wrapper {
                        height: 300px;
                    }
                    }

                    .project-image {
                    max-width: 747.5px;
                    width: 100%;
                    flex: 1 0 0;
                    align-self: stretch;
                    border-radius: 15px;
                    object-fit: cover;
                    }
                    @media (max-width: 991px) {
                    .project-image {
                        max-width: 100%;
                    }
                    }
                `}</style>
                </div>
        </div>

        <style jsx>{`
            .project-overview-background {
            display: flex;
            width: 100%;
            padding: 120px 0px;
            flex-direction: column;
            align-items: center;
            min-height: 882px;
            background-color: #171717;
            }
            @media (max-width: 991px) {
            .project-overview-background {
                padding: 80px 20px;
            }
            }
            @media (max-width: 640px) {
            .project-overview-background {
                padding: 60px 16px;
            }
            }

            .main-container {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            flex-direction:row;
            }
            @media (max-width: 991px) {
            .main-container {
                width: 100%;
                max-width: 100%;
                flex-direction: column;
                align-items: center;
                gap: 60px;
            }
            }
            @media (max-width: 640px) {
            .main-container {
                gap: 40px;
            }
            }

            .content-wrapper {
            display: flex;
            width: 40%;
            height: 362px;
            flex-direction: column;
            align-items: flex-start;
            flex-shrink: 0;
            }
            @media (max-width: 991px) {
            .content-wrapper {
                width: 100%;
                max-width: 600px;
                height: auto;
                align-items: center;
                text-align: center;
            }
            }
            @media (max-width: 640px) {
            .content-wrapper {
                max-width: 100%;
            }
            }

            .text-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            }
        `}</style>
        </section>
    </div>
  )
}
