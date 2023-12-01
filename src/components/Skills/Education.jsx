import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="skills__content1">
      <h3 className="skills__title1">Education</h3>

      <div className="skills__box1">
        <div className="skills__group1">
          <div className="skills__data1">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name1">
                Baccalauréat Science Technique <br />
                (2020-2021)
              </h3>
              <span className="skills_level1">Lycée Sahline Monasitr</span>
            </div>
          </div>

          <div className="skills__data1">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name1">
                Ingénierie système informatique <br />
                (2021-en cours)
              </h3>
              <span className="skills_level1">
                Institut Supérieur d'Informatique et des Techniques de
                Communication
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
