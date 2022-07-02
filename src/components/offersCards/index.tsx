import React, { useState, useEffect } from 'react';
import OfferCard from './offerCard';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { OffersContainer, GridContainer } from './styles';

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
		<OffersContainer>
			<GridContainer container>
				{offers?.length > 0 ? (
					<Grid
						container
						rowSpacing={3}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					>
						{offers.map(
							({
								id,
								subHeader,
								header,
								stars,
								actualPrice,
								lastPrice,
								image,
							}) => (
								<OfferCard id={id} subHeader={subHeader} header={header}
									stars={stars}
									actualPrice={actualPrice}
									lastPrice={lastPrice}
									image={image} />
							)
						)}
					</Grid>
				) : (
					<Box>
						<p>Loading...</p>
					</Box>
				)
				}
			</GridContainer >
		</OffersContainer >
	)
}

export default OffersCards;