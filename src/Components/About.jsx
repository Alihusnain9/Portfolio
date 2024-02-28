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
        <p style={{fontSize:'1.1rem'}}>
          I am a Full-Stack (Next/React + Strapi) Web developer with expertise in
          React.js. I can create responsive, beautiful, and functional websites
          that are easy for users to navigate. I translate your vision into
          user-centric, conversion-driven experiences with sleek UI/UX &
          optimized backend architecture.
          <br />
          Let's build your digital roadmap!
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
          <p>Tailwind.css</p>
          <p>Next.js</p>
          <p>Material & Chakra UI</p>
          <p>Strapi(CMS for backend)</p>
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
