import React from 'react'

export default function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-menu">
		<p>Todas categorias</p>
		<p>Supermercado</p>
		<p>Livros</p>
		<p>Moda</p>
		<p>Lançamentos</p>
		<p className='ofertas'>Ofertas do Dia</p>
        <div className="bottom-bar-last-box">
			<img src="/CrownSimple.png" alt="crown logo" />
        	<p>Assinatura</p>
        </div>
      </div>
    </div>
  );
}

