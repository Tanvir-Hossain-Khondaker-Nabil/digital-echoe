import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    function nav(){
        const nav = document.querySelector('.main-navigation');
        if (nav) {
            nav.classList.toggle('nav-hidden');
            document.body.classList.toggle('overflow-hidden');
        }
    }

  return (
    <>

      <header id="site_menu_header" className="site-header flex-direction-column" style={{ zIndex: 9999999, opacity: 1,  }}>
        <div className="main-logo d-flex align-items-center justify-content-between w-100">
          <a
            
            data-dsn-text="echoes"
            className="custom-logo-link main-brand effect-ajax"
            rel="home"
            aria-current="page"
          >
            <img src="/image/logo.png" className="custom-logo logo-light" alt="echoes" />
            <img src="/image/logo.png" className="custom-logo logo-dark" alt="echoes" />
          </a>

          <i className='fas fa-bars navs-icon' onClick={nav} style={{color: 'white',fontSize: '25px',margin: '0 0 0 auto'}}></i>
        </div>

        <nav className="main-navigation nav-hidden"
        style={{zIndex: 9999999}}>
          <ul id="dsn-primary-list" className="primary-nav h2">
            <li className="nav-item text-white">
              <Link to="/" className="cursor-pointer">
                <span className="overflow" >Home</span>
              </Link>
            </li>
            <li className="nav-item has-sub-menu">
              <Link to="/about" xtitle="Portfolio">
                <span className="overflow">About</span>
              </Link>
            </li>
            <li className="nav-item has-sub-menu">
              <Link to="/service" ><span className="overflow">Service</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/band"><span className="overflow">Portfolio</span></Link>
            </li>            
            <li className="nav-item"><Link to="/contact" ><span className="overflow">Contact</span></Link></li>
          </ul>

          {/* Info Section */}
          <div className="container-content d-flex flex-column justify-content-center section-margin">
            {/* <div className="nav__info">
              <div className="nav-content">
                <h5 className="sm-title-block mb-10">Studio</h5>
                26-30 New Damietta
                <br />
                El-Mahalla El-Kubra, SK1 66LM
              </div>
              <div className="nav-content mt-30">
                <h5 className="sm-title-block mb-10">Contact</h5>
                <p className="links over-hidden mb-1">
                  <a className="link-hover d-block" href="tel:00201004392260" data-hover-text="+00 (2)012 3321">+00 (2)01004392260</a>
                  <a className="link-hover" href="tel:00201024552406" data-hover-text="+00 (2)012 3321">+00 (2)01024552406</a>
                </p>
                <p className="links over-hidden">
                  <a className="link-hover" href="mailto:info@dsngrid.com" data-hover-text="info@dsngrid.com">info@dsngrid.com</a>
                </p>
              </div>
            </div> */}

            {/* Social */}
            <div className="nav-social nav-content mt-30">
              <div className="nav-social-inner p-relative">
                <h5 className="sm-title-block mb-10">Follow us</h5>
                <ul style={{ '--dsn-li-name': 'dsn6' }}>
                  <li style={{ '--dsn-li-index': 0 }}><a  target="_blank" rel="nofollow noopener noreferrer">Dribbble.</a></li>
                  <li style={{ '--dsn-li-index': 1 }}><a  target="_blank" rel="nofollow noopener noreferrer">Behance.</a></li>
                  <li style={{ '--dsn-li-index': 2 }}><a  target="_blank" rel="nofollow noopener noreferrer">Linkedin.</a></li>
                  <li style={{ '--dsn-li-index': 3 }}><a  target="_blank" rel="nofollow noopener noreferrer">Twitter.</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>


        <div className="bg-load background-main"></div>

        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="bg-load dsn-svg-transition">
          <path vectorEffect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
        </svg>
      </header>
      <style>{`
          @media (max-width: 767px) {
              .navs-icon{
                display:block !important;
              }
          }
          .navs-icon{
            display:none;
          }
          .site-header ul.primary-nav {
              display: flex;
              padding-left: 0;
              margin-bottom: 0;
              flex-wrap: wrap;
              justify-content: end;
              width:100%;
          }
          .main-navigation {
              width:100%;
          }
          .site-header {
              flex-wrap: nowrap;
              flex-direction: row;
          }
              .nav-item a span:hover{
                margin-top:-6px !important;
                color:#ec7023 !important;
              }
      `}</style>
    </>
  );
};

export default Navbar;