import React from "react";
import "../App.css";
import MyPic from "../assets/Mypic1.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  return (
    <section id="Home" className=" ">
      <div
        className=" d-flex flex-column-reverse  position-relative  flex-sm-row px-md-5 py-5 px-3 gap-5 gap-sm-1 overflow-hidden mx-auto"
        style={{ maxWidth: "1300px" }}
      >
        <div className="text" style={{ flex: 1.2, zIndex: 2 }}>
          <h6 style={{ fontFamily: "Open Sans, sans-serif" }}>Hey,</h6>
          <h1>
            I'm <span style={{ color: "#54b54a" }}>Ali Husnain</span>
          </h1>
          <h4>
            A Frontend{" "}
            <span color="#54b54a" style={{ color: "#54b54a" }}>
              Web-Developer
            </span>
          </h4>

          <p>
            I am a frontend React Developer based on pakistan. I specialize in
            building stunning, useful and attractive web applications that are
            customized every client's particular requirement.
          </p>
          <div className="icons gap-4">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100088311432035&mibextid=ZbWKwL"
            >
              <i className="bi bi-facebook fs-5 text-white"></i>
            </a>
            <a target="_blank" href="https://wa.me/+923137179575">
              <i className="bi bi-whatsapp fs-5 text-white"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ali-husnain-68a04b285"
            >
              <i className="bi bi-linkedin fs-5 text-white"></i>
            </a>
            <a target="_blank" href="https://github.com/Alihusnain9">
              <i className="bi bi-github fs-5 text-white"></i>
            </a>
          </div>
          <br />
          <a href="https://wa.me/+923137179575">
            <button
              style={{ width: "max-content" }}
              className="button btn text-white border w-fit-content"
            >
              Hire me
            </button>
          </a>
        </div>

        <div
          className="img justify-content-center justify-content-sm-end"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className=" position-relative frame"
            style={{
              width: "240px",
              height: "250px",
              backgroundColor: "#54b54a",
            }}
          >
            <img
              style={{
                width: "240px",
                height: "298px",
                objectFit: "cover",
                zIndex: 2,
                // mrgt:'10px',
                top: "-3rem",
                left: 0,
              }}
              className="position-absolute image"
              src={MyPic}
              alt="Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
