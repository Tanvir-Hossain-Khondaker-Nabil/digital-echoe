import React from 'react'

export default function Three() {
  return (
    <div>
      <section className="project-showcase d-slider-none">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/123764bf79a4c0664ed84e5d51ff3d14fabdeb90?placeholderIfAbsent=true&apiKey=e2d00166ad2549a581c34d0279f7856e"
          className="background-image"
          alt="Project background"
        />
        <div className="content-container">
          <header className="project-header">
        <h1 className="main-title">
          ARTES
          <br />
          GRAFICAS © 2021
        </h1>
      </header>
      <style jsx>{`
        .project-header {
          z-index: 0;
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: start;
          font-family: Gabarito, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 100px;
          color: #FFF;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 2px;
          line-height: 130px;
          justify-content: start;
        }

        @media (max-width: 991px) {
          .project-header {
            max-width: 100%;
            font-size: 40px;
            line-height: 58px;
          }
        }

        .main-title {
          color: #FFF;
          line-height: 130px;
          letter-spacing: 2px;
          margin: 0;
          font-size: inherit;
          font-weight: inherit;
          text-transform: inherit;
        }

        @media (max-width: 991px) {
          .main-title {
            max-width: 100%;
            font-size: 40px;
            line-height: 58px;
          }
        }
      `}</style>
          <div className="project-meta">
        <div className="meta-container">
          <div className="category-tags">
            <span className="category-tag">
              Photography
            </span>
            <span className="category-tag">
              branding
            </span>
          </div>
          <div className="next-project-label">
            NEXT - PROJECT
          </div>
        </div>
      </div>
      <style jsx>{`
        .project-meta {
          z-index: 0;
          width: 100%;
          padding-top: 30px;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 500;
        }

        @media (max-width: 991px) {
          .project-meta {
            max-width: 100%;
          }
        }

        .meta-container {
          align-items: center;
          display: flex;
          width: 100%;
          justify-content: start;
          flex-wrap: wrap;
          gap: 832.31px;
        }

        @media (max-width: 991px) {
          .meta-container {
            max-width: 100%;
          }
        }

        .category-tags {
          align-items: start;
          border-radius: 0px 0px 0px var(--radius-15, 15px);
          align-self: stretch;
          display: flex;
          margin-top: auto;
          margin-bottom: auto;
          gap: 11.9px;
          font-size: 13px;
          color: #FFF;
          white-space: nowrap;
          justify-content: start;
        }

        @media (max-width: 991px) {
          .category-tags {
            white-space: initial;
          }
        }

        .category-tag {
          color: #FFF;
          font-size: 13px;
          font-weight: 500;
          line-height: 19.5px;
          border-radius: 30px;
          padding: 5px 10px;
          background-color: #171717;
        }

        @media (max-width: 991px) {
          .category-tag {
            white-space: initial;
          }
        }

        @media (max-width: 767px) {
           .d-slider-none{
          display:none !important;
          }
        }

        .next-project-label {
          color: #D9D9D9;
          font-size: 15px;
          font-weight: 500;
          line-height: 22.5px;
          align-self: stretch;
          margin-top: auto;
          margin-bottom: auto;
          text-transform: uppercase;
        }
      `}</style>
         <nav className="navigation-button">
        <div className="arrow-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f2d42b2540d10e7875b5c8778edb19964d88978?placeholderIfAbsent=true&apiKey=e2d00166ad2549a581c34d0279f7856e"
            className="arrow-icon"
            alt="Next project arrow"
          />
        </div>
      </nav>
      <style jsx>{`
        .navigation-button {
          justify-content: center;
          align-items: center;
          border-radius: 65px;
          position: absolute;
          z-index: 0;
          display: flex;
          min-height: 130px;
          width: 130px;
          height: 130px;
          right: 50px;
          top: 0px;
          background-color: #F3F3F3;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .navigation-button:hover {
          background-color: #e0e0e0;
        }

        .arrow-container {
          align-self: stretch;
          margin-top: auto;
          margin-bottom: auto;
          width: 45px;
          padding-bottom: 1px;
        }

        .arrow-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 100%;
        }
      `}</style>
        </div>
      </section>
      <style jsx>{`
        .project-showcase {
          position: relative;
          display: flex;
          padding-top: 120px;
          padding-bottom: 120px;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 991px) {
          .project-showcase {
            padding-top: 100px;
            padding-bottom: 100px;
          }
        }

        .background-image {
          aspect-ratio: 2.56;
          object-fit: contain;
          object-position: center;
          width: 100%;
          position: absolute;
          z-index: 0;
          left: 0px;
          right: 0px;
          top: 0px;
          bottom: -1px;
        }

        @media (max-width: 991px) {
          .background-image {
            max-width: 100%;
          }
        }

        .content-container {
          max-width: 1250px;
          align-self: center;
          position: relative;
          z-index: 0;
          width: 1250px;
        }
          .d-slider-none{
          display:block;
          }
      `}</style>
    </div>
  )
}
