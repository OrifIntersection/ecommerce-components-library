import { useState } from "react";

function ProductPicturesSelectionButtons({ images, setSelectedImage }) {
	const maxIndex = images.length - 1;

	const handleCycleLeft = () =>
		setSelectedImage((index) => (index == 0 ? maxIndex : index - 1));
	const handleCycleRight = () =>
		setSelectedImage((index) => (index == maxIndex ? 0 : index + 1));

	return (
		<>
			<button
				className="productPicturesSelectionButton"
				style={{ left: "30px" }}
				onClick={handleCycleLeft}
			>
				←
			</button>
			<button
				className="productPicturesSelectionButton"
				style={{ right: "30px" }}
				onClick={handleCycleRight}
			>
				→
			</button>
		</>
	);
}

function ProductPicturesListed({ images, selectedImage, setSelectedImage }) {
	return (
		<div className="productPicturesListed">
			{images.map((src, i) => (
				<img
					key={src}
					src={src}
					style={i == selectedImage ? { outline: "solid 3px #666666ff" } : {}}
					onClick={() => setSelectedImage(i)}
				/>
			))}
		</div>
	);
}

function ProductPicturesSelected({ images, selectedImage, setSelectedImage }) {
	return (
		<div className="productPicturesSelected">
			<ProductPicturesSelectionButtons
				images={images}
				setSelectedImage={setSelectedImage}
			/>
			<img src={images[selectedImage]}></img>
		</div>
	);
}

export default function ProductPicturesPanel({ images }) {
	console.log(images)
	const [selectedImage, setSelectedImage] = useState(0);

	return (
		<div className="productPicturesPanel">
			<ProductPicturesListed
				images={images}
				selectedImage={selectedImage}
				setSelectedImage={setSelectedImage}
			/>
			<ProductPicturesSelected
				images={images}
				selectedImage={selectedImage}
				setSelectedImage={setSelectedImage}
			/>
		</div>
	);
}
