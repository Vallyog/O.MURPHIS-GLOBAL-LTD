"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "What we sell", href: "/#projects" },
  { label: "Our approach", href: "/#approach" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="page-wrap header-top__inner">
          <span>
            <Icon name="pin" /> LAGOS, NIGERIA
          </span>
          <span>BUILDING · CONSTRUCTION · HEAVY MACHINERY</span>
        </div>
      </div>
      <div className="header-main">
        <div className="page-wrap header-main__inner">
          <Link className="brand" href="/" aria-label="O.Murphis Global home">
            <span className="brand__mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="brand__text">
              <strong>O.MURPHIS</strong>
              <span>GLOBAL LTD.</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className="header-cta" href="https://wa.me/2348035812003" target="_blank">
            Let’s talk <Icon name="whatsapp" />
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav
        className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navigation.map((item, index) => (
          <Link
            href={item.href}
            key={item.href}
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            <span>0{index + 1}</span> {item.label}
            <Icon name="arrow-up-right" />
          </Link>
        ))}
        <Link
          className="mobile-nav__cta"
          href="https://wa.me/2348035812003"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        >
          Start an enquiry <Icon name="arrow-up-right" />
        </Link>
      </nav>
    </header>
  );
}
