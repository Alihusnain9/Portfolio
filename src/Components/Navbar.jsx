import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <nav
      className="navbar navbar-expand-lg position-relative px-4 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "rgb(24, 23, 23)", height: "5rem" }}
    >
      <div
        className="container-fluid mx-auto position-fixed py-2 py-lg-1 px-4"
        style={{
          width: "97%",
          borderRadius: "40px",
          backgroundColor: "#54b54a",
          top: "1rem",
          zIndex: 10,
          maxWidth: "1400px",
        }}
      >
        <a
          className="navbar-brand text-white"
          href="#"
          onClick={() => setActive("home")}
        >
          PORTFOLIO
        </a>
        <button
          className="navbar-toggler text-white bg-white p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon p-0 m-o"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center mb-3 mb-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m-auto mb-lg-0 gap-2 gap-lg-4">
            <li className="nav-item">
              <a
                className={
                  active === "home"
                    ? "active nav-link active  text-center"
                    : "nav-link text-center"
                }
                aria-current="page"
                href="#"
                onClick={() => setActive("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  active === "about"
                    ? "active nav-link  text-center"
                    : "nav-link text-center"
                }
                href="#About"
                onClick={() => setActive("about")}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  active === "work"
                    ? "active nav-link  text-center"
                    : "nav-link text-center"
                }
                href="#Work"
                onClick={() => setActive("work")}
              >
                Work
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  active === "contact"
                    ? "active nav-link text-white "
                    : "nav-link text-center"
                }
                href="#Contact"
                onClick={() => setActive("contact")}
              >
                Contact Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  active === "faqs"
                    ? "active nav-link text-white "
                    : "nav-link text-center"
                }
                href="#Faqs"
                onClick={() => setActive("faqs")}
              >
                FAQ's
              </a>
            </li>
          </ul>
          <a href="https://wa.me/+923137179575">
            <button
              className="fs-6 border-none bg-danger text-white "
              style={{
                // backgroundColor: "#e21da85",
                borderRadius: "50px",
                padding: "7px 10px",
                border: "none",
              }}
            >
              LETS TALK <i className="bi bi-whatsapp fs-6"></i>
            </button>
          </a>
        </div>
      </div>
    </nav>

    //  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">Navbar</a>
    //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">Home</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">Link</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">Link</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">Link</a>
    //         </li>
    //       </ul>
    //       <form class="d-flex" role="search">
    //         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //         <button class="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
