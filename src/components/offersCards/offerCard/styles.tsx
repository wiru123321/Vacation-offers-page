import styled from "styled-components";
import Box from '@mui/material/Box'

export const CardContentContainer = styled.div`
	text-align: left;
	border-width: 0.5px;
	border-top-width: 0px;
	border-color: #d3d3d366;
	border-style: solid;
	padding-left: 15px;
	padding-bottom: 15px;
	padding-top: 10px;
	margin-top: -3px;
	display: grid;
`

export const SubHeader = styled.a`
	color: gray;
	font-weight: 500;
`

export const Header = styled.a`
	font-size: 24px;
	font-weight: bold;
	padding-bottom: 15px;
`

export const ActualPriceText = styled.a`
	font-weight: 400;
`

export const Dot = styled.a`
	color: gray;
	font-size: 22px;
`

export const LastPriceText = styled.a`
	color: gray;
	text-decoration-line: line-through;
	text-decoration-color: black;
`

export const ImgContaner = styled.img`
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	width: 100%;
`

export const RatingContainer = styled(Box)`
	width: 200px;
	display: flex;
	align-items: center;
`
