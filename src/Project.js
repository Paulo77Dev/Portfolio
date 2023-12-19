/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Project.css";
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/radio.png';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/portfolio-4.jpg';
import Project5 from "./img/portfolio-5.jpg";
import Project6 from "./img/portfolio-6.jpg";
import Project7 from "./img/rgb_color.png";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">Meus últimos Projetos</h1>
        <p className="heading p__color">
          Projetos desenvolvidos em Bootcamps, semanas imersas,
        </p>
        <p className="heading p__color">
          eventos que participei e para desenvolvimeto pessoal na área!
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Desenvolvido na SDS2 DevSuperior</h5>
                     <h4 className="project__text">PM DELIVERY</h4>
                     <a href="https://paulo-madson-pm-delivery.netlify.app/" className="project__btn">Mais detalhes</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Desenvolvido no Treinee da Byte Jr. </h5>
                     <h4 className="project__text">RÁDIO DA BYTE</h4>
                     <a href="https://radio-byte-jr.netlify.app/" className="project__btn">mais detalhes</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project7} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">DESAFIO RGB</h5>
                     <h4 className="project__text">Formar cores</h4>
                     <a href="https://rgbscolors.netlify.app/" className="project__btn">Mais detalhes</a>
                     </div>
                 </div>
             </div>

{/* UP TO TOP BTN 
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Desenvolvido para experiência</h5>
                     <h4 className="project__text">E-Commerce Petfood</h4>
                     <a className="project__btn">EM DESENVOLVIMENTO</a>
                     </div>
                 </div>
             </div>


              <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Bootcamp Inter Frontend Developer</h5>
                     <h4 className="project__text">E-Commerce</h4>
                     <a className="project__btn">EM DESENVOLVIMENTO</a>
                     </div>
                 </div>
             </div>

*/}
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Multimarcas Online</h5>
                     <h4 className="project__text">E-commerce de carros</h4>
                     <a href="https://multimarcas.online/" className="project__btn">Mais detalhes</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Versão Frontend simples </h5>
                     <h4 className="project__text">Clone da Netflix</h4>
                     <a href="https://clone-da-netflix-v1.netlify.app" className="project__btn">Mais detalhes</a>
                     </div>
                 </div>
             </div>
           </div>
       </div>
       
    </div>
  );
}

export default Project;
