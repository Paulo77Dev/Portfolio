import React from "react";
import footerImg from "./img/logo-1.png";
function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
  <div class="social">
    <a href="https://github.com/Paulo77Dev"><i class="fab fa-github"></i></a>
    <a href="https://www.instagram.com/paulo_madson77/?hl=pt-br"><i class="fab fa-instagram"></i></a>
    <a href="https://www.linkedin.com/in/paulo-madson-6475a2182/"><i class="fab fa-linkedin"></i></a>
  </div>
      <img src={footerImg} alt="" className="footer__img pointer" />
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2021 programmer Paulo Madson. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
