import React, { Component } from "react";

export default class Pricing extends Component {
    render = () => {
        return (
            <div className="body-bg-style-3 inner-page">
                <div className="page-wrapper">
                    <svg className="bg-shape inner-page-shape-banner-right reveal-from-right move-image" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="779px" height="759px">
                        <defs>
                            <linearGradient id="PSgrad_01" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path fillRule="evenodd" fill="url(#PSgrad_01)" d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
                        />
                    </svg>

                    <svg className="bg-shape inner-page-shape-banner-left reveal-from-left move-image" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="779px" height="759px">
                        <defs>
                            <linearGradient id="PSgrad_02" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path fillRule="evenodd" fill="url(#PSgrad_02)" d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
                        />
                    </svg>

                    <div className="inner-page-banner">
                        <div className="container text-center">
                            <h1>Pricing Plans</h1>
                            <p>Based on market demand, we have created 3 packages that will
                                <br />cover all your business needs .</p>
                        </div>
                    </div>

                    <section className="pricing inner-page-pricing">
                        <div className="container">
                            <div className="row pricing-wrapper">
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-block text-center content-block">
                                        <span className="icon-container grad-style-cd-light">
                                            <i className="txt-grad-cd">01</i>
                                        </span>
                                        <h6>SMALL BUSINESS</h6>
                                        <div className="price txt-grad-ef">$590*</div>
                                        <div className="facilities">
                                            <div>3 Pages Responsive Website</div>
                                            <div>1 PPC Campaigns</div>
                                            <div>10 SEO Keywords</div>
                                            <div>Free Domain Name</div>
                                            <div>Free Hosting (VPS) </div>
                                            <div>Optional CDN (Content Delivery Network)</div>
                                        </div>
                                        <a href="#quote" className="custom-btn btn-big grad-style-ef" data-bs-toggle="modal" data-bs-target="#get-a-quote-modal">KICKSTART YOUR BUSINESS</a>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-block text-center content-block">
                                        <span className="icon-container grad-style-ef-light">
                                            <i className="txt-grad-ef">02</i>
                                        </span>
                                        <h6>MEDIUM BUSINESS</h6>
                                        <div className="price txt-grad-ef">$1999*</div>
                                        <div className="facilities">
                                            <div>10 Pages Responsive Website</div>
                                            <div>3 PPC Campaigns</div>
                                            <div>25 SEO Keywords</div>
                                            <div>Free Domain Name</div>
                                            <div>Free Hosting (VDS) </div>
                                            <div>Free CDN (Content Delivery Network) - Standard</div>
                                        </div>
                                        <a href="#quote" className="custom-btn btn-big grad-style-ef" data-bs-toggle="modal" data-bs-target="#get-a-quote-modal">KICKSTART YOUR BUSINESS</a>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-block text-center content-block">
                                        <span className="icon-container grad-style-ab-light">
                                            <i className="txt-grad-ab">03</i>
                                        </span>
                                        <h6>CORPORATE BUSINESS</h6>
                                        <div className="price txt-grad-ef">let's Talk</div>
                                        <div className="facilities">
                                            <div>Unlimited Pages Responsive Website</div>
                                            <div>10 PPC Campaigns</div>
                                            <div>Unlimited SEO Keywords</div>
                                            <div>5 Free Domain Name</div>
                                            <div>Free Hosting (Dedicated)</div>
                                            <div>Free CDN (Content Delivery Network) - Premium</div>
                                        </div>
                                        <a href="#quote" className="custom-btn btn-big grad-style-ef" data-bs-toggle="modal" data-bs-target="#get-a-quote-modal">KICKSTART YOUR BUSINESS</a>
                                    </div>
                                </div>
                                <p>* Approximate price</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
