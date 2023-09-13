import React from "react";
import Link from "next/link";

interface INavButton {
  to: string;
  label: string;
}

const NavButton = ({ to, label }: INavButton) => {
  return (
    <Link href={to} className="custom-btn btn-big grad-style-ef">
      {label}
    </Link>
  );
};

export { NavButton };
