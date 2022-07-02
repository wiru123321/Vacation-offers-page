import React from 'react';
import { OffersTypes } from '../';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import {
	CardContentContainer, SubHeader, Header, ActualPriceText,
	Dot, LastPriceText, ImgContaner, RatingContainer
} from './styles';

const OfferCard = (props: OffersTypes) => {
	const { id, actualPrice, header, image, lastPrice, stars, subHeader } = props;
	return (
		<Grid item xs={12} sm={6} md={4} key={id}>
			<Box>
				<ImgContaner
					src={image}
					alt="vacation"
				/>
				<CardContentContainer>
					<SubHeader>
						{subHeader}
					</SubHeader>
					<Header>
						{header}
					</Header>
					<RatingContainer>
						<Rating
							name="half-rating-read"
							defaultValue={stars}
							precision={0.1}
							readOnly
						/>
						<Box sx={{ ml: 2 }}>
							{stars}
						</Box>
					</RatingContainer>
					<Box>
						<ActualPriceText
						>
							From {actualPrice}
						</ActualPriceText>
						<Dot
						>
							{' '}
							&bull;
							{' '}
						</Dot>
						<LastPriceText>
							Price {lastPrice}
						</LastPriceText>
					</Box>
				</CardContentContainer>
			</Box>
		</Grid>
	)
}

export default OfferCard;