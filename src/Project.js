import React from "react";
import "./Project.css";
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/portfolio-2.jpg';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/portfolio-4.jpg';
import Project5 from "./img/portfolio-5.jpg";
import Project6 from "./img/portfolio-6.jpg";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">Meus últimos Projetos</h1>
        <p className="heading p__color">
          Projetos desenvolvidos em Bootcamps, semanas imersas,
        </p>
        <p className="heading p__color">
          eventos que participei e para desenvolvimeto pessoal na área,
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
                     <h5 className="project__text">Desenvolvido na NLW TOGETHER </h5>
                     <h4 className="project__text">LETMEASK</h4>
                     <a href="#" className="project__btn">EM DESENVOLVIMENTO</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Bootcamp GOSTACK da Rockseat</h5>
                     <h4 className="project__text">Barbearia online</h4>
                     <a href="#" className="project__btn">EM DESENVOLVIMENTO</a>
                     </div>
                 </div>
             </div>


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
                     <a href="#" className="project__btn">EM DESENVOLVIMENTO</a>
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
                     <a href="#" className="project__btn">EM DESENVOLVIMENTO</a>
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
                     <h5 className="project__text">Treinamento </h5>
                     <h4 className="project__text">Clone da Netflix</h4>
                     <a href="./img/portfolio-4.jpg" className="project__btn">EM DESENVOLVIMENTO</a>
                     </div>
                 </div>
             </div>
{/*<div className="view__more__btn d__flex align__items__center justify__content__center pxy__30"><button className="view__more pointer btn">FIM...</button></div>
 COMENTÁRIO JSX  */}
           </div>
       </div>
    </div>
  );
}

export default Project;
