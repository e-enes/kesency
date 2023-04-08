import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WebsiteDevelopment extends Component {
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
                            <h1>Website Development</h1>
                            <p>The backbone of any great company is its people.</p>
                        </div>
                    </div>

                    <section className="image-with-description">
                        <div className="trigger-image-with-description"></div>
                        <div className="container">
                            <div className="row align-items-center justify-content-around text-center image-with-description-block">
                                <div className="col-lg-6">
                                    <h2>Full-Stack Web Development</h2>
                                    <p>In full-stack web development, the front-end layer deals with the user interface
                                        and user experience of the application, while the back-end layer handles the
                                        server-side logic, database management, and API development. A full-stack
                                        developer should be capable of understanding and working with all layers
                                        of the stack, as well as deploying and maintaining web applications in
                                        production.
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
                            <p className="section-subheading text-center">Refers to the process of creating web applications that encompass
                                <br /> all layers of the application stack</p>

                            <div className="service-process-tab">
                                <ul className="nav nav-tabs service-tab-nav" id="service-tab-nav">
                                    <li className="nav-item">
                                        <Link to="#process-tab-1" className="nav-link active" id="process-nav-1" data-bs-toggle="tab" role="tab" aria-controls="process-tab-1"
                                            aria-selected="true">
                                            <i className="ml-edu-86-People"></i>
                                            <span>Discovery and Planning</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#process-tab-2" className="nav-link" id="process-nav-2" data-bs-toggle="tab" role="tab" aria-controls="process-tab-2" aria-selected="true">
                                            <i className="ml-des-19-Transform-shape-graphics-design-tool-interface"></i>
                                            <span>Design and Development</span>
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
                                                <h4>Discovery and Planning</h4>
                                                <p>The discovery and planning stage is where we begin by learning about our client's business, goals,
                                                    and objectives. We conduct an in-depth consultation to understand their needs, target audience,
                                                    and project requirements. From there, we create a comprehensive plan that outlines the scope of
                                                    the project, timelines, and milestones. We also create a site map and wireframes to ensure that
                                                    the website's structure and layout align with our client's requirements.
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
                                                <h4>Design and Development</h4>
                                                <p>Once the planning stage is complete, we move on to the <Link to="/service/website/design" target="_blank">design</Link> and development stage. Our team of
                                                    experienced designers and developers work collaboratively to create a custom design that aligns
                                                    with our client's branding guidelines and aesthetic preferences. From there, we begin coding the
                                                    website using front-end and back-end technologies such as HTML, CSS, JavaScript, React, Node.js,
                                                    PHP, and more. During the development stage, we ensure that the website is optimized for performance,
                                                    security, and accessibility. We also conduct extensive testing to ensure that the website functions
                                                    correctly on all devices and browsers.
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
                                                <h4>Launch and Maintenance</h4>
                                                <p>After the design and development stage is complete, we move on to the launch and maintenance stage. We
                                                    deploy the website to a web hosting service and ensure that it's accessible to users. Additionally, we 
                                                    provide ongoing maintenance and support to ensure that the website remains up-to-date, secure, and fully 
                                                    functional. This includes updating software, fixing bugs, and making any necessary changes to the 
                                                    website based on user feedback or changing requirements.
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
