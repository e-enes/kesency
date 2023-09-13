"use client";

import React from "react";

import { Navbar } from "@components/Header/Navbar";
import { ContactModal } from "@components/Modals/ContactModal";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <ContactModal />
    </React.Fragment>
  );
};

export { Header };
