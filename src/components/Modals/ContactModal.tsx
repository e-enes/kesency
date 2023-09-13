import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import ReCaptcha from "react-google-recaptcha";

import { SocialIcons } from "@components/SocialIcons";
import { ReCAPTCHA } from "@components/ReCAPTCHA";
import { useQuote } from "@context/QuoteContext";
import { Modal, Form, Container, Row, Col } from "react-bootstrap";

const ContactModal = () => {
  const [form, setForm] = useState({
    fname: "",
    email: "",
    website: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("Required *");
  const [sent, setSent] = useState(false);

  const reCaptchaRef = useRef<ReCaptcha>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { showModal, closeQuoteModal } = useQuote();

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (sent) {
      setStatus("Message has already been sent.");
      return;
    }

    reCaptchaRef.current!.execute();

    const formArray = Array.from(formRef.current!.children[0].children).slice(0, -2);
    formArray.forEach(el => {
      const input = el.children[0] as HTMLInputElement;

      if (input.value) {
        input.classList.add("success-input", "readonly");
      }

      input.setAttribute("readonly", "true");
    });

    setStatus("Message has been sent.");
    setSent(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal show={showModal} onHide={closeQuoteModal} className="get-a-quote-modal">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="contact-wrapper contact-page-form-wrapper">
                <div className="form-wrapper">
                  <h3>Send Us a Message</h3>
                  <Form className="contact-form" onSubmit={handleContact} ref={formRef}>
                    <Row>
                      <Col md={12} lg={6}>
                        <input
                          type="text"
                          name="fname"
                          id="fname"
                          placeholder="Full Name *"
                          value={form.fname}
                          required
                          onChange={handleChange}
                          readOnly={sent}
                          className={sent ? "success-input" : ""}
                        />
                      </Col>
                      <Col md={12} lg={6}>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email *"
                          value={form.email}
                          required
                          onChange={handleChange}
                          readOnly={sent}
                          className={sent ? "success-input" : ""}
                        />
                      </Col>
                      <Col md={12} lg={6}>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="Phone"
                          value={form.phone}
                          onChange={handleChange}
                          readOnly={sent}
                          className={sent ? "success-input" : ""}
                        />
                      </Col>
                      <Col md={12} lg={6}>
                        <input
                          type="url"
                          name="website"
                          id="website"
                          placeholder="Website"
                          value={form.website}
                          onChange={handleChange}
                          readOnly={sent}
                          className={sent ? "success-input" : ""}
                        />
                      </Col>
                      <Col md={12}>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Message *"
                          value={form.message}
                          required
                          onChange={handleChange}
                          readOnly={sent}
                          className={sent ? "success-input" : ""}
                        ></textarea>
                      </Col>
                      <div className="btn-wrapper">
                        <p id="status-contact" className={sent ? "success-message" : ""}>
                          {status}
                        </p>
                        <button
                          type="submit"
                          id="submit"
                          className="custom-btn btn-big grad-style-ef"
                        >
                          CONTACT US NOW
                        </button>
                      </div>
                      <ReCAPTCHA refKey={reCaptchaRef} />
                    </Row>
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="contact-info floating-contact-info">
                <h5>What&apos;s Next?</h5>
                <div className="whats-next-wrapper">
                  <p>
                    <i className="ml-symone-68-arrow-left-right-up-down-increase-decrease"></i>
                    An email and phone call from one of our representatives.
                  </p>
                  <p>
                    <i className="ml-symone-68-arrow-left-right-up-down-increase-decrease"></i>A
                    time &amp; cost estimation.
                  </p>
                  <p>
                    <i className="ml-symone-68-arrow-left-right-up-down-increase-decrease"></i>
                    An in-person meeting (Optional).
                  </p>
                </div>

                <p className="address">
                  Send us an email
                  <a href="mailto:info@kesency.com">info@kesency.com</a>
                </p>

                <div className="social-icons-wrapper">
                  <p>Follow us on</p>
                  <SocialIcons />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export { ContactModal };
