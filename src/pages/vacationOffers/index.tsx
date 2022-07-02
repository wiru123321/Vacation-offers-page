import React from 'react';
import OffersCards from '../../components/offersCards';
import { Container, TextHeader } from './styles';

const VacationOffers = () => {
	return (
		<Container>
			<TextHeader>
				Recently viewed trips
			</TextHeader>
			<OffersCards />
		</Container>
	)
}

export default VacationOffers;
