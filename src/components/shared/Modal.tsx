import React, {useState} from 'react'

type Props = {
  product: {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  };
  formatPrice: (value: number) => void;
  closePopup: () => void;
};

export default function Modal({ product, formatPrice, closePopup }: Props) {
	const [quantity, setQuantity] = useState<number>(1);

	const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

	const formatQuantity = (qty: number): string => {
    return qty < 10 ? `0${qty}` : `${qty}`;
  };

  return (
    <div
      role="dialog"
      aria-labelledby={product.productName}
      aria-describedby={product.productName}
      className="popup-overlay"
      aria-modal="true"
      tabIndex={-1}
    >
      <div className="popup-container">
        <div className="img-container">
          <img src={product.photo} loading="lazy" alt={product.productName} />
        </div>
        <div className="popup-description">
          <h2>{product.productName}</h2>
          <p className="price">{`${formatPrice(product.price)}`}</p>
          <p className="long-description">
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>
          <p className="details">Veja mais detalhes do produto &gt;</p>
          <div className="comprar-button-row">
            <div className="quantity-menu-container">
              <button onClick={decreaseQuantity} aria-label="Decrease quantity">
                <img src="/Minus.png" alt="decrease quantity" />
              </button>
              <span>{formatQuantity(quantity)}</span>
              <button onClick={increaseQuantity} aria-label="Increase quantity">
                <img src="/Plus.png" alt="increase quantity" />
              </button>
            </div>

            <button className="comprar-button">Comprar</button>
          </div>
        </div>
        <button
          className="close-button-container"
          aria-label="Close popup"
          onClick={closePopup}
        >
          <div className="close-button">
            <img src="/LineRight.png" alt="close right line" />
            <img src="/LineLeft.png" alt="close left line" />
          </div>
        </button>
      </div>
    </div>
  );
}
