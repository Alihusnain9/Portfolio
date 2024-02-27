import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import Phone from "../assets/phone.png";
import Email from "../assets/Email.png";
// import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com";
import Location from "../assets/location.png";
const contact = () => {
  const [success, setSuccess] = useState(false);
  const [value, setValue] = useState({
    Email: "",
    Name: "",
    Message: "",
    Phone: "",
  });
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_efkueod",
        "template_t9mj75j",
        form.current,
        "ciWvzALRa60t_ZUL1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setValue({ Name: "", Email: "", Phone: "", Message: "" });
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text, "There is an error in the program ");
        }
      );
  };

  return (
    <>
      <div className="py-4 bg-white" id="Contact">
        <h1 className="text-center mb-4 text-white" style={{fontSize:'30px'}}>
          Let's discuss our next project
        </h1>

        <section
          className="section d-flex align-items-center px-3 flex-column-reverse flex-md-row gap-4 mx-auto"
          style={{ maxWidth: "1440px" }}
        >
          <div style={{ flex: 1 }} className="d-flex flex-column w-100 gap-3">
            <a
              href="tel:+923137179575"
              className="w-75 anchor m-auto d-flex align-items-center justifycontent center flex-column text-white text-decoration-none"
              style={{ borderRadius: "50px" }}
            >
              <img
                src={Phone}
                alt="Phone Icon"
                className="p-3 "
                height={70}
                width={70}
                style={{ backgroundColor: "green", borderRadius: "50px" }}
              />
              <h5>Click to make a call</h5>
              <p className="p-0">+92 313 7179575</p>
            </a>

            <a
              href="mailto:chalihusnain9393@gmail.com"
              className="m-auto w-75 anchor d-flex align-items-center justifycontent center flex-column text-white text-decoration-none"
              style={{ borderRadius: "50px" }}
            >
              <img
                src={Email}
                alt="Email Icon"
                className="p-3 "
                height={70}
                width={70}
                style={{ backgroundColor: "green", borderRadius: "50px" }}
              />
              <h5>Click to send a mail</h5>
              <p className="ps-1 m-0">chalihusnain9393@gmail.com</p>
            </a>

            <a
              target="_blank"
              href="https://www.google.com/maps/place/Haroonabad,+Bahawalnagar,+Punjab,+Pakistan/@29.6110187,73.0958744,13z/data=!3m1!4b1!4m6!3m5!1s0x393d9778fa7f4463:0xee5c1f1e528edbac!8m2!3d29.6081146!4d73.1467619!16s%2Fm%2F0bbyzl_?entry=ttu"
              className=" m-auto w-75 anchor d-flex align-items-center justifycontent center flex-column text-white text-decoration-none"
              style={{ borderRadius: "50px" }}
            >
              <img
                src={Location}
                alt="Location Icon"
                className="p-3 "
                height={70}
                width={70}
                style={{ backgroundColor: "green", borderRadius: "50px" }}
              />
              <h5>Click to see my location</h5>
              <p className="p-0">Harunabad, Punjab, Pakistan</p>
            </a>
          </div>
          <form
            onSubmit={sendEmail}
            ref={form}
            className="border-sm-start form d-flex flex-column input-group-lg p-md-3 h-100"
            style={{ flex: 1.2, gap: "1rem" }}
          >
            <div className="d-flex gap-2 input-group-lg">
              <input
                className="input form-control bg-transparent text-white"
                style={{ flex: 1 }}
                type="text"
                value={value.Name}
                onChange={(e) => setValue({ ...value, Name: e.target.value })}
                placeholder="Name"
                required
                name="from_name"
              />
              <input
                className="input form-control bg-transparent text-white"
                style={{ flex: 1 }}
                type="number"
                autoComplete="none"
                placeholder="Phone Number(Optional)"
                value={value.Phone}
                onChange={(e) => setValue({ ...value, Phone: e.target.value })}
                name="phone_num"
              />
            </div>
            <input
              className="input form-control bg-transparent text-white"
              type="email"
              placeholder="E-mail"
              value={value.Email}
              onChange={(e) => setValue({ ...value, Email: e.target.value })}
              required
              name="from_email"
            />
            <textarea
              className="input form-control bg-transparent text-white "
              type="text"
              name="message"
              placeholder="Message"
              value={value.Message}
              onChange={(e) => setValue({ ...value, Message: e.target.value })}
              style={{ resize: "none", height: "130px", width: "100%" }}
              required
            />
            <div className="d-flex justify-content-between flex-column-reverse flex-md-row">
              <button
                style={{ width: "fit-content" }}
                className="btn rounded text-white border button"
                type="submit"
              >
                Submit
              </button>
              {success && (
                <p className="mb-1" style={{ color: "#54b54a" }}>
                  *Mail has been send successfully.
                </p>
              )}
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default contact;
