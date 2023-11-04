import React from "react";
import Store from "../assets/store.jpg";
import YT from "../assets/YT.jpg";
import Quiz from "../assets/quiz.jpg";
import "../App.css";
function Work() {
  return (
    <section id="Work" style={{ backgroundColor: "rgb(173, 216, 230)" }}>
      <div
        className="mx-auto py-5 px-2 d-flex flex-column justify-content-center"
        style={{ maxWidth: "1440px" }}
      >
        <h1>Latest Work</h1>
        <br />
        <div className="imgs d-grid gap-3 gap-lg-0 ">
          <a
            href="https://64c7141a4de7b1581b518df9--verdant-licorice-217c3d.netlify.app"
            className="d-flex align-items-center "
          >
            <img src={Store} alt="Store" className="mx-auto" />
          </a>
          <a
            href="https://keen-genie-699024.netlify.app/"
            className="d-flex align-items-center "
          >
            <img src={YT} alt="Youtube Clone" />
          </a>
          <a
            href="https://64c78994457ce71506868ba6--spontaneous-crostata-a04c5e.netlify.app/"
            className="d-flex align-items-center "
          >
            <img src={Quiz} alt=" Quiz App" />
          </a>
        </div>
        <button
          className="btn btn-danger mt-3 mx-auto disabled"
          style={{ width: "max-content" }}
        >
          Load More
        </button>
      </div>
    </section>
  );
}

export default Work;
