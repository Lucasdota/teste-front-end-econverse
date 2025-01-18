import React from 'react'

export default function Categories() {
  return (
    <section className="categories-container">
      <ul>
        <li className="tecnologia">
          <div className="categories-img-container">
            <img src="/Devices.png" alt="devices" />
          </div>
          <h3 className='titulo-tecnologia'>Tecnologia</h3>
        </li>

        <li className="supermercado">
          <div className="categories-img-container">
            <img src="/Supermercados.png" alt="supermercados" />
          </div>
          <h3>Supermercado</h3>
        </li>

        <li className="bebidas">
          <div className="categories-img-container">
            <img src="/Bebidas.png" alt="bebidas" />
          </div>
          <h3>Bebidas</h3>
        </li>

        <li className="ferramentas">
          <div className="categories-img-container">
            <img src="/Ferramentas.png" alt="ferramentas" />
          </div>
          <h3>Ferramentas</h3>
        </li>

        <li className="saúde">
          <div className="categories-img-container">
            <img src="/Saude.png" alt="saude" />
          </div>
          <h3>Saúde</h3>
        </li>

        <li className="esportes e fitness">
          <div className="categories-img-container">
            <img src="/Esportes.png" alt="esportes" />
          </div>
          <h3>Esportes e Fitness</h3>
        </li>

        <li className="moda">
          <div className="categories-img-container">
            <img src="/Moda.png" alt="moda" className='moda-logo' />
          </div>
          <h3>Moda</h3>
        </li>
      </ul>
    </section>
  );
}
