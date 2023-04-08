import React, { Component } from "react";
import AOS from "aos";

export default class About extends Component {
    componentDidMount() {
        AOS.init({
            duration: 500,
            offset: 200,
            easing: "ease-in-out",
            once: true,
            delay: 100
        });
    };

    render = () => {
        return (
            <div className="body-bg-style-3 inner-page">
                <div className="page-wrapper">
                    <svg className="bg-shape inner-page-shape-banner-right reveal-from-right move-image" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" width="779px" height="759px">
                        <defs>
                            <linearGradient id="PSgrad_01" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path fillRule="evenodd" fill="url(#PSgrad_01)"
                            d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z" />
                    </svg>

                    <svg className="bg-shape inner-page-shape-banner-left reveal-from-left move-image" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" width="779px" height="759px">
                        <defs>
                            <linearGradient id="PSgrad_02" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path fillRule="evenodd" fill="url(#PSgrad_02)"
                            d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z" />
                    </svg>

                    <div className="inner-page-banner">
                        <div className="container text-center">
                            <h1>About Us</h1>
                            <p>What makes a company great? That’s simple. It’s the people who work here.</p>
                        </div>
                    </div>

                    <section className="about-us section-padding inner-page-about-us">
                        <svg className="bg-shape shape-about reveal-from-bottom" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" width="779px" height="759px">
                            <defs>
                                <linearGradient id="PSgrad_03" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                                    <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                                    <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                                </linearGradient>

                            </defs>
                            <path fillRule="evenodd" fill="url(#PSgrad_03)" d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
                            />
                        </svg>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <img src="https://cdn.kesency.com/images/inner-page-about-img.svg" alt="about" className="img-fluid img-round" />
                                </div>

                                <div className="col-lg-6">
                                    <h2>We’re Your Partner in Your Success</h2>
                                    <p>Kesency is a full-service digital agency that helps businesses grow and succeed online.
                                        We specialize in web design, branding, SEO, PPC, social media marketing, and mobile app development.
                                    </p>
                                    <p>We believe that digital is more than just technology and tools; it's about connecting with
                                        people and creating meaningful experiences. Our team of experts is dedicated to understanding our clients'
                                        needs and goals and delivering customized solutions that exceed their expectations.
                                    </p>
                                    <div className="counter-wrapper inner-page-counter-wrapper d-flex justify-content-between">
                                        <div className="inner-block">
                                            <div className="counter-block d-block txt-grad-ef" data-aos="zoom-in">
                                                <span className="counter">150</span>+
                                            </div>
                                            HAPPY
                                            <br /> CLIENTS
                                        </div>
                                        <div className="inner-block">
                                            <div className="counter-block d-block txt-grad-ab" data-aos="zoom-in">
                                                <span className="counter">380</span>+
                                            </div>
                                            PROJECTS
                                            <br /> COMPLETED
                                        </div>
                                        <div className="inner-block">
                                            <div className="counter-block d-block txt-grad-cd" data-aos="zoom-in">
                                                <span className="counter">800</span>+
                                            </div>
                                            RUNNING
                                            <br /> PROJECTS
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
