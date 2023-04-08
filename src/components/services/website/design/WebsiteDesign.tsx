import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WebsiteDesign extends Component {
    render = () => {
        return (
            <div className="body-bg-style-1 inner-page">
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
                            <h1>Website Design</h1>
                            <p>What makes a company great? That’s simple. It’s the people who work here.</p>
                        </div>
                    </div>

                    <section className="image-with-description">
                        <div className="trigger-image-with-description"></div>
                        <div className="container">
                            <div className="row align-items-center justify-content-around text-center image-with-description-block">
                                <div className="col-lg-6">
                                    <h2>Responsive Web Design</h2>
                                    <p>A website and online presence strategy help you to market your business
                                        online. A website is important because it helps build credibility as a
                                        business. Another important thing is that you have the capacity to
                                        represent your customers, why should they rely on you.
                                    </p>
                                </div>

                                <div className="col-lg-6 text-lg-right">
                                    <img src="https://cdn.kesency.com/images/services/web-design.svg" alt="web-design" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="our-process section-padding">
                        <div className="container">
                            <h2 className="text-center">Our Process</h2>
                            <p className="section-subheading text-center">Great websites add great values to your business. From wire-framing to
                                <br />PSD designing, we do it all.</p>

                            <div className="service-process-tab">
                                <ul className="nav nav-tabs service-tab-nav" id="service-tab-nav">
                                    <li className="nav-item">
                                        <Link to="#process-tab-1" className="nav-link active" id="process-nav-1" data-bs-toggle="tab" role="tab" aria-controls="process-tab-1"
                                            aria-selected="true">
                                            <i className="ml-edu-86-People"></i>
                                            <span>Consultation</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#process-tab-2" className="nav-link" id="process-nav-2" data-bs-toggle="tab" role="tab" aria-controls="process-tab-2" aria-selected="true">
                                            <i className="ml-des-19-Transform-shape-graphics-design-tool-interface"></i>
                                            <span>Wire-frame</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#process-tab-3" className="nav-link" id="process-nav-3" data-bs-toggle="tab" role="tab" aria-controls="process-tab-3" aria-selected="true">
                                            <i className="ml-tec-9-check-mark-yes-computer-desktop-monitor-laptop"></i>
                                            <span>Final Design</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="tab-content service-tab-content" id="service-tab">
                                    <div className="tab-pane fade show active" id="process-tab-1" role="tabpanel" aria-labelledby="process-nav-1">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/web-process/web-process-img-1.svg" alt="process-image1" className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Consultation</h4>
                                                <p>The consultation stage is the first and most crucial stage of web design.
                                                    This is where you meet with the client to discuss their vision, goals, and
                                                    expectations for their website. During this stage, you should ask the client
                                                    questions about their business and what they want their website to achieve. You
                                                    should also discuss the target audience, preferred color schemes, and branding guidelines.
                                                    Additionally, you should identify any technical requirements, such as e-commerce
                                                    functionality or responsive design, that may impact the design process.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="process-tab-2" role="tabpanel" aria-labelledby="process-nav-2">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/web-process/web-process-img-2.svg" alt="process-image2" className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Wire-frame</h4>
                                                <p>Once you have gathered all the necessary information and specifications,
                                                    you can move on to the wire-framing stage. During this stage, you will create
                                                    a basic framework of the website, which is essentially a blueprint or schematic
                                                    of the layout. You should begin by identifying the essential elements of
                                                    the website, such as the navigation menu, header, and footer. From there,
                                                    you can start to fill in the rest of the layout with content and images.
                                                    It's important to note that wire-framing is not a design stage; it's simply
                                                    a way to visualize the layout of the website and ensure that all the necessary
                                                    elements are in place.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="process-tab-3" role="tabpanel" aria-labelledby="process-nav-3">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/web-process/web-process-img-3.svg" alt="process-image3" className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Final Design</h4>
                                                <p>After the wire-framing stage is complete and approved by the client, you can move 
                                                    on to the final design stage. This is where you will create a polished design that 
                                                    brings the wire-frame to life. You should start by selecting a color scheme and 
                                                    typography that aligns with the client's brand and aesthetic preferences. From 
                                                    there, you can start to create the visual elements of the website, such as buttons, 
                                                    icons, and images. You should also ensure that the design is mobile-friendly and 
                                                    responsive, so that it looks great on any device. Once the final design is complete,
                                                    you can present it to the client for approval, make any necessary revisions, and then 
                                                    move on to the <Link to="/service/website/development" target="_blank">development stage</Link>.
                                                </p>
                                            </div>
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
