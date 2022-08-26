import React from 'react';
import './Contact.css';   
import emailjs from "emailjs-com";
import contactImg from "./img/about-9.png";

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail_paulo', 'template_gwwdfdg', e.target, 'user_WRbuOJOeUKm3u6hk8L9FS')

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
           
                }, (error) => {
                    alert(error.message)
            
                });
                     e.target.reset()
    }
    return(
<div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Fale comigo</h1>
                                <p className="hire__text white">Estou disponível para trabalho, estágio e demais. Conecte-se comigo:</p>
                                    </div>                
                                <div className="input__box">
                            <form onSubmit={sendEmail}>
                            <input type="text" autoFocus className="contact name" required placeholder="Nome" name="name"/>
                            <input type="email" className="contact email" required placeholder="Seu email" name="email"/>
                            <textarea name="menssage" id="menssage" placeholder="Escreva sua mensagem"></textarea>
                            <button className="btn contact pointer" type="submit">Enviar</button>
                            </form>    
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