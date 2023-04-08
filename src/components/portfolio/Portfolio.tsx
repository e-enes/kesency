import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Isotope from "isotope-layout";

export default class Portfolio extends Component {
    componentDidMount(): void {
        const grid = document.querySelector(".grid") as HTMLElement;
        let iso = new Isotope(grid, {
            itemSelector: ".grid-item",
            layoutMode: "masonry",
            percentPosition: true,
        });

        $(".filter-button-group").each(function (i, buttonGroup) {
            const $buttonGroup = $(buttonGroup);
            $buttonGroup.on("click", ".filter-button", function () {
                $buttonGroup.find(".is-checked").removeClass("is-checked");
                $(this).addClass("is-checked");

                const filterValue = $(this).attr("data-filter");
                iso.arrange({
                    filter: filterValue
                })
            });
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
                            <h1>Portfolio</h1>
                            <p>We use strategic approaches to provide our clients with high-end.
                                <br />services that ensure superior customer satisfaction.
                            </p>
                        </div>
                    </div>

                    <section className="featured-projects section-padding">
                        <div className="container">
                            <h2 className="text-center">Featured Projects</h2>
                            <div className="featured-project-showcase text-center">
                                <div className="row equalHeightWrapper">
                                    <div className="grid-item col-md-6 col-lg-4 featured-item">
                                        <Link to="#" className="featured-content-block content-block" data-bs-toggle="modal"
                                            data-bs-target="#featured-project-modal">
                                            <div className="img-container">
                                                <img src="https://cdn.kesency.com/images/featured-projects/featured/project-featured-1.svg"
                                                    alt="project1" className="img-fluid" />
                                            </div>
                                            <h5 className="equalHeight">
                                                <span className="content-block__sub-title">Web Design</span>
                                                Creative Web Design
                                            </h5>
                                        </Link>
                                    </div>
                                    <div className="grid-item col-md-6 col-lg-4 featured-item">
                                        <Link to="#" className="featured-content-block content-block" data-bs-toggle="modal"
                                            data-bs-target="#featured-project-modal">
                                            <div className="img-container">
                                                <img src="https://cdn.kesency.com/images/featured-projects/featured/project-featured-2.svg"
                                                    alt="project2" className="img-fluid" />
                                            </div>
                                            <h5 className="equalHeight">
                                                <span className="content-block__sub-title">Web Design</span>
                                                Complex Deshboard
                                            </h5>
                                        </Link>
                                    </div>
                                    <div className="grid-item col-md-6 col-lg-4 featured-item">
                                        <Link to="#" className="featured-content-block content-block" data-bs-toggle="modal"
                                            data-bs-target="#featured-project-modal">
                                            <div className="img-container">
                                                <img src="https://cdn.kesency.com/images/featured-projects/featured/project-featured-3.svg"
                                                    alt="project3" className="img-fluid" />
                                            </div>
                                            <h5 className="equalHeight">
                                                <span className="content-block__sub-title">App Design</span>
                                                Food App Design
                                            </h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="portfolio section-padding">
                        <svg className="bg-shape shape-project reveal-from-left" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" width="779px" height="759px">
                            <defs>
                                <linearGradient id="PSgrad_04" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                                    <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                                    <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                                </linearGradient>

                            </defs>
                            <path fillRule="evenodd" fill="url(#PSgrad_04)"
                                d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z" />
                        </svg>
                        <div className="container">
                            <h2 className="text-center">Full Portfolio</h2>

                            <div className="project-showcase text-center">
                                <div className="filter-button-group">
                                    <a href="#all" className="filter-button is-checked" data-filter="*">All Work</a>
                                    <a href="#website" className="filter-button" data-filter=".a1">Website</a>
                                    <a href="#logo" className="filter-button" data-filter=".a2">Logo</a>
                                    <a href="#mobileapp" className="filter-button" data-filter=".a3">Mobile App</a>
                                    <a href="#socialmedia" className="filter-button" data-filter=".a4">Social Media</a>
                                </div>

                                <div className="grid row equalHeightWrapper">
                                    <div className="a1 a4 grid-item col-md-6 col-lg-4">
                                        <Link to="#" className="featured-content-block content-block video-popup" data-bs-toggle="modal"
                                            data-bs-target="#featured-project-modal">
                                            <div className="img-container">
                                                <img src="https://cdn.kesency.com/images/featured-projects/featured-project-1.svg" alt="project-f-1"
                                                    className="img-fluid" />
                                            </div>
                                            <h5 className="equalHeight">
                                                <span className="content-block__sub-title">Web Design</span>
                                                Creative Web Design
                                            </h5>
                                        </Link>
                                    </div>
                                    <div className="a1 grid-item col-md-6 col-lg-4">
                                        <Link to="#" className="featured-content-block content-block" data-bs-toggle="modal"
                                            data-bs-target="#featured-project-modal">
                                            <div className="img-container">
                                                <img src="https://cdn.kesency.com/images/featured-projects/featured-project-2.svg" alt="project-f-2"
                                                    className="img-fluid" />
                                            </div>
                                            <h5 className="equalHeight">
                                                <span className="content-block__sub-title">Web Design</span>
                                                Complex Deshboard
                                            </h5>
                                        </Link>
                                    </div>
                                    <div className="a2 a4 grid-item col-md-6 col-lg-4">
                                        <Link to="#" className="featured-content-block content-block" data-bs-toggle="modal"
                                            data-bs-target="#featured-project-modal">
                                            <div className="img-container">
                                                <img src="https://cdn.kesency.com/images/featured-projects/featured-project-3.svg" alt="project-f-3"
                                                    className="img-fluid" />
                                            </div>
                                            <h5 className="equalHeight">
                                                <span className="content-block__sub-title">App Design</span>
                                                Food App Design
                                            </h5>
                                        </Link>
                                    </div>
                                    <div className="a3 grid-item col-md-6 col-lg-4">
                                        <Link to="#" className="featured-content-block content-block" data-bs-toggle="modal"
                                            data-bs-target="#featured-project-modal">
                                            <div className="img-container">
                                                <img src="https://cdn.kesency.com/images/featured-projects/featured-project-4.svg" alt="project-f-4"
                                                    className="img-fluid" />
                                            </div>
                                            <h5 className="equalHeight">
                                                <span className="content-block__sub-title">Web Design</span>
                                                Digital Agency
                                            </h5>
                                        </Link>
                                    </div>

                                    <div className="a3 grid-item col-md-6 col-lg-4">
                                        <Link to="#" className="featured-content-block content-block" data-bs-toggle="modal"
                                            data-bs-target="#featured-project-modal">
                                            <div className="img-container">
                                                <img src="https://cdn.kesency.com/images/featured-projects/featured-project-5.svg" alt="project-f-5"
                                                    className="img-fluid" />
                                            </div>
                                            <h5 className="equalHeight">
                                                <span className="content-block__sub-title">Web Design</span>
                                                Agency Web Application
                                            </h5>
                                        </Link>
                                    </div>

                                    <div className="a3 grid-item col-md-6 col-lg-4">
                                        <Link to="#" className="featured-content-block content-block" data-bs-toggle="modal"
                                            data-bs-target="#featured-project-modal">
                                            <div className="img-container">
                                                <img src="https://cdn.kesency.com/images/featured-projects/featured-project-6.svg" alt="project-f-6"
                                                    className="img-fluid" />
                                            </div>
                                            <h5 className="equalHeight">
                                                <span className="content-block__sub-title">Web Design</span>
                                                Digital Agency
                                            </h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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

                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
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
                                                Oops! This section is under maintenance!
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
