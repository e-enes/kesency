import React, { Component } from "react";

export default class LegalNotice extends Component {
    state = {
        update: "Updated at X"
    };

    render = () => {
        const { update } = this.state;

        return (
            <div className="body-style-bg-3 inner-page">
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
                            <h1>Legal Notice</h1>
                            <p>{update}</p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row legal align-items-center justify-content-around text-center text-lg-left">
                            <div className="col-md-9 col-lg-6 col-xl-5 order-lg-1">
                                <img src="https://cdn.kesency.com/images/office/office-1.svg" alt="office-1" className="img-fluid rounded shadow" />
                            </div>
                            <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 order-lg-2">
                                <br />
                                <ul className="main-inf">
                                    <li>
                                        Company name: <span className="legal-info">X.</span>
                                    </li>
                                    <li>
                                        Social capital: <span className="legal-info">X</span>
                                    </li>
                                    <li>
                                        Identification number: <span className="legal-info">X</span>
                                    </li>
                                    <li>
                                        Email address: <span className="legal-info">X</span>
                                    </li>
                                    <li>
                                        Site Creator: <span className="legal-info">X</span>
                                    </li>
                                    <li>
                                        Publication manager: <span className="legal-info">X</span>
                                    </li>
                                    <li>
                                        Contact the manager: <span className="legal-info">X</span>
                                    </li>
                                </ul>
                                <hr />
                                <ul className="align-left">
                                    <li>
                                        Webmaster: <span className="legal-info">X</span>
                                    </li>
                                    <li>
                                        Contact the Webmaster: <span className="legal-info">X</span>
                                    </li>
                                    <li>
                                        The host of the site: <span className="legal-info">X</span>
                                    </li>
                                    <li>
                                        Head office: <span className="legal-info">X</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
