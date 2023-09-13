import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

import { Container, Form, Row, Col } from "react-bootstrap";

const Newsletter = () => {
  const [form, setForm] = useState({
    fname: "",
    email: "",
  });
  const [status, setStatus] = useState("We don't spam, promise");
  const [sent, setSent] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (sent) {
      setStatus("You have already registered.");
      return;
    }

    const formArray = Array.from(formRef.current!.children[0].children).slice(0, -1);
    console.log(formArray);

    formArray.forEach(el => {
      const input = el.children[0] as HTMLInputElement;

      input.classList.add("success-input", "readonly");
      input.setAttribute("readonly", "true");
    });

    setStatus("You've registered!");
    setSent(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="newsletter">
      <Container>
        <h3 className="text-center">
          Sign up for our newsletter to stay up to
          <br />
          date with tech news!
          <p id="status-newsletter" className={sent ? "success-message" : ""}>
            {status}
          </p>
        </h3>

        <Form className="newsletter-form" onSubmit={handleNewsletter} ref={formRef}>
          <Row>
            <Col md>
              <input
                type="text"
                name="fname"
                id="fname-newsletter"
                placeholder="Your Name"
                value={form.fname}
                required
                onChange={handleChange}
                readOnly={sent}
              />
            </Col>
            <Col md>
              <input
                type="email"
                name="email"
                id="email-newsletter"
                placeholder="Your Email Address"
                autoComplete={"false"}
                value={form.email}
                required
                onChange={handleChange}
                readOnly={sent}
              />
            </Col>
            <Col md="auto">
              <button type="submit" className="custom-btn btn-big grad-style-ef">
                SIGN UP
              </button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export { Newsletter };
