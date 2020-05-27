import React from 'react'
import {
	Card,
	Front,
	Back,
	Data,
	Label,
	FlexBox,
	Group,
	MagBar,
	Signature,
	ButtonContainer,
	Legal,
} from './styles'

const visa = require('../img/logos/visa.png'),
	mastercard = require('../img/logos/mastercard.png'),
	sim = require('../img/sim.png')
import { SwitchTransition, CSSTransition } from 'react-transition-group'

export default ({ cardConfig }: any) => {
	const {
		activeCard,
		activeButton,
		setActiveCard,
		setActiveButton,
		kindOfCard,
		dataInfo,
	} = cardConfig

	const cardChangeToggle = () => setActiveCard(!activeCard),
		buttonChangeToggle = () => setActiveButton(!activeButton)

	return (
		<>
			{console.log(dataInfo)}
			<Card className="card" activeCard={activeCard} onClick={cardChangeToggle}>
				<Front>
					<div className="logo">
						<SwitchTransition>
							<CSSTransition
								key={kindOfCard === 'mastercard' ? 'mastercard' : 'visa'}
								addEndListener={(node, done) =>
									node.addEventListener('transitionend', done, false)
								}
								classNames="fade"
							>
								<img src={kindOfCard === 'mastercard' ? mastercard : visa} alt="card" />
							</CSSTransition>
						</SwitchTransition>
					</div>
					<img src={sim} alt="sim" />
					<div>
						<Group className="number">
							<Label>Card Number</Label>
							<p>{dataInfo.cardNumber}</p>
						</Group>
						<FlexBox>
							<Group className="name">
								<Label>Card name</Label>
								<p>{dataInfo.name.toUpperCase()}</p>
							</Group>
							<Group className="exp">
								<Label>Expiration</Label>
								<p>{dataInfo.expiryDate}</p>
							</Group>
						</FlexBox>
					</div>
				</Front>
				<Back>
					<MagBar />
					<Data>
						<Group className="signature">
							<Label>Firma</Label>
							<Signature>
								<p>{dataInfo.name}</p>
							</Signature>
						</Group>
						<Group className="ccv">
							<Label>CCV</Label>
							<p className="ccv">{dataInfo.ccv}</p>
						</Group>
					</Data>
					<Legal>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempore.
					</Legal>
					<Legal>www.interbank.pe</Legal>
				</Back>
			</Card>
			<ButtonContainer activeButton={activeButton} onClick={buttonChangeToggle}>
				<svg
					width="22"
					height="22"
					viewBox="0 0 22 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M11 0C11.8284 0 12.5 0.671573 12.5 1.5V9.5L20.5 9.5C21.3284 9.5 22 10.1716 22 11C22 11.8284 21.3284 12.5 20.5 12.5L12.5 12.5V20.5C12.5 21.3284 11.8284 22 11 22C10.1716 22 9.5 21.3284 9.5 20.5L9.5 12.5L1.5 12.5C0.671573 12.5 -1.19209e-07 11.8284 0 11C1.19209e-07 10.1716 0.671573 9.5 1.5 9.5L9.5 9.5V1.5C9.5 0.671573 10.1716 0 11 0Z"
						fill="white"
					/>
				</svg>
			</ButtonContainer>
		</>
	)
}
