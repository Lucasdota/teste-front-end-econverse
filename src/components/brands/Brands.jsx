import React from 'react'

export default function Brands() {
  return (
    <section className="brands-container">
      <div className="title-container">
        <h3>Navegue por marcas</h3>
      </div>

      <nav className="circle-container">
        <button className="circle">
          <img src="/Logo.png" loading="lazy" alt="Econverse logo" />
        </button>
        <button className="circle">
          <img src="/Logo.png" loading="lazy" alt="Econverse logo" />
        </button>
        <button className="circle">
          <img src="/Logo.png" loading="lazy" alt="Econverse logo" />
        </button>
        <button className="circle">
          <img src="/Logo.png" loading="lazy" alt="Econverse logo" />
        </button>
        <button className="circle">
          <img src="/Logo.png" loading="lazy" alt="Econverse logo" />
        </button>
      </nav>
    </section>
  );
}
