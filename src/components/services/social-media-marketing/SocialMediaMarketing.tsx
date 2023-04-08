import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SocialMediaMarketing extends Component {
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
                            <h1>Social Media Marketing</h1>
                            <p>It involves creating and sharing engaging content, building a community</p>
                        </div>
                    </div>

                    <section className="image-with-description">
                        <div className="container">
                            <div className="row align-items-center justify-content-around text-center image-with-description-block">
                                <div className="col-lg-6">
                                    <h2>Result Oriented Marketing</h2>
                                    <p>Result Oriented Marketing is a marketing approach that focuses on achieving specific and measurable
                                        outcomes. It involves setting clear goals, developing a targeted strategy, and implementing tactics
                                        that are designed to produce measurable results. The primary objective of Result Oriented Marketing is
                                        to drive business growth by increasing revenue, generating leads, and building brand awareness.
                                    </p>
                                </div>

                                <div className="col-lg-6 text-lg-right">
                                    <img src="https://cdn.kesency.com/images/services/smm.svg" alt="s-m-m" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="our-process section-padding">
                        <div className="container">
                            <h2 className="text-center">Our Process</h2>
                            <p className="section-subheading text-center">Refers to the use of social media platforms such as Facebook, Instagram, Twitter, LinkedIn, and others to promote a product, service, or brand</p>

                            <div className="service-process-tab">
                                <ul className="nav nav-tabs service-tab-nav" id="service-tab-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" id="process-nav-1" data-bs-toggle="tab" to="#process-tab-1" role="tab" aria-controls="process-tab-1"
                                            aria-selected="true">
                                            <i className="ml-edu-8-telescope-geography-astronomy-science-research-discover"></i>
                                            <span>Discover</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="process-nav-2" data-bs-toggle="tab" to="#process-tab-2" role="tab" aria-controls="process-tab-2" aria-selected="true">
                                            <i className="ml-baftwo-43-chess-leader-leadership-horse-strategy"></i>
                                            <span>Strategy</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="process-nav-3" data-bs-toggle="tab" to="#process-tab-3" role="tab" aria-controls="process-tab-3" aria-selected="true">
                                            <i className="ml-baftwo-42-jigsaw-puzzle-solve-problem-strategy"></i>
                                            <span>Optimization</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="process-nav-4" data-bs-toggle="tab" to="#process-tab-4" role="tab" aria-controls="process-tab-4" aria-selected="true">
                                            <i className="ml-baftwo-56-legal-document-sign-contract-paper"></i>
                                            <span>Content</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="process-nav-5" data-bs-toggle="tab" to="#process-tab-5" role="tab" aria-controls="process-tab-5" aria-selected="true">
                                            <i className="ml-baftwo-37-discount-legal-paper-bill-invoice-percentage"></i>
                                            <span>Reporting</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="tab-content service-tab-content" id="service-tab">
                                    <div className="tab-pane fade show active" id="process-tab-1" role="tabpanel" aria-labelledby="process-nav-1">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/smm-process/smm-process-img-1.svg" alt="process-image1" className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Discover</h4>
                                                <p>The discovery stage is where we conduct a thorough analysis of our client's social media presence and their
                                                    competitors. We evaluate their strengths, weaknesses, opportunities, and threats to create a baseline for
                                                    our strategy. We also gather insights on their target audience, the industry trends, and the best practices
                                                    in their field.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="process-tab-2" role="tabpanel" aria-labelledby="process-nav-2">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/smm-process/smm-process-img-2.svg" alt="process-image2" className="img-fluid" />
                                            </div>


                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Strategy</h4>
                                                <p>Once we have a clear understanding of our client's social media presence, we move on to the strategy stage.
                                                    Our team of experts creates a customized strategy that aligns with our client's goals and objectives. This
                                                    strategy includes the platforms to be used, the target audience, the content strategy, and the budget
                                                    allocation. We also set metrics and KPIs to track the success of the campaign.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="process-tab-3" role="tabpanel" aria-labelledby="process-nav-3">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/smm-process/smm-process-img-3.svg" alt="process-image3" className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Optimization</h4>
                                                <p>After the strategy stage, we move on to the optimization stage. Here, we create and optimize our client's
                                                    social media profiles to ensure they are consistent with their branding and messaging. We also perform
                                                    ongoing monitoring and optimization to improve engagement, reach, and conversion rates. This stage includes
                                                    testing different content types, posting times, and ad formats to find the best performing options.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="process-tab-4" role="tabpanel" aria-labelledby="process-nav-4">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/smm-process/smm-process-img-4.svg" alt="process-image4" className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Content</h4>
                                                <p>The content stage is where we create high-quality content that resonates with our client's target
                                                    audience. We use a mix of graphics, videos, and text to create engaging and shareable content. We
                                                    also ensure that the content aligns with the client's branding and messaging while being optimized
                                                    for the specific social media platforms being used.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="process-tab-5" role="tabpanel" aria-labelledby="process-nav-5">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/smm-process/smm-process-img-5.svg" alt="process-image5" className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Reporting</h4>
                                                <p>The final stage is the reporting stage. We provide our clients with regular reports that show the
                                                    performance of their social media marketing efforts. These reports include metrics such as engagement
                                                    rate, reach, conversion rate, and ROI. We also provide recommendations on how to optimize the campaign
                                                    based on the data gathered.
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
