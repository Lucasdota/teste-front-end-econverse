import React from 'react'

export default function Information() {
  return (
    <div aria-label='informations' className="information-container">
      <div className="social-container">
        <img loading='lazy' src="/Logo.png" alt="Econverse logo" />
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <div className="social-icons">
          <img loading='lazy' src="/Instagram.png" alt="instagram logo" />
          <img loading='lazy' src="/Facebook.png" alt="facebook logo" />
          <img loading='lazy' src="/Linkedin.png" alt="linkedin logo" />
        </div>
      </div>

      <hr />

      <div className="links-container">
        <div>
          <h5>Institucional</h5>
          <a aria-label='Learn more about us' href="/">Sobre nós</a>
          <a aria-label='Learn more about our events' href="/">Movimento</a>
          <a aria-label='Work with us' href="/">Trabalhe Conosco</a>
        </div>
      </div>

      <div className="links-container">
        <div>
          <h5>Ajuda</h5>
          <a aria-label='customer service' href="/">Suporte</a>
          <a aria-label='contact us' href="/">Fale Conosco</a>
          <a aria-label='question asked' href="/">Perguntas Frequentes</a>
        </div>
      </div>

      <div className="links-container">
        <div>
          <h5>Termos</h5>
          <a aria-label='terms and conditions' href="/">Termos e Condições</a>
          <a aria-label='privacy policy' href="/">Política de Privacidade</a>
          <a aria-label='exchange and return' href="/">Troca e Devolução</a>
        </div>
      </div>
    </div>
  );
}
