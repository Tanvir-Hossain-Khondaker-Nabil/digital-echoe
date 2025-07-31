import React from 'react'

export default function One() {
  return (
    <div>
      <section className="client-info-section">
        <div className="main-container flex-direction-column">
        <header className="section-title">
            CLIENT INFO
        </header>
        <div className="info-border-container">
            <div className="info-grid">
                <div className="info-item">
                <h4 className="info-label">Money Mouth</h4>
                <div className="info-value">December 2024</div>
            </div>
            <div className="info-item text-center">
                <h4 className="info-label">Money Mouth</h4>
                <div className="info-value">December 2024</div>
            </div>
            <div className="info-item text-right">
                <h4 className="info-label">Money Mouth</h4>
                <div className="info-value">December 2024</div>
            </div>
            <style jsx>{`
                .info-item {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 5px;
                flex: 1;
                }
                @media (max-width: 991px) {
                .info-item {
                    width: 100%;
                }
                }
                .info-label {
                color: #f2f2f2;
                font-family: "Gabarito", sans-serif;
                font-size: 22px;
                font-weight: 600;
                line-height: 33px;
                letter-spacing: 1px;
                width: 100%;
                margin: 0;
                }
                @media (max-width: 991px) {
                .info-label {
                    font-size: 20px;
                    line-height: 30px;
                }
                }
                @media (max-width: 640px) {
                .info-label {
                    font-size: 18px;
                    line-height: 27px;
                }
                }
                .info-value {
                color: #f2f2f2;
                font-family: "Inter", sans-serif;
                font-size: 15px;
                font-weight: 500;
                line-height: 27px;
                width: 100%;
                }
                @media (max-width: 991px) {
                .info-value {
                    font-size: 14px;
                    line-height: 24px;
                }
                }
                @media (max-width: 640px) {
                .info-value {
                    font-size: 13px;
                    line-height: 22px;
                }
                }
                .flex-direction-column{
                    flex-direction: column !important;
                }
            `}</style>
            </div>
        </div>
        </div>
    </section>
    <style jsx>{`
        .client-info-section {
        display: flex;
        width: 100%;
        min-height: 500px;
        padding: 121px 0px 120px 0px;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        background-color: #2b2c2c;
        }
        @media (max-width: 991px) {
        .client-info-section {
            padding: 80px 0px;
        }
        }
        @media (max-width: 640px) {
        .client-info-section {
            padding: 60px 0px;
        }
        }
        .main-container {
        max-width: 1266px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 70px;
        padding: 0 20px;
        box-sizing: border-box;
        }
        @media (max-width: 991px) {
        .main-container {
            max-width: 991px;
            gap: 50px;
            padding: 0 30px;
        }
        }
        @media (max-width: 640px) {
        .main-container {
            max-width: 640px;
            gap: 40px;
            padding: 0 20px;
        }
        }
        .section-title {
        width: 100%;
        color: #ee7123;
        font-family: "Gabarito", sans-serif;
        font-size: 65px;
        font-weight: 700;
        line-height: 68px;
        text-transform: uppercase;
        margin: 0;
        }
        @media (max-width: 991px) {
        .section-title {
            font-size: 50px;
            line-height: 55px;
        }
        }
        @media (max-width: 640px) {
        .section-title {
            font-size: 35px;
            line-height: 40px;
            text-align: center;
        }
        }
        .info-border-container {
        display: flex;
        padding: 31px 0px 30px 0px;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        border-top: 1px solid #f2f2f2;
        border-bottom: 1px solid #f2f2f2;
        box-sizing: border-box;
        }
        @media (max-width: 991px) {
        .info-border-container {
            padding: 25px 0px;
        }
        }
        @media (max-width: 640px) {
        .info-border-container {
            padding: 20px 0px;
        }
        }
        .info-grid {
        display: flex;
        padding: 0px 10px;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        box-sizing: border-box;
        }
        @media (max-width: 991px) {
        .info-grid {
            flex-direction: column;
            gap: 30px;
            padding: 0;
        }
        }
        @media (max-width: 640px) {
        .info-grid {
            gap: 25px;
        }
        }
    `}</style>
    </div>
  )
}
