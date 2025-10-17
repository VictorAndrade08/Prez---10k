"use client";

import { useEffect } from "react";
import Link from "next/link";
import SearchForm from "./SearchForm";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, topBar, headerCls, logoWhite }) {
  // Scroll automático si entra con #formulario
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#formulario") {
        const target = document.getElementById("formulario");
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      }
    }
  }, []);

  return (
    <>
      <header className={`header ${headerCls ? headerCls : ""} sticky-bar ${scroll ? "stick" : ""}`}>
        {topBar && (
          <div className="top-bar">
            <div className="container">
              <div className="top-bar-inner">
                <div className="box-top-bar-left">
                  <span className="address-icon text-md">9207 Lakeshore RdShreveport</span>
                </div>
                <div className="box-top-bar-right">
                  <a className="phone-icon text-md" href="tel:(262) 555-0131">(262) 555-0131</a>
                  <a className="email-icon text-md" href="mailto:contact@nivia.com">contact@nivia.com</a>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" href="/">
                  <img
                    alt="8K Ruta de las Mandarinas"
                    src="/assets/imgs/template/logo-mandarinas-blanco.svg"
                    style={{ height: "70px" }}
                  />
                </Link>
              </div>
              <div className="header-nav">{/* Menú principal */}</div>
            </div>

            <div className="header-right">
              <SearchForm />

              {/* Botón reemplazado por <a> con scroll nativo */}
              <a
                href="/inscripcion"
                className="btn btn-brand-4-medium hover-up"
              >
                ¡Inscríbete!
                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <div className="burger-icon burger-icon-white" onClick={handleMobileMenu}>
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
