import React from 'react'

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-menu">
        <div className="top-bar-left-box">
          <img src="/ShieldCheck.png" alt="shield check logo"></img>
          <p>
            <span>Compra</span> 100% segura
          </p>
        </div>

        <div className="top-bar-center-box">
          <img src="/Truck.png" alt="truck check logo"></img>
          <p>
            <span>Frete grátis</span> acima de R$ 200
          </p>
        </div>

        <div className="top-bar-right-box">
          <img src="/CreditCard.png" alt="creditCard check logo"></img>
          <p>
            <span>Parcele</span> suas compras
          </p>
        </div>
      </div>
    </div>
  );
}
