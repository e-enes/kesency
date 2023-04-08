import React, { Component } from "react";
import { Link } from "react-router-dom";
import CustomError from "../../api/error/Error";
import { newsletter } from "../../api/newsletter";

export default class Footer extends Component {
    state = {
        fname: "",
        email: "",
        statusMessage: "We don't spam, promise",
        statusMessageClass: ""
    };

    handleRegisterNewsletter = async (e: React.MouseEvent) => {
        e.preventDefault();

        const { fname, email } = this.state;

        const input: Array<HTMLInputElement> = [
            document.getElementById("fname-newsletter") as HTMLInputElement,
            document.getElementById("email-newsletter") as HTMLInputElement
        ];

        input.forEach((el) => el.classList.remove("error-input"));

        try {
            const res = await newsletter(fname, email);

            const { error, field, message, code } = res;

            if (error && code) {
                field.forEach((el) => {
                    const element = input.find((element) => element.id === el)!;
                    element.classList.add("error-input");
                });
                this.setState({
                    statusMessage: message,
                    statusMessageClass: "error-message"
                });
            } else {
                field.forEach((el) => {
                    const element = input.find((element) => element.id === el)!;
                    element.classList.add("success-input", "readonly");
                    element.setAttribute("readonly", "true");
                });
                this.setState({
                    statusMessage: message,
                    statusMessageClass: "success-message"
                });
                if (e.target instanceof Element) {
                    e.target.remove();
                }
            }
        } catch (error) {
            if (error instanceof CustomError) {
                error.field.forEach((el) => {
                    const element = input.find((element) => element.id === el)!;
                    element.classList.add("error-input");
                });
                this.setState({
                    statusMessage: error.message,
                    statusMessageClass: "error-message"
                });
            }
        }
    };

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        this.setState({ [field]: e.target.value });
    };

    renderNavItem = (to: string, label: string) => {
        return (
            <li>
                <Link to={to}>{label}</Link>
            </li>
        );
    };

    render = () => {
        const { fname, email, statusMessage, statusMessageClass } = this.state;

        return (
            <>
                <section className="newsletter">
                    <div className="container">
                        <h3 className="text-center">Sign up for our newsletter to stay up to
                            <br />date with tech news!
                            <p id="status-newsletter" className={statusMessageClass}>{statusMessage}</p>
                        </h3>

                        <form className="newsletter-form">
                            <div className="row justify-content-between">
                                <div className="col-md">
                                    <input
                                        type="text"
                                        name="fname"
                                        id="fname-newsletter"
                                        placeholder="Your Name"
                                        value={fname}
                                        onChange={(e) => this.handleInputChange(e, "fname")}
                                    />
                                </div>
                                <div className="col-md">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email-newsletter"
                                        placeholder="Your Email Address"
                                        value={email}
                                        onChange={(e) => this.handleInputChange(e, "email")}
                                    />
                                </div>

                                <div className="col-md-auto">
                                    <a href="#newsletter" className="custom-btn btn-big grad-style-ef" onClick={(e) => this.handleRegisterNewsletter(e)}>SIGN UP</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <footer className="small-agency-footer grey-bg">
                    <div className="footer-nav-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-1">
                                    <ul className="social-icons popup">
                                        <li>
                                            <a href="#instagram" rel="noreferrer" title="instageam">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#twitter" rel="noreferrer" title="twitter">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#google" rel="noreferrer" title="google">
                                                <i className="fab fa-google"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#github" rel="noreferrer" title="github">
                                                <i className="fab fa-github"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-3">
                                    <nav className="footer-nav">
                                        <h5>Services</h5>
                                        <ul className="footer-menu">
                                            {this.renderNavItem("/service/logo/and/branding", "Logo & Branding")}
                                            {this.renderNavItem("/service/pay/per/click", "Pay-Per-Click")}
                                            {this.renderNavItem("/service/website/design", "Website Design")}
                                            {this.renderNavItem("/service/website/development", "Website Development")}
                                            {this.renderNavItem("/service/mobile/app/design", "Mobile App Design")}
                                            {this.renderNavItem("/service/search/engine/optimization", "Search Engine Optimization")}
                                            {this.renderNavItem("/service/social/media/marketing", "Social Media Marketing")}
                                        </ul>
                                    </nav>
                                </div>

                                <div className="col-md-3">
                                    <nav className="footer-nav">
                                        <h5>Support</h5>
                                        <ul className="footer-menu">
                                            {this.renderNavItem("/my/account", "Account")}
                                            {this.renderNavItem("/privacy/policy", "Privacy Policy")}
                                            {this.renderNavItem("/terms/and/conditions", "Terms & Conditions")}
                                            {this.renderNavItem("/legal/notice", "Legal Notice")}
                                        </ul>
                                    </nav>
                                </div>

                                <div className="col-md-3">
                                    <nav className="footer-nav">
                                        <h5>Resources</h5>
                                        <ul className="footer-menu">
                                            {this.renderNavItem("/portfolio", "Portfolio")}
                                            {this.renderNavItem("/case/studies", "Case Studies")}
                                            {this.renderNavItem("/about/us", "About")}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="container">
                            <p className="text-center">&copy; 2022-2023. All rights reserved by
                                <a href="/" target="_blank" rel="noopener"> KESENCY LLC</a></p>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
