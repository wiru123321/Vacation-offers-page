import React from 'react';
import { OffersTypes } from '../';

const OfferCard = (props: OffersTypes) => {
	const { id, actualPrice, header, image, lastPrice, stars, subHeader } = props;
	return (
		<>
			<div>{id}</div>
			<div>{actualPrice}</div>
			<div>{header}</div>
			<div>{lastPrice}</div>
			<div>{stars}</div>
			<div>{subHeader}</div>
			<img src={image} alt="vacation" />
		</>
	)
}

export default OfferCard;