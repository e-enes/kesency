import React, { useState, useEffect, useRef } from "react";
import { Navbar as Bar, Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

import { slideUp, fadeOut, slideToggle, fadeToggle } from "@utils/animation";
import { GetQuoteButton } from "@components/Buttons/GetQuoteButton";

const Navbar = () => {
  const [toggleIconChanged, setToggleIconChanged] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = async (e: MouseEvent) => {
      const navbar = navbarRef.current!;
      const navMenu = Array.from(navbar.children[0].children).slice(0, -1);
      const dropdownMenu = dropdownMenuRef.current!;

      if (
        navMenu.includes(e.target as Element) ||
        navMenu.some(el => el.children[0].contains(e.target as Element))
      ) {
        return;
      }

      const animationType = window.innerWidth < 991 ? slideUp : fadeOut;
      if (isDropdownOpen) {
        await animationType(dropdownMenu, 200);
        setDropdownOpen(false);
      } else if (isNavOpen) {
        navbar.classList.add("switching");
        setToggleIconChanged(false);
        setNavOpen(false);
        animationType(navbar).then(() => {
          navbar.classList.remove("show", "switching");
          navbar.removeAttribute("style");
        });
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY >= 100);
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDropdownOpen, isNavOpen]);

  const handleNavbar = async () => {
    const navbar = navbarRef.current!;

    if (!navbar.classList.contains("switching")) {
      navbar.classList.add("switching");
      setToggleIconChanged(!toggleIconChanged);
      await slideToggle(navbar, 400);
      setNavOpen(!isNavOpen);
      navbar.classList.toggle("show");
      navbar.classList.remove("switching");
    }
  };

  const handleCloseNavbar = async () => {
    const navbar = document.getElementById("navbarNav")!;
    const isNavOpen = navbar.classList.contains("show");

    handleCloseDropdown();

    if (isNavOpen) {
      navbar.classList.add("switching");
      setToggleIconChanged(false);
      await slideUp(navbar, 400);
      setNavOpen(false);
      navbar.classList.remove("show", "switching");
    }
  };

  const handleDropdown = () => {
    const dropdownMenu = document.querySelector(".custom-dropdown-menu") as HTMLElement;
    window.innerWidth < 991 ? slideToggle(dropdownMenu, 200) : fadeToggle(dropdownMenu, 200);
    setDropdownOpen(d => !d);
  };

  const handleCloseDropdown = () => {
    const dropdownMenu = document.querySelector(".custom-dropdown-menu") as HTMLElement;
    window.innerWidth < 991 ? slideUp(dropdownMenu, 200) : fadeOut(dropdownMenu, 200);
    setDropdownOpen(false);
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/pricing", label: "Pricing" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about", label: "About" },
    { to: "/studies", label: "Case Studies" },
  ];

  const navDropdown = [
    { to: "/service/website/design", label: "Website Design" },
    { to: "/service/website/development", label: "Website Development" },
    { to: "/service/logo", label: "Logo & Branding" },
    { to: "/service/mobile", label: "Mobile App" },
    { to: "/service/ppc", label: "Pay-Per-Click" },
    { to: "/service/seo", label: "Search Engine Optimization" },
    { to: "/service/smm", label: "Social Media Marketing" },
  ];

  return (
    <React.Fragment>
      <Bar expand="lg" className={`${scrolled ? "scrolled" : ""}`} style={{zIndex:101}}>
        <Container>
          <Bar.Brand href="/">
            <Image
              src="https://cdn.kesency.com/images/brand-logo.svg"
              alt="Brand Logo"
              className="img-fluid"
              width="207"
              height="87"
            />
          </Bar.Brand>
          <button
            className={`navbar-toggler ${toggleIconChanged ? "change" : ""}`}
            onClick={handleNavbar}
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="custom-toggler-icon bar1"></span>
            <span className="custom-toggler-icon bar2"></span>
            <span className="custom-toggler-icon bar3"></span>
          </button>

          <Bar.Collapse id="navbarNav" ref={navbarRef}>
            <ul className="navbar-nav ml-md-auto typo-color-c align-items-center">
              {navItems.map((item, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <Link className={`nav-link`} href={item.to} onClick={handleCloseNavbar}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="nav-item dropdown" key={6}>
                <a
                  className="nav-link dropdown-opener"
                  onClick={handleDropdown}
                  href="#dropdown?toggle"
                >
                  Services
                </a>
                <div className="custom-dropdown-menu" ref={dropdownMenuRef}>
                  {navDropdown.map((item, index) => {
                    return (
                      <Link
                        className="dropdown-item"
                        key={index}
                        href={item.to}
                        onClick={handleCloseDropdown}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </li>
              <GetQuoteButton
                to={"#quote"}
                style={isDropdownOpen ? { marginBottom: 20 + "px" } : undefined}
              />
            </ul>
          </Bar.Collapse>
        </Container>
      </Bar>
    </React.Fragment>
  );
};

export { Navbar };
