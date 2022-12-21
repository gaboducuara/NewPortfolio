import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Evolve.jpeg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            Sobre <span className="different">Mi</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hola a tod@s, Mi nombre es{" "}
                <span className="different">Gabriel Mancilla Ducuara </span> y soy de {" "}
                <span className="different">
                  {" "}
                  Florencia, Caqueta (Colombia)
                </span>
                . Me gusta programar por que siento que puedo aportar soluciones;{" "}
                <span className="different">
                  {/* VNMKV Agricultural University, Parbhani (MH) */}
                </span>
                por lo cual Tengo la convicción de fortalecer mis habilidades para{" "}
                {/* <span className="different">Masai School</span> a military type */}
                ayudar a generar productos digitales de gran impacto al servicio de la comunidad.
              </h4>
              {/* <h4>Terms That can describe me apart form Coding :</h4> */}
              {/* <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Entrepreneure{" "}
              </h4> */}
              {/* <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Chess Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                YouTuber{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Poet{" "}
              </h4> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
