import React from 'react';
import "./Home.css";
import logo from "./img/logo.png";

function Home() {
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">INÍCIO</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">SOBRE</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">TRABALHOS</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">PROJETOS</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">CONTATO</li>
              </a>
            </ul>
          </div>
            </div>
             {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
            <h1 className="home__text pz__10">NO DIA 01/09/2023 ESSE PORTFOLIO SERÁ SUBSTITUIDO POR OUTRO</h1>
              <h1 className="home__text pz__10">SEJAM BEM-VINDOS AO MEU MUNDO!</h1>
              <h2 className="home__text pz__10">Olá, eu sou o Paulo Madson!</h2>
              <h3 className="home__text sweet pz__10">Sou desenvolvedor Web</h3>
              <h4 className="home__text pz__10">E Sou Paraense!</h4>
              </div>
              </div>
              </div>
        </div>
    </div>
  )
}

export default Home;
