import React from "react";
import "./Education";

const Experience = () => {
  return (
    <div className="skills__content1">
      <h3 className="skills__title1">Expérience</h3>

      <div className="skills__box1">
        <div className="skills__group1">
          <div className="skills__data1">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name1">Compétition CRIIEEE</h3>
              <span className="skills_level1">
                DÉVELOPPER UNE APPLICATION MOBILE POUR COMMANDER UN ROBOT VIA
                BLUETOOTH. <br />
                DÉVELOPPER UNE APPLICATION MOBILE QUI INTEGRE LA RECONNAISSANCE
                GESTUELLE POUR COMMANDER UN ROBOT VIA BLUETOOTH
              </span>
            </div>
          </div>

          <div className="skills__data1">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name1">Stage: Imaxeam (3mois)</h3>
              <span className="skills_level1">
                - développement d'une application e-commérce (React Native)
                <br />- développementd'un site web platforme de jeux
                (TypeScript) <br />- conception d'une platforme de communication
                en temps réel (node-red, MQTT, node js, Mongo DB, socket.io,
                react js)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
