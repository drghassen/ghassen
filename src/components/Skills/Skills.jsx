import React from "react";
import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

// import Experience from "./Experience";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">SKILLS</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        {/* <div className="education">
          <Experience />
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
