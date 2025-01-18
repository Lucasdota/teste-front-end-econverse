import React from 'react'

export default function MiddleBar() {
  return (
    <div className="middle-bar">
      <div className="middle-bar-menu">
        <div className="middle-bar-left-box">
          <img src="/Logo.png" alt="Econverse logo" />
        </div>

        <div className="middle-bar-center-box">
          	<input placeholder='O que você está buscando?' />
        	<img src='/MagnifyingGlass.png' alt='ícone de lupa' />
        </div>

        <div className="middle-bar-right-box">
          <img className='middle-bar-box' src="/Box.png" alt="Box logo" />
          <img src="/Heart.png" alt="Heart logo" />
          <img src="/UserCircle.png" alt="User Circle logo" />
          <img src="/ShoppingCart.png" alt="Shopping Cart logo" />
        </div>
      </div>
    </div>
  );
}
