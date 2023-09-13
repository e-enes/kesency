import React from "react";
import Image from "next/image";

import { NavButton } from "@components/Buttons/NavButton";
import { Modal, Row, Col } from "react-bootstrap";

interface IFeatureModal {
  show: boolean;
  handleClose: () => void;
  image: string;
  alt: string;
  title: string;
  description: string;
  removeBtn: boolean;
}

const FeatureModal = ({
  show,
  handleClose,
  image,
  alt,
  title,
  description,
  removeBtn,
}: IFeatureModal) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Row className="align-items-center">
          <Col lg={6}>
            <Image src={image} alt={alt} height="500" width="500" />
          </Col>
          <Col lg={6}>
            <div className="text-content">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            {removeBtn ? " " : <NavButton to={"/portfolio"} label={"OUR PORTFOLIO"} />}
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export { FeatureModal };
