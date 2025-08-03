import React from 'react';
import Header from './Header';
import About from './About';
import Navbar from './Navbar';
import ServiceOne from './ServiceOne';
import Testominal from './Testominal';
import Award from './Award';
import Team from './Team';
import Blog from './Blog';
import Footer from './Footer';
import News from './News';
import SmoothScroll from './SmoothScroll';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import FadeUpSection from './FadeUpSection';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Home = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"] // start of element to end of viewport
    });



    // Make the element move slower than scroll (parallax)
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]); // move up 100px as you scroll

    return (
        <>
                <main id="main_root"  className="main-root">
                    <FadeUpSection>
                        <Navbar />
                   </FadeUpSection>
                    <Header /> 
                    <div id="page_wrapper" className="wrapper">
                        <About />
                        <ServiceOne />
                        <Testominal/>
                        <Award />
                        <Team />
                        <Blog />
                        <News />
                    </div>
                    <Footer />
                </main >
        </>
    );
};

export default Home;