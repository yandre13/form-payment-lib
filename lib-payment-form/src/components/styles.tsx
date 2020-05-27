import styled, { css } from 'styled-components'

const calendar = require('../img/icons/calendar.svg'),
	crediCard = require('../img/icons/credit-card.svg'),
	user = require('../img/icons/user.svg'),
	lock = require('../img/icons/lock.svg')

export const ButtonContainer = styled.button<{ activeButton: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 44px;
	height: 44px;
	background: #2364d2;
	position: relative;
	top: -25px;
	border: none;
	border-radius: 50%;
	z-index: 20;
	box-shadow: -5px 4px 8px rgba(24, 56, 182, 0.4);
	cursor: pointer;
	transition: all 0.4s ease;
	transform: ${(props) => props.activeButton && 'rotate(45deg)'};
	:focus {
		outline: none;
		border: 0;
	}
	:hover {
		background: #1850b1;
	}
`

export const Wrapper = styled.div`
	position: relative;
	width: 80%;
	max-width: 1000px;
	padding: 40px 20px;
	margin: auto;
	display: flex;
	flex-direction: column;
	background: #ccc;
	align-items: center;
	.modal {
	}
`

export const Card = styled.article<{ activeCard: boolean }>`
	width: 100%;
	max-width: 344px;
	position: relative;
	color: #fff;
	transition: 0.6s ease all;
	transform: rotateY(0deg);
	transform-style: preserve-3d;
	cursor: pointer;
	z-index: 10;
	transform: ${(props) => props.activeCard && 'rotateY(180deg)'};
	& > div {
		background-color: #0b6ab1;
		padding: 18px;
		border-radius: 14px;
		min-height: 206px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: 0 10px 10px 0 rgba(90, 116, 148, 0.3);
	}
`

export const Front = styled.div`
	width: 100%;
	backface-visibility: hidden;
	background-image: linear-gradient(45deg, #0b6ab1 0%, #26d886 100%);
	& .logo {
		text-align: right;
		min-height: 30px;
		img {
			width: 100%;
			max-width: 58px;
			height: 90%;
			min-height: 36px;
			object-fit: cover;
		}
	}
	& > img {
		position: relative;
		top: -6px;
		width: 100%;
		max-width: 40px;
		margin-bottom: 6px;
	}
`

export const Label = styled.p`
	font-size: 0.9rem;
	color: #fff;
`

export const Legal = styled.p`
	font-size: 0.8rem;
	line-height: 1rem;
	color: ${(props) => (props.color ? '#2364d2;' : '#f2f2f2')};
`

export const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;
`

export const Group = styled.div`
	&.name {
		max-width: 240px;
		width: 100%;
	}
	& p {
		overflow: hidden;
		max-width: 100%;
		font-size: 0.9rem;
		line-height: 20px;
		height: 20px;
	}
	&.number {
		margin-bottom: 6px;
	}
	&.signature {
		width: 70%;
	}
	&.ccv {
		width: 20%;
		> .ccv {
			background: #fff;
			height: 30px;
			line-height: 10px;
			color: #000;
			padding: 10px;
			text-align: center;
		}
	}
`

export const Back = styled.div`
	backface-visibility: hidden;
	background-image: linear-gradient(-45deg, #0b6ab1 0%, #26d886 100%);
	position: absolute;
	top: 0;
	transform: rotateY(180deg);
	backface-visibility: hidden;
`

export const MagBar = styled.div`
	height: 36px;
	width: 100%;
	background: #000;
	position: absolute;
	top: 20px;
	left: 0;
`

export const Data = styled.div`
	margin-top: 44px;
	display: flex;
	justify-content: space-between;
	& p {
		margin-bottom: 5px;
	}
`

export const Signature = styled.div`
	width: 100%;
	height: 30px;
	background: repeating-linear-gradient(
		skyblue 0,
		skyblue 5px,
		orange 5px,
		orange 10px
	);
	& > p {
		overflow: hidden;
		max-width: 100%;
		height: 100%;
		line-height: 30px;
		font-family: Georgia, 'Times New Roman', Times, serif;
		color: #000;
		font-size: 1.4rem;
		padding: 0 10px;
		text-transform: capitalize;
		word-break: break-all;
	}
`
export const Form = styled.form<{ activeForm: boolean }>`
	background: #fff;
	width: 100%;
	max-width: 406px;
	padding: 108px 30px 30px;
	border-radius: 16px;
	position: relative;
	top: -120px;
	z-index: 1;
	transition: all 0.4s ease-out;
	clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
	clip-path: ${(props) =>
		props.activeForm && 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'};
`

export const FormGroup = styled.div<{ valid: boolean }>`
	& label {
		display: block;
		color: #7d8994;
		font-size: 0.9rem;
	}
	& input {
		border: 1px solid #ced6e0;
		font-size: 0.9rem;
		height: 32px;
		width: 100%;
		padding: 6px 12px 6px 34px;
		margin-bottom: 12px;
		transition: 0.4s ease all;
		border-radius: 4px;
		${(props) =>
			props.valid &&
			css`
				border: 1px solid #27ae60 !important;
				box-shadow: 0px 0px 2px #27ae60;
			`};
		${(props) =>
			props.valid === false &&
			css`
				border: 1px solid #e74c3c !important;
				box-shadow: 0px 0px 2px #e74c3c;
			`};
		:focus {
			outline: rgba(4, 4, 4, 0.5);
			border: 1.3px solid #93bded;
			box-shadow: 0px 0px 4px #93bded;
		}
	}
`

export const FormGroupFlex = styled.div`
	display: flex;
	justify-content: space-between;
	div:first-child {
		margin-right: 8px;
		width: 50%;
	}
	div:nth-child(2) {
		width: 50%;
		margin-left: 8px;
	}
`

export const SendButton = styled.button`
	border: none;
	border-radius: 6px;
	width: 100%;
	margin-top: 12px;
	height: 32px;
	font-size: 0.9rem;
	color: #fff;
	cursor: pointer;
	background: #2364d2;
	:hover {
		background: #1850b1;
		box-shadow: 0px 0px 4px #93bded;
	}
	:focus {
		outline: rgba(4, 4, 4, 0.5);
		box-shadow: 0px 0px 6px #93bded;
	}
`
export const SendButtonDisable = styled.button`
	border: none;
	border-radius: 6px;
	width: 100%;
	margin-top: 12px;
	height: 32px;
	font-size: 0.9rem;
	color: #fff;
	cursor: not-allowed;
	background: #9fb1aa;
`

export const InputNumber = styled.input`
	background: url(${crediCard});
	background-repeat: no-repeat;
	background-size: 20px;
	background-position: 8px center;
`

export const InputName = styled.input`
	background: url(${user});
	background-repeat: no-repeat;
	background-size: 18px;
	background-position: 8px center;
`

export const InputDate = styled.input`
	background: url(${calendar});
	background-repeat: no-repeat;
	background-size: 18px;
	background-position: 8px center;
`

export const InputCcv = styled.input`
	background: url(${lock});
	background-repeat: no-repeat;
	background-size: 18px;
	background-position: 8px center;
`

export const Modal = styled.div`
	position: absolute;
	width: 90%;
	max-width: 346px;
	height: 320px;
	background: #fff;
	border-radius: 12px;
	top: 20%;
	box-shadow: 0px 0px 26px #9e9e9e;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px;
	z-index: 200;
`

export const Error = styled.small`
	display: block;
	font-size: 0.9rem;
	line-height: 1.4rem;
	color: #e74c3c;
	position: relative;
	top: -0.3rem;
`
