import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MobileAppDesign extends Component {
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
                            <h1>App Development</h1>
                            <p>We’ll create mobile applications specifically for your company.</p>
                        </div>
                    </div>

                    <section className="image-with-description">
                        <div className="container">
                            <div className="row align-items-center justify-content-around text-center image-with-description-block">
                                <div className="col-lg-6">
                                    <h2>Mobile First Concept</h2>
                                    <p>A mobile app is an online presence strategy that helps you market your business online.
                                        A mobile app is important because it helps build credibility as a business, however we
                                        recommend this only to medium/large companies. Another important thing is that you have
                                        the ability to represent your clients, why should they rely on you.
                                    </p>
                                </div>

                                <div className="col-lg-6 text-lg-right">
                                    <img src="https://cdn.kesency.com/images/services/app-development.svg" alt="app" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="our-process section-padding">
                        <div className="container">
                            <h2 className="text-center">Our Process</h2>
                            <p className="section-subheading text-center">Great mobile app add great values to your business. From wire-framing to
                                <br />PSD designing, we do it all.</p>

                            <div className="service-process-tab">
                                <ul className="nav nav-tabs service-tab-nav" id="service-tab-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" id="process-nav-1" data-bs-toggle="tab" to="#process-tab-1" role="tab" aria-controls="process-tab-1"
                                            aria-selected="true">
                                            <i className="ml-edu-86-People"></i>
                                            <span>Consultation</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="process-nav-2" data-bs-toggle="tab" to="#process-tab-2" role="tab" aria-controls="process-tab-2" aria-selected="true">
                                            <i className="ml-des-19-Transform-shape-graphics-design-tool-interface"></i>
                                            <span>Wire-frame</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="process-nav-3" data-bs-toggle="tab" to="#process-tab-3" role="tab" aria-controls="process-tab-3" aria-selected="true">
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
                                                <p>The consultation stage is where we discuss with our client their vision, goals, and requirements for the mobile app design. 
                                                    We gather information on their target audience, the features they want to include, and the desired user experience. 
                                                    We also provide our expert opinion on the latest design trends, best practices, and feasibility of the project. 
                                                    This stage sets the foundation for the wireframing stage.
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
                                                <p>The wireframe stage is where we create a visual representation of the app's layout and functionality. 
                                                    We create a basic outline of the app's features, navigation, and user interface. This stage focuses 
                                                    on the functionality of the app and the user experience. We work with the client to refine the 
                                                    wireframes and ensure that they align with their requirements and vision.
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
                                                <p>The final design stage is where we create the visual design of the app based on the approved wireframes. 
                                                    We create a high-fidelity design that includes colors, typography, and graphics that align with the 
                                                    client's branding and messaging. We also ensure that the design is optimized for different mobile 
                                                    devices and platforms. This stage involves creating a polished design that reflects the app's 
                                                    functionality and enhances the user experience.
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
