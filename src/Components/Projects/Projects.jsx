import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiTypescript,
  SiAmazon,
  SiVite,
  SiDocker,
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
import { DiCss3, DiDocker } from "react-icons/di";
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

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.postimg.cc/d3zv1MLV/Memoria-en-react.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Memoria en React js</h2>
                <p>
                  Juego interactivo en memoria donde tendras que adivinar las posiciones en par de los diferentes lenaguajes de programacion, frameworks y tecnologias mas populares actualmente.
                </p>
                <div>
                  <FaReact />
                  <SiVite/>
                  {/* // <SiNodedotjs />
                  // <SiExpress />
                  // <SiMongodb /> */}
                </div>
                <div>
                  <a
                    href="https://memoramareact.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/gaboducuara/MemoramaReact.git"
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
                    src="https://i.postimg.cc/7YV0nfX4/Captura-de-pantallaaaa-69.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Memorama JavaScript</h2>
                <p>
                  Juego interactivo en memoria donde tendras que adivinar las posiciones en par de los diferentes lenaguajes de programacion mas populares actualmente.
                </p>
                <div>
                <SiJavascript/>
                  {/* <FaReact />
                  <SiVite/> */}
                  {/* // <SiNodedotjs />
                  // <SiExpress />
                  // <SiMongodb /> */}
                </div>
                <div>
                  <a
                    href="https://memorama-javascript.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/gaboducuara/memoramaJavaScript.git"
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
                    src="https://i.ibb.co/VV9c9fZ/Captura-de-pantalla-17.png"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>CONTRATÁ</h2>
                <p>
                Aplicacion en donde encontraras servicios profesionales para tu hogar, con referencia de clientes reales y con nuestro respaldo y garantía.
                </p>
                <div>
                  {/* <FaReact /> */}
                  <SiTypescript />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiDocker />
                  {/* <DiDocker /> */}
                  <SiVite />
                  <SiAmazon />
                </div>
                <div>
                  <a
                    href="https://contrata.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/No-Country/S6-15-M-MERN/tree/main"
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
                Se realiza Sprint de 4 semanas en donde desarrollamos una Aplicación MERN STACK, donde los usuarios tienen la posibilidad de
                realizar Cotizaciónes Textiles.
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
