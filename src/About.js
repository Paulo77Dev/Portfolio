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
              Meu nome é Paulo Madson, nascido em Paragominas, no estado do Pará. Desde a minha adolescência, com apenas 13 anos, desenvolvi uma paixão inabalável pela tecnologia. A partir desse momento, comecei a me envolver mais com o tema e a buscar conhecimento sobre como tudo funciona.
              Em 2017, decidi ingressar em um curso de informática no Instituto Federal de Educação, Ciência e Tecnologia do Pará (IFPA), com o objetivo de aprofundar meus estudos sobre os mistérios da tecnologia. Durante o curso, tive a oportunidade de adquirir conhecimentos mais técnicos e avançados sobre o mundo da informática e suas aplicações.
              Acredito que a tecnologia é um campo fascinante e em constante evolução, e estou sempre buscando novos desafios e oportunidades para aprimorar meus conhecimentos e habilidades nessa área tão importante e promissora.</p>
              <p className="about__text p__color">
              No ano de 2020, com muita perseverança e dedicação, realizei meu sonho de ingressar na faculdade de Engenharia de Computação. Poucos meses depois, fui agraciado com uma bolsa no grupo PETC3, onde tive a oportunidade de aprimorar minhas habilidades em trabalho em equipe e desenvolver meus talentos diariamente. Apesar do cenário pandêmico em que vivemos, consegui enxergar com clareza minha verdadeira paixão na área da tecnologia, que é a programação web, e comecei a estudar e aprofundar meus conhecimentos nas tecnologias mais atuais do segmento.
              No ano de 2022, tive a oportunidade de trabalhar como TI na Timac Agro, onde pude colocar em prática os conhecimentos adquiridos no Curso técnico de informatica. Entretanto, decidi mudar de rumo e me dedicar à área de Engenharia de Automação, o que me levou a uma nova fase profissional. Atualmente, atuo como desenvolvedor fullstack na Wecast, bem como desenvolvedor web na Byte Jr. Além disso, estou realizando a capacitação 4.0 do ITEC/EMBRAPII FURG, buscando me aprimorar cada vez mais no mercado as minhas soft e hardskills.
              </p>
              <p className="about__text p__color">
               Sou Paulo Madson Graduando em Bacharelado de Engenharia de Automação na Universidade Federal do Rio Grande - FURG.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/1S2u6OKudCll-InmvykRpFsT-Axrg6w3d/view?usp=sharing">
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
        <a href="https://paulo-madson77.netlify.app/#Home"className="bottom__to__top">
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
