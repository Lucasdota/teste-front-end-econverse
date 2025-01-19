import React, { useState, useEffect } from "react";
import Modal from "../Modal.tsx";

export default function Products() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const productsObj = {
    success: true,
    products: [
      {
        productName: "Iphone 11 PRO MAX BRANCO 1",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 1",
        photo:
          "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 15000,
      },
      {
        productName: "IPHONE 13 MINI 1",
        descriptionShort: "IPHONE 13 MINI 1",
        photo:
          "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 9000,
      },
      {
        productName: "Iphone 11 PRO MAX BRANCO 2",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 2",
        photo:
          "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 14990,
      },
      {
        productName: "IPHONE 13 MINI 2",
        descriptionShort: "IPHONE 13 MINI 2",
        photo:
          "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 12000,
      },
      {
        productName: "Iphone 11 PRO MAX BRANCO 3",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 3",
        photo:
          "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 4550,
      },
      {
        productName: "IPHONE 13 MINI 3",
        descriptionShort: "IPHONE 13 MINI 3",
        photo:
          "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 38000,
      },
      {
        productName: "Iphone 11 PRO MAX BRANCO 4",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 4",
        photo:
          "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 42000,
      },
      {
        productName: "IPHONE 13 MINI 4",
        descriptionShort: "IPHONE 13 MINI 4",
        photo:
          "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 520,
      },
      {
        productName: "Iphone 11 PRO MAX BRANCO 5",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 5",
        photo:
          "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 149990,
      },
      {
        productName: "IPHONE 13 MINI 5",
        descriptionShort: "IPHONE 13 MINI 5",
        photo:
          "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 100000,
      },
    ],
  };

  	const formatPrice = (price) => {
		return new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
		}).format(price);
  	};

	 const handleBuyClick = (product) => {
     setSelectedProduct(product);
     setIsPopupVisible(true);
   };

   const closePopup = () => {
     setIsPopupVisible(false);
     setSelectedProduct(null);
   };

   let visibleProducts = productsObj.products.slice(
     startIndex,
     startIndex + 4
   );

   const handleNextRight = () => {
     if (startIndex + 4 < productsObj.products.length) {
       setStartIndex((prev) => prev + 1);
     }
   };

   const handleNextLeft = () => {
     if (startIndex > 0) {
       setStartIndex((prev) => prev - 1);
     }
   };

    useEffect(() => {
      if (isPopupVisible) {
        document.body.style.overflow = "hidden";
		document.body.style.position = "relative";
		document.body.style.right = "8px";
		document.documentElement.style.overflow = "hidden";
		document.documentElement.style.position = "relative";
      } else {
        document.body.style.overflow = "auto";
		document.body.style.right = "0px";
		document.documentElement.style.overflow = "auto";
      }
      return () => {
        document.body.style.overflow = "auto";
		document.body.style.right = "0px";
		document.documentElement.style.overflow = "auto";
      };
    }, [isPopupVisible]);

  return (
    <>
      <div className="chevrons-container">
        <button
          onClick={handleNextLeft}
          disabled={startIndex === 0}
          className="chevrons"
        >
          <img src="/ChevronLeft.png" alt="chevron left" />
        </button>
        <button onClick={handleNextRight} 
		disabled={startIndex + 4 >= productsObj.products.length}
		 className="chevrons">
          <img src="/ChevronRight.png" alt="chevron right" />
        </button>
      </div>
      <ul className="showcase-products-container">
        {visibleProducts.map((product, index) => (
          <li key={index}>
            <img src={product.photo} alt={product.productName} />
            <p className="product-description">{product.descriptionShort}</p>
            <p className="old-price">{`${formatPrice(product.price + 200)}`}</p>
            <p className="price">{`${formatPrice(product.price)}`}</p>
            <p className="price-interest">{`ou 5x de ${formatPrice(
              (product.price * 1.15) / 5
            )} sem juros`}</p>
            <p className="free-delivery">Frete grátis</p>
            <button
              className="buy-button"
              onClick={() => handleBuyClick(product)}
            >
              <p>Comprar</p>
            </button>
          </li>
        ))}
      </ul>

      {isPopupVisible && selectedProduct && (
        <Modal
          product={selectedProduct}
          formatPrice={formatPrice}
          closePopup={closePopup}
        />
      )}
    </>
  );
}


