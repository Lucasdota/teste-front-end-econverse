import React from 'react'

export default function MiddleBar() {
  return (
    <div className="middle-bar">
      <nav className="middle-bar-menu" aria-label="Main navigation">
        <div className="middle-bar-left-box">
          <a href="/" aria-label="Econverse home">
            <img src="/Logo.png" alt="Econverse logo" />
          </a>
        </div>

        <form
          className="middle-bar-center-box"
          action="/search"
          method="GET"
          aria-label="Search form"
        >
          <label htmlFor="search-input" style={{ display: "none" }}>
            Buscar produtos
          </label>
          <input
            id="search-input"
            name="q"
            type="text"
            placeholder="O que você está buscando?"
            aria-label="Digite o que você está buscando"
            required
          />
          <button type="submit" aria-label="Buscar">
            <img src="/MagnifyingGlass.png" alt="magnifying glass icon" />
          </button>
        </form>

        <div className="middle-bar-right-box" aria-label="User actions">
          <a href="/orders" aria-label="Minhas compras">
            <img
              className="middle-bar-box"
              src="/Box.png"
              alt="order box"
            />
          </a>
          <a href="/favorites" aria-label="Favoritos">
            <img src="/Heart.png" alt="heart icon to favorites" />
          </a>
          <a href="/profile" aria-label="Perfil do usuário">
            <img
              src="/UserCircle.png"
              alt="user account icon"
            />
          </a>
          <a href="/cart" aria-label="Carrinho de compras">
            <img src="/ShoppingCart.png" alt="shopping cart icon" />
          </a>
        </div>
      </nav>
    </div>
  );
}
