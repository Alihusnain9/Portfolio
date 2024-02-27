import React, { useState } from "react";
import Store from "../assets/store.jpg";
import YT from "../assets/YT.jpg";
import Quiz from "../assets/quiz.jpg";
import Mart from "../assets/MartsHome.jpg";
import "../App.css";
function Work() {
  const [showMore,setShowMore] = useState(false)
  const isLg = window.innerWidth >= 992;
  return (
    <section id="Work" style={{ backgroundColor: "rgb(173, 216, 230)" }}>
      <div
        className="mx-auto py-5 px-2 d-flex flex-column justify-content-center"
        style={{ maxWidth: "1440px" }}
      >
        <h1>Latest Work</h1>
        <br />
        <div className="imgs d-grid gap-4">
          <div className="d-flex align-items-center ">
            <a
              href="https://e-commerce-frontend-two-omega.vercel.app/"
              className="position-relative overflow-hidden"
            >
              <img src={Mart} alt="Store" className="w-100 h-100" />
              <div
                className="hover-item1 position-absolute top-0 left-0 text-white w-100 h-100 d-flex align-items-center justify-content-center flex-column px-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <h3>Ecommerce Store</h3>
                <p>
                  This a functional Ecommerce store in Next.js using
                  Tailwind.css.{" "}
                </p>
              </div>
            </a>
          </div>
          <div className="d-flex align-items-center ">
            <a
              href="https://64c7141a4de7b1581b518df9--verdant-licorice-217c3d.netlify.app"
              className="position-relative overflow-hidden"
            >
              <img src={Store} alt="Store" className="w-100 h-100" />
              <div
                className="hover-item1 position-absolute top-0 left-0 text-white w-100 h-100 d-flex align-items-center justify-content-center flex-column px-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <h3>Simple Shopping Cart</h3>
                <p>
                  This is a simple shopping cart in React Using Typescript &
                  Bootstrap. Its design is very beautiful and responsive for all
                  devices. Users can add items, adjust quantities, remove
                  products, and view a summary of their selected items. It also
                  calculates the total cost, including any applicable taxes or
                  discounts.
                </p>
              </div>
            </a>
          </div>
          <div className="div1 d-flex align-items-center ">
            <a
              href="https://keen-genie-699024.netlify.app/"
              className="anchor1 position-relative overflow-hidden"
            >
              <img src={YT} alt="Youtube Clone" className="w-100 h-100" />

              <div
                className="hover-item1 position-absolute top-0 left-0 text-white w-100 h-100 d-flex align-items-center justify-content-center flex-column px-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <h3>Youtube Clone</h3>
                <p>
                  I make this project in React using Material UI for design and
                  Rapid API for data.It allows users to view, and interact with
                  videos.It has its own categories like sports , games ,
                  React.js , Next.js etc.User can also search their favourite
                  videos.Design is fully responsive for all devices
                </p>
              </div>
            </a>
          </div>
          <div className={`d-flex align-items-center d-${!showMore?'none':''}`}>
            <a
              href="https://64c78994457ce71506868ba6--spontaneous-crostata-a04c5e.netlify.app/"
              className="position-relative overflow-hidden"
            >
              <img src={Quiz} alt=" Quiz App" className="w-100 h-100" />
              <div
                className="hover-item1 position-absolute top-0 left-0 text-white w-100 h-100 d-flex align-items-center justify-content-center flex-column px-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              >
                <h3>Simple Quiz App</h3>
                <p>
                  It is a simple multiple choice questions project fetching data
                  from "Opentdb api". It allows users to choose the answer and
                  get right answer on the backside of the card by clicking on
                  the specific card. Users can select any category and number of
                  questions
                </p>
              </div>
            </a>
          </div>
        </div>
        <button
          className={`btn ${isLg ? 'btn-lg' : ''} btn-danger mt-4 mx-auto`}
          style={{ width: "max-content" }} onClick={()=>setShowMore(true)}
        >
          Load More
        </button>
      </div>
    </section>
  );
}

export default Work;
