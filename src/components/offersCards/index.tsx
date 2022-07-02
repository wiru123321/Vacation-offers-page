import React, { useState, useEffect } from 'react';
import OfferCard from './offerCard';

export type OffersTypes = {
	id: number
	subHeader: string
	header: string
	stars: number
	actualPrice: string
	lastPrice: string
	image: string
}

const OffersCards = () => {
	const [offers, setOffers] = useState<Array<OffersTypes>>([])

	const fetchOffers = async () => {
		try {
			const res = await fetch('/api/offers', {
				method: 'GET',
			})
			const json = await res.json()
			setOffers(json.offers)
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		fetchOffers()
	}, [])
	return (
		<div>
			{offers.map(
				({
					id,
					subHeader,
					header,
					stars,
					actualPrice,
					lastPrice,
					image,
				}) => (<OfferCard id={id} subHeader={subHeader} header={header}
					stars={stars}
					actualPrice={actualPrice}
					lastPrice={lastPrice}
					image={image} />))}
		</div>
	)
}

export default OffersCards;