import React from 'react';
import './Contact.css';
import contactImg from "./img/about-9.png";
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contrate - Me.</h1>
                            <p className="hire__text white">Estou disponível para trabalho autônomo. Conecte-se comigo por telefone:</p>
                           <p className="hire__text white"><strong>+55 53 99947 - 1481</strong> e email <strong>paulomadson16@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Seu Nome *" />
                           <input type="text" className="contact email" placeholder="Seu Email *" />
                           <input type="text" className="contact subject" placeholder="Escreva um assunto" />
                           <textarea name="message" id="message" placeholder="Escreva sua mensagem"></textarea>
                           <button className="btn contact pointer" type="submit">Enviar</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
