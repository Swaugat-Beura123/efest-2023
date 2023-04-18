import React, { useEffect, useRef } from "react";
import '../../css/hero.scss';
import { gsap } from 'gsap';
import { CustomEase } from "gsap/CustomEase";

function HeroComponent() {
    // gsap.registerPlugin(CustomEase);
    // const customEaseIn = CustomEase.create('custom-ease-in', '0.52, 0.00, 0.48, 1.00');

    // const titleCharts = useRef([]);

    // useEffect(() => {
    //     const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });

    //     tl.staggerFromTo(
    //         titleCharts.current,
    //         1,
    //         { y: "100%", opacity: 0, ease: customEaseIn },
    //         { y: "0%", opacity: 1, ease: customEaseIn },
    //         0.2
    //     );
    // }, [customEaseIn]);
    const containerRef = useRef(null);
    const eveRef = useRef(null);
    const ryRef = useRef(null);
    const foRef = useRef(null);
    const ssilRef = useRef(null);
    const tellsRef = useRef(null);
    const stRef = useRef(null);
    const oryRef = useRef(null);
    const firstDescRef = useRef(null);
    const secondDescRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });
        tl.to(containerRef.current, { opacity: 1, duration: 0.5 })
            .fromTo(eveRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
            .fromTo(ryRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
            .fromTo(foRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
            .fromTo(ssilRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
            .fromTo(tellsRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
            .fromTo(stRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
            .fromTo(oryRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
            .fromTo(firstDescRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
            .fromTo(secondDescRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");
    }, []);

    return (
        <div className="hero">
            <div className="container" ref={containerRef}>
                <div className="title-block">
                    <div className="title-h1">
                        <div className="title-row title-row-1">
                            <div className="title-charts-cont" id="eve"><span ref={eveRef}>Ent</span></div>
                            <div className="title-charts-cont" id="ry"><span ref={ryRef}>re</span></div>
                            <div className="title-charts-cont" id="fo"><span ref={foRef}>pre</span></div>
                            <div className="title-charts-cont" id="ssil"><span ref={ssilRef}>neur's</span></div>
                        </div>
                        <div className="title-row title-row-2">
                            <div className="title-charts-cont" id="tells"><span ref={tellsRef}>FEST</span></div>
                            <div className="title-charts-cont" id="st"><span ref={stRef}>2k</span></div>
                            <div className="title-charts-cont" id="ory"><span ref={oryRef}>23</span></div>
                        </div>
                    </div>
                    <div className="first-desc" ref={firstDescRef}>
                        <span className="desc-1">Book your seats now!!!</span>
                    </div>
                    <div className="second-desc" ref={secondDescRef}>
                        <span className="desc-1">Registration are open!</span>
                    </div>
                </div>



                <div className="scroll-to">
                    <div className="scroll-to__row">
                        <span className="desc-1">Scroll to</span>
                    </div>
                    <div className="scroll-to__row">
                        <span className="desc-1">find out more</span>
                    </div>
                </div>
                {/* <div className="book-btn">
                    <div className="book-btn__circle"></div>
                    <div className="btn-text">
                        <span className="btn-1">
                            Book your ticket
                        </span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default HeroComponent;
