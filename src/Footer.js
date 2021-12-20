import React from 'react';
import './Footer.css';
import {ReactComponent as YouTubeIcon } from './img/youtube.svg';
import {ReactComponent as LinkedinIcon } from './img/linkedin.svg';
import {ReactComponent as InstagramIcon } from './img/instagram.svg';

function Footer() {
  return (
    <footer className="main-footer">
    Copyright © 2021. Paulo Madson, Rio Grande, Rio Grande Do Sul -  todos os direitos reservados.
      <div className="footer-icons">
        <a href="https://www.youtube.com/channel/UCEvQ4VKN6d5SrWx6AiSCQOA" target="_new">
       <YouTubeIcon />
        </a>
        <a href="https://www.linkedin.com/in/paulo-madson-6475a2182" target="_new">
        <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/paulo_madson77/?hl=pt-br" target="_new">
        <InstagramIcon />
        </a>        
      </div>
    </footer>
  )
}
export default Footer;


