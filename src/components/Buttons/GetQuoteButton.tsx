import React, { CSSProperties } from "react";

import { useQuote } from "@context/QuoteContext";
import { Nav } from "react-bootstrap";

interface IGetQuoteButtonProps {
  to: string;
  style: CSSProperties | undefined;
}

const GetQuoteButton = ({ to, style }: IGetQuoteButtonProps) => {
  const { openQuoteModal } = useQuote();

  return (
    <Nav.Item>
      <Nav.Link
        className="custom-btn btn-mid grad-style-cd"
        href={to}
        onClick={openQuoteModal}
        style={style}
      >
        GET A QUOTE
      </Nav.Link>
    </Nav.Item>
  );
};

export { GetQuoteButton };
