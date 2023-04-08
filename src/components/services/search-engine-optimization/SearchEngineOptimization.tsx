import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SearchEngineOptimization extends Component {
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
                            <h1>Search Engine Optimization</h1>
                            <p>Search Engine Optimization (SEO) is the practice of optimizing a website or online content to improve its ranking and visibility in search engine results pages.</p>
                        </div>
                    </div>

                    <section className="image-with-description">
                        <div className="container">
                            <div className="row align-items-center justify-content-around text-center image-with-description-block">
                                <div className="col-lg-6">
                                    <h2>Stand Out in the Crowd!</h2>
                                    <p>Standing out in the crowd with SEO involves more than just implementing a few optimization techniques. It requires a 
                                        comprehensive and strategic approach that includes ongoing monitoring and adjustments to stay ahead of the 
                                        competition. By partnering with an experienced SEO agency, you can create a customized SEO strategy 
                                        that aligns with your business goals and helps you stand out in the crowded online marketplace.
                                    </p>
                                </div>

                                <div className="col-lg-6 text-lg-right">
                                    <img src="https://cdn.kesency.com/images/services/seo.svg" alt="seo" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="our-process section-padding">
                        <div className="container">
                            <h2 className="text-center">Our Process</h2>
                            <p className="section-subheading text-center">
                                SEO helps your website to rank higher in search engine results pages (SERPs) by making it easier for search engines to understand the content and relevance of your website.
                            </p>

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
                                            <i className="ml-edu-8-telescope-geography-astronomy-science-research-discover"></i>
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
                                                <img src="https://cdn.kesency.com/images/services/process-tab/seo-process/seo-process-img-1.svg" alt="process-image1" className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Discover</h4>
                                                <p>The discovery stage is where we gather information about the client's business, industry,
                                                    target audience, competitors, and existing website performance. This involves conducting
                                                    a thorough website audit, keyword research, and competitor analysis. We use this information
                                                    to identify opportunities and challenges and set a baseline for measuring success.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="process-tab-2" role="tabpanel" aria-labelledby="process-nav-2">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/seo-process/seo-process-img-2.svg" alt="process-image2" className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Strategy</h4>
                                                <p>Based on the information gathered in the discovery stage, we create a customized SEO strategy
                                                    that aligns with the client's business goals and target audience. This involves setting
                                                    specific objectives, selecting target keywords, creating a content plan, and outlining
                                                    technical optimization recommendations. We work closely with the client to ensure that
                                                    the strategy aligns with their goals and expectations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="process-tab-3" role="tabpanel" aria-labelledby="process-nav-3">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/seo-process/seo-process-img-3.svg" alt="process-image3" className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Optimization</h4>
                                                <p>The optimization stage is where we implement the recommendations outlined in the strategy.
                                                    This involves optimizing the website's technical elements, on-page content, and off-page
                                                    factors to improve its visibility and ranking in search engine results pages (SERPs). We
                                                    also optimize the website for mobile responsiveness, site speed, and security.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="process-tab-4" role="tabpanel" aria-labelledby="process-nav-4">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/seo-process/seo-process-img-4.svg" alt="process-image4" className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Content</h4>
                                                <p>The content stage is where we create high-quality and relevant content that aligns
                                                    with the target audience's search intent and interests. This includes creating blog
                                                    posts, articles, infographics, videos, and other content formats that help to improve
                                                    the website's visibility and engagement. We also optimize the content with target
                                                    keywords and ensure that it is shareable and linkable.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="process-tab-5" role="tabpanel" aria-labelledby="process-nav-5">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/seo-process/seo-process-img-5.svg" alt="process-image5" className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Reporting</h4>
                                                <p>The reporting stage is where we measure and report on the effectiveness of the SEO strategy.
                                                    We use analytics tools to monitor website traffic, keyword rankings, and other key
                                                    performance indicators (KPIs) to track progress and identify areas for improvement.
                                                    We provide regular reports to the client that include insights and recommendations
                                                    for ongoing optimization.
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
