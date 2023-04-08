import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import AOS from "aos";

export default class Home extends Component {
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
        const settings = {
            dots: true,
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            delay: 2555 ^ 2
        };

        return (
            <>
                <div className="banner small-agency-home-header-bg" id="top">
                    <svg className="bg-shape shape-home-banner reveal-from-right" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" width="779px" height="759px">
                        <defs>
                            <linearGradient id="PSgrad_01" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path fillRule="evenodd" fill="url(#PSgrad_01)" d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
                        />
                    </svg>

                    <div className="container">
                        <div className="banner-content">
                            <h1>Make your
                                <br /> Business a Reality</h1>
                            <p className="section-subheading">Empowering entrepreneurs to turn their dreams
                                <br /> into profitable businesses. Start your journey today.</p>
                            <Link to="/portfolio" className="custom-btn btn-big grad-style-ef page-scroll">OUR PORTFOLIO</Link>
                        </div>
                    </div>
                </div>

                <section className="services z-3">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 m-b-30" data-aos="fade-up">
                                <Link to="/service/logo/and/branding" target="_blank" rel="noreferrer" className="service-box text-center content-block">
                                    <div className="box-bg grad-style-cd"></div>
                                    <span className="icon-container grad-style-cd-light">
                                        <i className="ml-des-62-Precision-compasses-graphics-design-tool-interface txt-grad-cd"></i>
                                    </span>
                                    <h5 className="text-center">Logo &amp; Branding</h5>
                                    <p className="color-p-desc">Create a strong and recognizable identity for your business with our expert logo and branding services. Our team of skilled designers will work closely with you to bring your vision to life and leave a lasting impression on your audience.</p>
                                </Link>
                            </div>

                            <div className="col-lg-4 col-md-6 m-b-30" data-aos="fade-up">
                                <Link to="/service/website/design" target="_blank" rel="noreferrer" className="service-box text-center content-block">
                                    <div className="box-bg grad-style-ab"></div>
                                    <span className="icon-container grad-style-ab-light">
                                        <i className="ml-des-57-upload-download-sync-application-device-mobile-computer txt-grad-ab"></i>
                                    </span>
                                    <h5 className="text-center">Website Development</h5>
                                    <p className="color-p-desc">Your website is often the first impression customers have of your business. Our expert website design services will ensure that your online presence is modern, functional, and visually appealing. From custom design to user experience, our team will work with you to create a website that showcases your brand and drives conversions.</p>
                                </Link>
                            </div>

                            <div className="col-lg-4 col-md-6 m-b-30" data-aos="fade-up">
                                <Link to="/service/mobile/app/design" target="_blank" rel="noreferrer" className="service-box text-center content-block">
                                    <div className="box-bg grad-style-ef"></div>
                                    <span className="icon-container grad-style-ef-light">
                                        <i className="ml-tec-45-responsive-mobile-phone-tablet-computer-desktop-monitor-laptop txt-grad-ef"></i>
                                    </span>
                                    <h5 className="text-center">Mobile App Development</h5>
                                    <p className="color-p-desc">In today's mobile-first world, having a powerful mobile app can help you engage with your customers and stand out in a crowded market. Our experienced mobile app development team will work with you to turn your vision into a reality, creating a customized app that meets your unique business needs.</p>
                                </Link>
                            </div>

                            <div className="col-lg-4 col-md-6 m-b-30" data-aos="fade-up">
                                <Link to="/service/search/engine/optimization" target="_blank" rel="noreferrer" className="service-box text-center content-block">
                                    <div className="box-bg grad-style-cd"></div>
                                    <span className="icon-container grad-style-cd-light">
                                        <i className="ml-tec-8-search-magnifier-computer-desktop-monitor-laptop txt-grad-cd"></i>
                                    </span>
                                    <h5 className="text-center">Search Engine Optimization</h5>
                                    <p className="color-p-desc">Drive traffic and boost your online visibility with our comprehensive search engine optimization (SEO) services. Our SEO experts will work with you to develop a customized strategy that targets the keywords and phrases your audience is searching for.</p>
                                </Link>
                            </div>

                            <div className="col-lg-4 col-md-6 m-b-30" data-aos="fade-up">
                                <Link to="/service/pay/per/click" target="_blank" rel="noreferrer" className="service-box text-center content-block">
                                    <div className="box-bg grad-style-ab"></div>
                                    <span className="icon-container grad-style-ab-light">
                                        <i className="ml-symtwo-34-cursor-click-browser-website-arrow-computer txt-grad-ab"></i>
                                    </span>
                                    <h5 className="text-center">Pay-Per-Click</h5>
                                    <p className="color-p-desc">Drive targeted traffic to your website and increase conversions with our pay-per-click (PPC) advertising services. Our experienced PPC team will create a customized strategy that targets your ideal customer, utilizing platforms like Google Ads and social media advertising to reach them at the right time and place.</p>
                                </Link>
                            </div>

                            <div className="col-lg-4 col-md-6 m-b-30" data-aos="fade-up">
                                <Link to="/service/social/media/marketing" target="_blank" rel="noreferrer" className="service-box text-center content-block">
                                    <div className="box-bg grad-style-ef"></div>
                                    <span className="icon-container grad-style-ef-light">
                                        <i className="ml-dat-63-database-computer-network-internet-globe-server txt-grad-ef"></i>
                                    </span>
                                    <h5 className="text-center">Social Media Marketing</h5>
                                    <p className="color-p-desc">Engage with your audience and grow your brand on social media with our expert social media marketing services. Our team will develop a customized strategy that aligns with your brand's voice and values, creating engaging content and managing your social media channels to increase your visibility and attract new followers.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-us">
                    <svg className="bg-shape shape-about reveal-from-right" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" width="779px" height="759px">
                        <defs>
                            <linearGradient id="PSgrad_02" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                            </linearGradient>

                        </defs>
                        <path fillRule="evenodd" fill="url(#PSgrad_02)" d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
                        />
                    </svg>

                    <div className="video-play-bg grad-style-cd">
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ml-auto">
                                <h2>We Lead from the Front</h2>
                                <p>At our company, we believe in leading by example and setting the standard for excellence in everything we do. Our team of experienced professionals is dedicated to providing innovative solutions and exceptional service, always staying ahead of the curve and striving for continuous improvement. </p>
                                <p>We're committed to being industry leaders and pushing the boundaries of what's possible, both for our clients and ourselves. We lead from the front to ensure the success of our clients and the growth of our business.</p>
                                <div className="counter-wrapper d-flex justify-content-between">
                                    <div className="inner-block">
                                        <div className="counter-block d-block txt-grad-ef" data-aos="zoom-in">
                                            <span className="counter" >150</span>+
                                        </div>
                                        HAPPY
                                        <br /> CLIENTS
                                    </div>
                                    <div className="inner-block">
                                        <div className="counter-block d-block txt-grad-ab" data-aos="zoom-in" data-aos-delay="300">
                                            <span className="counter" >380</span>+
                                        </div>
                                        PROJECTS
                                        <br /> COMPLETED
                                    </div>
                                    <div className="inner-block">
                                        <div className="counter-block d-block txt-grad-cd" data-aos="zoom-in" data-aos-delay="600">
                                            <span className="counter" >800</span>+
                                        </div>
                                        RUNNING
                                        <br /> PROJECTS
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="featured-projects section-padding">
                    <svg className="bg-shape shape-project reveal-from-left" xmlns="http://www.w3.org/2000/svg"
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
                        <h2 className="text-center">Our Impressive Portfolio</h2>
                        <p className="section-subheading text-center">
                            Sometimes we show what we do, and how
                        </p>

                        <div className="featured-project-showcase text-center">
                            <div className="row equalHeightWrapper">

                                <div className="grid-item col-md-6 col-lg-4" data-aos="fade-up">
                                    <Link to="#" className="featured-content-block content-block" data-bs-toggle="modal" data-bs-target="#featured-project-modal">
                                        <div className="img-container">
                                            <img src="https://cdn.kesency.com/images/featured-projects/featured-project-1.svg" alt="featured1" className="img-fluid" />
                                        </div>
                                        <h5 className="equalHeight">
                                            <span className="content-block__sub-title">Web Design</span>
                                            Creative Web Design
                                        </h5>
                                    </Link>
                                </div>
                                <div className="grid-item col-md-6 col-lg-4" data-aos="fade-up">
                                    <Link to="#" className="featured-content-block content-block" data-bs-toggle="modal" data-bs-target="#featured-project-modal">
                                        <div className="img-container">
                                            <img src="https://cdn.kesency.com/images/featured-projects/featured-project-2.svg" alt="featured2" className="img-fluid" />
                                        </div>
                                        <h5 className="equalHeight">
                                            <span className="content-block__sub-title">Web Design</span>
                                            Complex Deshboard
                                        </h5>
                                    </Link>
                                </div>
                                <div className="grid-item col-md-6 col-lg-4" data-aos="fade-up">
                                    <Link to="#" className="featured-content-block content-block" data-bs-toggle="modal" data-bs-target="#featured-project-modal">
                                        <div className="img-container">
                                            <img src="https://cdn.kesency.com/images/featured-projects/featured-project-3.svg" alt="featured3" className="img-fluid" />
                                        </div>
                                        <h5 className="equalHeight">
                                            <span className="content-block__sub-title">App Design</span>
                                            Food App Design
                                        </h5>
                                    </Link>
                                </div>
                                <div className="grid-item col-md-6 col-lg-4" data-aos="fade-up">
                                    <Link to="#" className="featured-content-block content-block" data-bs-toggle="modal" data-bs-target="#featured-project-modal">
                                        <div className="img-container">
                                            <img src="https://cdn.kesency.com/images/featured-projects/featured-project-4.svg" alt="featured4" className="img-fluid" />
                                        </div>
                                        <h5 className="equalHeight">
                                            <span className="content-block__sub-title">Web Design</span>
                                            Digital Agency
                                        </h5>
                                    </Link>
                                </div>

                                <div className="grid-item col-md-6 col-lg-4" data-aos="fade-up">
                                    <Link to="#" className="featured-content-block content-block" data-bs-toggle="modal" data-bs-target="#featured-project-modal">
                                        <div className="img-container">
                                            <img src="https://cdn.kesency.com/images/featured-projects/featured-project-5.svg" alt="featured5" className="img-fluid" />
                                        </div>
                                        <h5 className="equalHeight">
                                            <span className="content-block__sub-title">Web Design</span>
                                            Agency Web Application
                                        </h5>
                                    </Link>
                                </div>
                                <div className="grid-item col-md-6 col-lg-4" data-aos="fade-up">
                                    <Link to="#" className="featured-content-block content-block" data-bs-toggle="modal" data-bs-target="#featured-project-modal">
                                        <div className="img-container">
                                            <img src="https://cdn.kesency.com/images/featured-projects/featured-project-6.svg" alt="featured6" className="img-fluid" />
                                        </div>
                                        <h5 className="equalHeight">
                                            <span className="content-block__sub-title">Web Design</span>
                                            Digital Agency
                                        </h5>
                                    </Link>
                                </div>
                            </div>
                            <Link to="/portfolio" className="custom-btn btn-big grad-style-ef btn-full" data-aos="zoom-in">DISCOVER MORE WORKS</Link>
                        </div>
                    </div>
                </section>

                <section className="case-study small-agency-case-study">
                    <svg className="bg-shape shape-case reveal-from-left" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" width="779px" height="759px">
                        <defs>
                            <linearGradient id="PSgrad_04" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                            </linearGradient>

                        </defs>
                        <path fillRule="evenodd" fill="url(#PSgrad_04)" d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
                        />
                    </svg>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <Slider className="case-study-slider" {...settings}>
                                    <div className="item">
                                        <h2>Make Your Business Go Online Today</h2>
                                        <p>With the ever-increasing usage of digital devices and online platforms, it has become crucial for businesses to have an online presence in order to reach and engage with their customers effectively. By taking the initiative to establish their business online, companies can increase their visibility, expand their reach, and tap into a wider market. They can leverage various digital marketing channels to promote their products or services, establish their brand identity, and build customer relationships. </p>
                                        <div className="btn-container">
                                            <Link to="/case/studies/details" className="custom-btn btn-big grad-style-ab">SEE THE CASE STUDY</Link>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <h2>Live Your Business</h2>
                                        <p>Could be a slogan or tagline used to encourage business owners to actively engage with their business and make it a living entity that grows and evolves over time. It could also suggest that by embracing new technologies and online platforms, businesses can reach wider audiences and connect with customers in new and exciting ways. Ultimately, "Live Your Business" is a call to action for entrepreneurs to take their passion and turn it into a thriving, dynamic enterprise that adds value to their customers' lives and contributes to the broader community. </p>
                                        <div className="btn-container">
                                            <Link to="/case/studies/details" className="custom-btn btn-big grad-style-ab">SEE THE CASE STUDY</Link>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <h2>Your Return On Investment</h2>
                                        <p> Or ROI is a financial metric used to measure the profitability of an investment relative to its cost. In business, ROI is an important metric for evaluating the performance of investments, projects, or entire businesses. It helps businesses to determine whether an investment or project is worth pursuing by comparing the expected returns to the initial cost. </p>
                                        <div className="btn-container">
                                            <Link to="/case/studies/details" className="custom-btn btn-big grad-style-ab">SEE THE CASE STUDY</Link>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="img-container col-lg-6">
                                <img src="https://cdn.kesency.com/images/case-study/case-study-slide-1.svg" alt="case-study" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="clients">
                    <div className="container">
                        <div className="row justify-content-center clients-wrapper">
                            <div className="client" data-aos="zoom-out">
                                <img src="https://cdn.kesency.com/images/clients/client-1.webp" alt="client1" />
                            </div>
                            <div className="client" data-aos="zoom-out">
                                <img src="https://cdn.kesency.com/images/clients/client-2.webp" alt="client2" />
                            </div>
                            <div className="client" data-aos="zoom-out">
                                <img src="https://cdn.kesency.com/images/clients/client-3.webp" alt="client3" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade featured-project-modal" id="featured-project-modal" tabIndex={-1} role="dialog"
                     aria-labelledby="featured-project-modal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <svg className="modal-bg" xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" width="379px" height="369px">
                                <defs>
                                    <linearGradient id="PSgrad_012" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                                        <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                                        <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                                    </linearGradient>

                                </defs>
                                <path fillRule="evenodd" fill="url(#PSgrad_012)"
                                      d="M54.086,281.380 L105.962,327.505 C173.075,387.178 276.496,381.853 336.956,315.610 C397.418,249.367 392.025,147.292 324.911,87.619 L273.035,41.495 C205.921,-18.178 102.501,-12.853 42.040,53.390 C-18.422,119.633 -13.028,221.708 54.086,281.380 Z" />
                            </svg>

                            <svg className="featured-project-modal-bg"
                                 width="379px" height="369px">
                                <defs>
                                    <linearGradient id="PSgrad_013" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                                        <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                                        <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                                    </linearGradient>

                                </defs>
                                <path fillRule="evenodd" fill="url(#PSgrad_013)"
                                      d="M54.086,281.380 L105.962,327.505 C173.075,387.178 276.496,381.853 336.956,315.610 C397.418,249.367 392.025,147.292 324.911,87.619 L273.035,41.495 C205.921,-18.178 102.501,-12.853 42.040,53.390 C-18.422,119.633 -13.028,221.708 54.086,281.380 Z" />
                            </svg>

                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" id="button-contact-m">
                                <i className="ml-symtwo-24-multiply-cross-math"></i>
                            </button>

                            <div className="modal-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div id="featured-project-carousel" className="carousel slide featured-project-carousel"
                                             data-bs-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-bs-target="#featured-project-carousel" data-bs-slide-to="0" className="active"></li>
                                            </ol>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img className="d-block w-100 img-fluid"
                                                         src="https://cdn.kesency.com/images/featured-projects/modal-img-1.svg" alt="modal-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="text-content">
                                            <h3>
                                                Find all our creations in detail on our portolio
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
