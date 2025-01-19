import React from 'react'

export default function Information() {
  return (
    <div className="information-container">
      <div className="social-container">
        <img src="/Logo.png" alt="Econverse logo" />
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <div className="social-icons">
          <img src="/Instagram.png" alt="instagram logo" />
          <img src="/Facebook.png" alt="facebook logo" />
          <img src="/Linkedin.png" alt="linkedin logo" />
        </div>
      </div>

      <hr />

      <div className="links-container">
        <div>
          <h5>Institucional</h5>
          <span href="/">Sobre nós</span>
          <span href="/">Movimento</span>
          <span href="/">Trabalhe Conosco</span>
        </div>
      </div>

      <div className="links-container">
        <div>
          <h5>Ajuda</h5>
          <span href="/">Suporte</span>
          <span href="/">Fale Conosco</span>
          <span href="/">Perguntas Frequentes</span>
        </div>
      </div>

      <div className="links-container">
        <div>
          <h5>Termos</h5>
          <span href="/">Termos e Condições</span>
          <span href="/">Política de Privacidade</span>
          <span href="/">Troca e Devolução</span>
        </div>
      </div>
    </div>
  );
}
