import React from "react";
const About = () => {
  return (
    <section
      id="About"
      className="px-2 px-sm-4 py-sm-5 py-3 d-flex flex-column flex-sm-row gap-4 gap-sm-2 mx-auto"
      style={{ maxWidth: "1440px" }}
    >
      <div className="sec1">
        <div className="img">
          <img
            src="https://source.unsplash.com/random?coding"
            alt="PicCoding"
          />
        </div>
      </div>
      <div className="sec2  px-sm-1">
        <h1>About Me</h1>
        <p>
          I am a freelance React developer. I have experience working with small
          and medium-sized businesses. A passion for creating eye-catching
          designs and captivating user experiences. With a strong foundation in
          HTML, CSS, and JavaScript. I bring life to web applications through
          the power of React. I am dedicated to delivering high-quality code
          that exceeds expectations.
          <br />
          Let's build together.
        </p>
        <h2>Skills</h2>
        <h5 className="mb-2" style={{ color: "#363434" }}>
          I have expertise in:
        </h5>
        <div className="d-flex flex-wrap skills gap-2">
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React.js</p>
          <p>Bootstrap</p>
          <p>React Ecoseytem and libraries</p>
          <p>Redux</p>
          <p className="cut">Node.js</p>
          <p className="cut">Express.js</p>
          <p className="cut">MongoDB</p>
          <p className="cut">Python</p>
        </div>
      </div>
    </section>
  );
};

export default About;
