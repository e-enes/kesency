import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fadeToggle, fadeOut, slideToggle, slideUp } from "../Animations";
import { contact } from "../../api/contact";
import CustomError from "../../api/error/Error";

export default class Header extends Component {
    state = {
        fname: "",
        email: "",
        phone: "",
        website: "",
        text: "",
        statusMessage: "* Required",
        statusMessageClass: ""
    };

    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
        document.addEventListener("click", this.handleClick);
    }

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll);
        document.removeEventListener("click", this.handleClick);
    }

    handleScroll = () => {
        const navbar = document.querySelector(".navbar")!;
        const shouldScroll = window.scrollY >= 100;
        navbar.classList.toggle("scrolled", shouldScroll);
    };

    handleClick = (e: MouseEvent) => {
        const navbar = document.getElementById("navbarNav")!;
        const navMenu = Array.from(document.querySelectorAll(".navbar-nav li"));
        const dropdownMenu = document.querySelector(".custom-dropdown-menu") as HTMLElement;
        const shouldHideDropdown =
            !(
                navMenu.includes(e.target as Element) ||
                Array.from(navMenu).some((el) =>
                    el.querySelector("li, a")!.contains(e.target as Element)
                )
            );
        const isOpenNav = navbar.classList.contains("show") && !navbar.classList.contains("removing");
        const isOpenDropdown = dropdownMenu.offsetWidth > 0 || dropdownMenu.offsetHeight > 0;

        if (shouldHideDropdown) {
            const animationType = window.innerWidth < 991 ? slideUp : fadeOut;
            if (isOpenDropdown) {
                animationType(dropdownMenu, 200);
            } else if (isOpenNav) {
                navbar.classList.add("removing");
                document.querySelector(".navbar .navbar-toggler")!.classList.remove("change");
                animationType(navbar).then(() => {
                    navbar.classList.remove("show", "removing");
                    navbar.removeAttribute("style");
                });
            }
        }
    };

    handleCustomTogglerIcon = () => {
        if (!document.getElementById("navbarNav")!.classList.contains("removing")) {
            document.querySelector(".navbar .navbar-toggler")!.classList.toggle("change");
        }
    };

    handleDropdown = () => {
        const dropdownMenu = document.querySelector(".custom-dropdown-menu") as HTMLElement;
        window.innerWidth < 991 ?
            slideToggle(dropdownMenu, 200) :
            fadeToggle(dropdownMenu, 200);
    };

    handleCloseDropdown = () => {
        const navbar = document.getElementById("navbarNav")!;
        const isNavOpen = navbar.classList.contains("show");
        const dropdownMenu = document.querySelector(".custom-dropdown-menu") as HTMLElement;

        window.innerWidth < 991 ? slideToggle(dropdownMenu, 200) : fadeToggle(dropdownMenu, 200);
        
        if (isNavOpen) {
            navbar.classList.remove("show");
            document.querySelector(".navbar .navbar-toggler")!.classList.remove("change");
        }
    };

    handleCloseNav = () => {
        const navbar = document.getElementById("navbarNav")!;
        const isNavOpen = navbar?.classList.contains("show");

        if (isNavOpen) {
            navbar.classList.remove("show");
            document.querySelector(".navbar .navbar-toggler")!.classList.remove("change");
        }
        fadeOut(document.querySelector(".custom-dropdown-menu")!);
    };

    handleGetQuote = () => {
        window.location.hash = "quote";
        this.handleCloseNav();
    };

    handleContact = async (e: React.MouseEvent) => {
        e.preventDefault();

        const { fname, email, phone, website, text } = this.state;

        const input: Array<HTMLInputElement> = [
            document.getElementById("fname") as HTMLInputElement,
            document.getElementById("email") as HTMLInputElement,
            document.getElementById("phone") as HTMLInputElement,
            document.getElementById("website") as HTMLInputElement,
            document.getElementById("message") as HTMLInputElement,
        ];

        input.forEach((el) => el.classList.remove("error-input"));

        try {
            const res = await contact(fname, email, phone, website, text);

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
                    element.classList.add("succcess-input", "readonly");
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

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, field: string) => {
        this.setState({ [field]: e.target.value });
    };

    renderNavItem = (to: string, label: string) => {
        return (
            <li className="nav-item">
                <Link className="nav-link" to={to} onClick={this.handleCloseNav}>{label}</Link>
            </li>
        );
    };

    renderDropdownItem = (to: string, label: string) => {
        return (
            <Link className="dropdown-item" to={to} onClick={this.handleCloseDropdown}>{label}</Link>
        );
    };

    renderQuoteNavItem = (to: string) => {
        return (
            <li className="nav-item">
                <Link className="nav-link custom-btn btn-mid grad-style-cd" to={to} data-bs-toggle="modal" data-bs-target="#get-a-quote-modal" onClick={this.handleGetQuote}>GET A QUOTE</Link>
            </li>
        );
    };

    render = () => {
        const { fname, email, phone, website, text, statusMessage, statusMessageClass } = this.state;

        return (
            <>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src="https://cdn.kesency.com/images/brand-logo.svg" alt="Brand Logo" className="img-fluid" width="207" height="87" />
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={this.handleCustomTogglerIcon} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="custom-toggler-icon bar1"></span>
                            <span className="custom-toggler-icon bar2"></span>
                            <span className="custom-toggler-icon bar3"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-md-auto typo-color-c align-items-center">
                                {this.renderNavItem("/", "Home")}
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-opener" onClick={this.handleDropdown} to="#dropdown">
                                        Services
                                    </Link>
                                    <div className="custom-dropdown-menu">
                                        {this.renderDropdownItem("/service/website/design", "Website Design")}
                                        {this.renderDropdownItem("/service/website/development", "Website Development")}
                                        {this.renderDropdownItem("/service/logo/and/branding", "Logo & Branding")}
                                        {this.renderDropdownItem("/service/mobile/app/design", "Mobile App Design")}
                                        {this.renderDropdownItem("/service/search/engine/optimization", "Search Engine Optimization")}
                                        {this.renderDropdownItem("/service/pay/per/click", "Pay-Per-Click")}
                                        {this.renderDropdownItem("/service/social/media/marketing", "Social Media Marketing")}
                                    </div>
                                </li>
                                {this.renderNavItem("/pricing", "Pricing")}
                                {this.renderNavItem("/portfolio", "Portfolio")}
                                {this.renderNavItem("/about/us", "About")}
                                {this.renderNavItem("/case/studies", "Case Studies")}
                                {this.renderQuoteNavItem("/#quote")}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="modal fade get-a-quote-modal" id="get-a-quote-modal" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" id="button-quote">
                                    <i className="ml-symtwo-24-multiply-cross-math"></i>
                                </button>
                            </div>

                            <div className="modal-body">
                                <div className="contact-form-wrapper">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="contact-wrapper contact-page-form-wrapper">
                                                    <div className="form-wrapper">
                                                        <h3>Send Us a Message</h3>
                                                        <form className="contact-form">
                                                            <div className="row">
                                                                <div className="col-md-12 col-lg-6">
                                                                    <input
                                                                        type="text"
                                                                        name="fname"
                                                                        id="fname"
                                                                        placeholder="Full Name *"
                                                                        value={fname}
                                                                        onChange={(e) => this.handleInputChange(e, "fname")}
                                                                    />
                                                                </div>

                                                                <div className="col-md-12 col-lg-6">
                                                                    <input
                                                                        type="email"
                                                                        name="email"
                                                                        id="email"
                                                                        placeholder="Email *"
                                                                        value={email}
                                                                        onChange={(e) => this.handleInputChange(e, "email")}
                                                                    />
                                                                </div>

                                                                <div className="col-md-12 col-lg-6">
                                                                    <input
                                                                        type="text"
                                                                        name="phone"
                                                                        id="phone"
                                                                        placeholder="Phone"
                                                                        value={phone}
                                                                        onChange={(e) => this.handleInputChange(e, "phone")}
                                                                    />
                                                                </div>

                                                                <div className="col-md-12 col-lg-6">
                                                                    <input
                                                                        type="text"
                                                                        name="website"
                                                                        id="website"
                                                                        placeholder="Website"
                                                                        value={website}
                                                                        onChange={(e) => this.handleInputChange(e, "website")}
                                                                    />
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <textarea
                                                                        name="message"
                                                                        id="message"
                                                                        placeholder="Message *"
                                                                        value={text}
                                                                        onChange={(e) => this.handleInputChange(e, "text")}
                                                                    ></textarea>
                                                                </div>
                                                                <div className="btn-wrapper">
                                                                    <p id="status-contact" className={statusMessageClass}>{statusMessage}</p>
                                                                    <button type="submit" id="submit"
                                                                        className="custom-btn btn-big grad-style-ef" onClick={(e) => this.handleContact(e)}>CONTACT US
                                                                        NOW</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="contact-info floating-contact-info">
                                                    <h5>What’s Next?</h5>

                                                    <div className="whats-next-wrapper">
                                                        <p>
                                                            <i
                                                                className="ml-symone-68-arrow-left-right-up-down-increase-decrease"></i>An
                                                            email and phone call from one of our representatives.
                                                        </p>
                                                        <p>
                                                            <i className="ml-symone-68-arrow-left-right-up-down-increase-decrease"></i>A
                                                            time &amp; cost estimation.
                                                        </p>
                                                        <p>
                                                            <i
                                                                className="ml-symone-68-arrow-left-right-up-down-increase-decrease"></i>An
                                                            in-person meeting.
                                                        </p>
                                                    </div>

                                                    <p className="address">
                                                        Send us an email
                                                        <a href="mailto:info@kesency.com">info@kesency.com</a>
                                                    </p>

                                                    <div className="social-icons-wrapper">
                                                        <p>Follow us on</p>
                                                        <ul className="social-icons popup">
                                                            <li>
                                                                <a href="#instagram" rel="noreferrer">
                                                                    <i className="fab fa-instagram"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#twitter" rel="noreferrer">
                                                                    <i className="fab fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#google" rel="noreferrer">
                                                                    <i className="fab fa-google"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#github" rel="noreferrer">
                                                                    <i className="fab fa-github"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};
