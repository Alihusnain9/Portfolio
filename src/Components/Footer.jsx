import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
const Footer = () => {
  return (
    <footer
      className="text-center text-dark"
      style={{ backgroundColor: "#ededed", 
      borderRadius: "30px 30px 0 0" 
    }}
    >
      <div className="container p-1 px-3 py-3 gap-3 gap-sm-0  d-flex align-items-center justify-content-between flex-column flex-sm-row">
        <span className="text-dark text-start">
          Copyright © 2024 Personal Portfolio
        </span>

        <section className="mb-1">
          <div className="ficons gap-4 ">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100088311432035&mibextid=ZbWKwL"
            >
              <i className="bi bi-facebook fs-5 text-dark"></i>
            </a>
            <a target="_blank" href="https://wa.me/+923137179575">
              <i className="bi bi-whatsapp fs-5 text-dark"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ali-husnain-68a04b285"
            >
              <i className="bi bi-linkedin fs-5 text-dark"></i>
            </a>
            <a target="_blank" href="https://github.com/Alihusnain9">
              <i className="bi bi-github fs-5 text-dark"></i>
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
