import React, { Component } from "react";
import { account } from "../../api/account";
import CustomError from "../../api/error/Error";

export default class Account extends Component {
    state = {
        authorization: "",
        name: "",
        statusMessage: "* Required",
        statusMessageClass: ""
    };

    handleConnect = async (e: React.MouseEvent) => {
        e.preventDefault();

        const { authorization, name } = this.state;

        const input: Array<HTMLInputElement> = [
            document.getElementById("authorization") as HTMLInputElement,
            document.getElementById("name") as HTMLInputElement
        ];

        input.forEach((el) => el.classList.remove("error-input"));

        try {
            const res = await account(authorization, name);

            const { error, field, message, code } = res;

            if (error && code) {
                field.forEach((el) => {
                    const element = input.find((element) => element.id === el)!;
                    element.classList.add("error-input");
                });
                this.setState({
                    statusMessage: message,
                    statusMessageClass: "error-input"
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

    render = () => {
        const { authorization, name, statusMessage, statusMessageClass } = this.state;

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
                            <h1>Login</h1>
                        </div>
                    </div>

                    <section id="form">
                        <div className="container">
                            <form>
                                <p id="status-account" className={statusMessageClass}>{statusMessage}</p>
                                <div className="row justify-content-between">
                                    <div className="col-md">
                                        <input
                                            type="text"
                                            name="authorization"
                                            id="authorization"
                                            placeholder="Your Authorization *"
                                            value={authorization}
                                            onChange={(e) => this.handleInputChange(e, "authorization")}
                                        />
                                    </div>
                                    <div className="col-md">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Your Name *"
                                            value={name}
                                            onChange={(e) => this.handleInputChange(e, "name")}
                                        />
                                    </div>
                                    <div className="col-md-auto">
                                        <a href="#login" className="custom-btn btn-big grad-style-ef" onClick={(e) => this.handleConnect(e)}>LOGIN</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
