import React from 'react'

export default function NewsLetter() {
  return (
    <div className="newsletter-container">
      <div className="text-container">
        <h4>Inscreva-se na nossa newsletter</h4>
        <p>
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
          da Econverse.
        </p>
      </div>

      <div className="inputs-container">
        <div className="inputs-row">
          <input placeholder="Digite seu nome" />
          <input placeholder="Digite seu e-mail" />
          <span>Inscrever</span>
        </div>
        <div className="check-box-container">
          <input type="checkbox" />
          <span>Aceito os termos e condições</span>
        </div>
      </div>
    </div>
  );
}
