import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Proyectos</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/jVzyXT6/Random-Quote.png"
                    alt="Rockstar Games"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Random Quote</h2>
                <p>
                Aplicación que trae frases icónicas aleatoriamente de personajes históricos.
                </p>
                <div>
                  {/* <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb /> */}
                  <FaReact />
                  {/* <SiMaterialui /> */}
                </div>
                <div>
                  <a
                    href="https://frosty-meninsky-b352b2.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/gaboducuara/random-Quotexbox"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/16HRFZK/Pokedex.png"
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Pokedex</h2>
                <p>
                Aplicación que te lleva al mundo de los pokémons. más de 50 variedades, con sus respectivos tipos.
                </p>
                <div>
                  {/* <DiCss3 />
                  <SiHtml5 /> */}
                  <FaReact />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://wonderful-marzipan-15f08b.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/gaboducuara/pokemon_pokeapi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://i.ibb.co/fntMyDR/Rick-and-Morty.png" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Ricky And Morty</h2>
                <p>
                Una aplicación que trae más de 60 habitantes del mundo de Rick and Morty con su respectivo Tipo, Ubicación y Dimensión.
                </p>
                <div>
                  {/* <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb /> */}
                  <FaReact />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://stoic-fermat-c68da8.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/gaboducuara/Ricky_And_Morty"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>e-ecommerce</h2>
                <p>
                Una aplicación donde los usuarios realizan sus compras en el área tecnológica (Tv, Celulares , Computadoras) según API.
                </p>
                <div>
                  <FaReact />
                  <IoLogoJavascript />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://bucolic-tiramisu-4591ff.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for the API
                    </span>
                  </a>
                  <a
                    href="https://github.com/gaboducuara/ecommercefull2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/xHBtzww/Admon-Tareas.jpg"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Administrador de tareas</h2>
                <p>
                Realizó app Administrador de tareas MERN STACK , en donde se puede escribir cualquiera tarea y realizar la técnica llamada
                CRUD, “Crear, Agregar, Eliminar y Actualizar datos”
                </p>
                <div>
                  <FaReact />
                  <IoLogoJavascript />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  {/* <SiHtml5 />
                  <DiCss3 /> */}
                </div>
                <div>
                  <a
                    href="https://vitejs-administrador-tareas.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/gaboducuara/App-Administrador-tareas-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/6NRqRdb/Dispersion.png"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Dispersion</h2>
                <p>
                Se realiza Sprint de 4 semanas en donde desarrollamos una Aplicación MERN STACK, en donde el usuario tiene la posibilidad de
                realizar una Cotización Textil.
                </p>
                <div>
                  {/* <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript /> */}
                  <FaReact />
                  <IoLogoJavascript />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://dispersion.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/No-Country/C8-64-FT-MERN"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
