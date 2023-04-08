import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LogoBranding extends Component {
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
                            <h1>Logo &amp; Branding</h1>
                            <p>We’ll create custom tailored logo specifically for your company.</p>
                        </div>
                    </div>

                    <section className="image-with-description">
                        <div className="container">
                            <div className="row align-items-center justify-content-around text-center image-with-description-block">
                                <div className="col-lg-6">
                                    <h2>Why Branding Matters?</h2>
                                    <p>Branding is an essential element of any business or organization, and it plays a critical role
                                        in attracting and retaining customers. A brand is more than just a logo; it encompasses the entire
                                        image and perception of a business, including its products, services, values, and customer experience.
                                        Branding matters because it helps to differentiate a business from its competitors and creates a lasting 
                                        impression on customers.
                                    </p>
                                </div>

                                <div className="col-lg-6 text-lg-right">
                                    <img src="https://cdn.kesency.com/images/services/logo-and-branding.svg" alt="lab" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="our-process section-padding">
                        <div className="container">
                            <h2 className="text-center">Our Process</h2>
                            <p className="section-subheading text-center">A brand is a combination of all the assets used to define and differentiate your business. It’s how you make your customers feel, your unique personality, and the message you aim to send.</p>

                            <div className="service-process-tab">
                                <ul className="nav nav-tabs service-tab-nav" id="service-tab-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" id="process-nav-1" data-bs-toggle="tab" to="#process-tab-1" role="tab" aria-controls="process-tab-1"
                                            aria-selected="true">
                                            <i className="ml-des-21-Transform-shape-graphics-design-tool-interface-layers-tool-bar"></i>
                                            <span>Exploration</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="process-nav-2" data-bs-toggle="tab" to="#process-tab-2" role="tab" aria-controls="process-tab-2" aria-selected="true">
                                            <i className="ml-des-62-Precision-compasses-graphics-design-tool-interface"></i>
                                            <span>Sketches</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="process-nav-3" data-bs-toggle="tab" to="#process-tab-3" role="tab" aria-controls="process-tab-3" aria-selected="true">
                                            <i className="ml-des-35-divide-unite-intersect-exclude-graphics-design-tool-interface"></i>
                                            <span>Digitization</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="process-nav-4" data-bs-toggle="tab" to="#process-tab-4" role="tab" aria-controls="process-tab-4" aria-selected="true">
                                            <i className="ml-des-49-color-picker-paint-graphics-design-tool-interface"></i>
                                            <span>Color</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="process-nav-5" data-bs-toggle="tab" to="#process-tab-5" role="tab" aria-controls="process-tab-5" aria-selected="true">
                                            <i className="ml-tec-9-check-mark-yes-computer-desktop-monitor-laptop"></i>
                                            <span>Final Logo</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="tab-content service-tab-content" id="service-tab">
                                    <div className="tab-pane fade show active" id="process-tab-1" role="tabpanel" aria-labelledby="process-nav-1">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/logo-and-branding-process/logo-and-branding-process-img-1.svg" alt="process-image1"
                                                    className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Consultation</h4>
                                                <p>The consultation stage is where we begin by learning about our client's business, goals,
                                                    and objectives. We conduct an in-depth consultation to understand their needs, target
                                                    audience, and project requirements. We also review any existing branding and marketing
                                                    materials to ensure that the new logo and branding align with the company's existing visual
                                                    identity.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="process-tab-2" role="tabpanel" aria-labelledby="process-nav-2">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/logo-and-branding-process/logo-and-branding-process-img-2.svg" alt="process-image2"
                                                    className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Sketches</h4>
                                                <p>Once we have a clear understanding of our client's needs and requirements, we move on
                                                    to the sketches stage. Our team of experienced designers create multiple sketches and
                                                    concepts for the new logo and branding. These sketches are based on our client's
                                                    requirements and feedback from the consultation stage.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="process-tab-3" role="tabpanel" aria-labelledby="process-nav-3">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/logo-and-branding-process/logo-and-branding-process-img-3.svg" alt="process-image3"
                                                    className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Digitization</h4>
                                                <p>After the sketches stage, we digitize the best concepts and refine them further.
                                                    We use design software such as Adobe Illustrator to create vector versions of the
                                                    sketches, which allows us to easily modify and resize the logo without losing
                                                    quality. During this stage, we experiment with different typefaces, layouts, and
                                                    shapes to create a unique and memorable logo.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="process-tab-4" role="tabpanel" aria-labelledby="process-nav-4">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/logo-and-branding-process/logo-and-branding-process-img-4.svg" alt="process-image4"
                                                    className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Color</h4>
                                                <p>Once we have a strong vector version of the logo, we move on to the color stage.
                                                    We experiment with different color palettes to find the perfect combination
                                                    that aligns with our client's branding guidelines and aesthetic preferences.
                                                    We also ensure that the colors chosen are appropriate for the industry and
                                                    target audience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="process-tab-5" role="tabpanel" aria-labelledby="process-nav-5">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-lg-5 text-lg-right">
                                                <img src="https://cdn.kesency.com/images/services/process-tab/logo-and-branding-process/logo-and-branding-process-img-5.svg" alt="process-image5"
                                                    className="img-fluid" />
                                            </div>

                                            <div className="col-lg-6 offset-lg-1 text-center text-lg-left">
                                                <h4>Final Design</h4>
                                                <p>After the color stage, we present our client with a selection of final logo options.
                                                    These logos are refined and polished versions of the best concepts from the previous
                                                    stages. Our client selects their preferred logo, and we provide them with the necessary
                                                    files and assets for their branding and marketing materials. We also provide guidelines
                                                    on how to use the logo to ensure that it is consistent across all mediums and applications.
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
