import React, { Dispatch, SetStateAction } from 'react'

type Props = {
  translateX: number;
  setTranslateX: Dispatch<SetStateAction<number>>;
};

export default function Chevrons({ translateX, setTranslateX }: Props) {
	const handleNextRight = () => {
			if (translateX > -1932) {
				setTranslateX((prev) => prev - 322);
			}
		};
	
		const handleNextLeft = () => {
			if (translateX < 0) {
				setTranslateX((prev) => prev + 322);
			}
		};

	return (
		<nav className="chevrons-container">
		<button
			disabled={translateX >= 0}
			onClick={handleNextLeft}
			className="chevrons"
			aria-label="Scroll to the left"
			rel="next"
		>
			<img src="/ChevronLeft.png" alt="chevron left" />
		</button>
		<button
			disabled={translateX <= -1932}
			onClick={handleNextRight}
			className="chevrons"
			aria-label="Scroll to the right"
			rel="prev"
		>
			<img src="/ChevronRight.png" alt="chevron right" />
		</button>
		</nav>
	);
}