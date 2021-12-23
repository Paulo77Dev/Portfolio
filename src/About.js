import React from "react";
import "./About.css";
import aboutImg from "./img/about.png";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">Sobre mim</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Sou o Paulo Madson natural de Paragominas no Pará, desde os meus 13 anos sou apaixonado por tecnologia
                e desde então comecei a me envolver mais, a saber mais sobre e como tudo funcionava. Em 2017
                eu ingressei em um curso de informática no IFPA, que pude ter um estudo profundo sobre os mistérios da tecnologia. 
              </p>
              <p className="about__text p__color">
                Em 2020 como muito esforço e dedicação entrei para a tão sonhada faculdade de ENGENHARIA DE COMPUTAÇÃO, e meses depois entrei como bolsista em um
                grupo(PETC3) que me fez aprender a trabalhar em grupo e desenvolver meus talentos e aprimora-lós a cada dia. Só que apesar de tudo isso acontecer em um 
                pandêmico eu consegui tirar, e realmente ver o que eu gostava na tecnologia que é a programação web comecei a estudar e me aprofundar mais nas techs atuais do segmento.
              </p>
              <p className="about__text p__color">
               Sou Paulo Madson Graduando em Bacharelado de Engenharia de Computação na Universidade Federal do Rio Grande - FURG.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/u/0/uc?id=1JGKuKiaGbyqNNix7XnkEVKNHr2Pjh8cJ&export=download">
                  <button className="about btn pointer">Baixar CV</button>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5553999471481&text=Ol%C3%A1%20Paulo%2C%20preciso%20falar%20com%20voc%C3%AA!!!">
                  <button className="about btn pointer">Fale Comigo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="https://drive.google.com/u/0/uc?id=1JGKuKiaGbyqNNix7XnkEVKNHr2Pjh8cJ&export=download"className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
