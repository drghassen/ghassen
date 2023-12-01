import React from "react";
import "./Skills.css";
const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">React js</h3>
              <sapn className="skills_level">Basic</sapn>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">React Native</h3>
              <sapn className="skills_level">Advanced</sapn>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <sapn className="skills_level">Intermediate</sapn>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">TypeScript</h3>
              <sapn className="skills_level">Intermidiate</sapn>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <sapn className="skills_level">Intermidiate</sapn>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <sapn className="skills_level">Intermidiate</sapn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
