import React from 'react'

import {
	Form,
	FormGroup,
	FormGroupFlex,
	SendButton,
	InputNumber,
	InputName,
	InputDate,
	InputCcv,
	Error,
	SendButtonDisable,
} from './styles'

export default ({ formConfig }: any) => {
	const {
		setActiveCard,
		activeButton,
		validCardNumber,
		validExpiryDate,
		validName,
		validCcv,
		handleChangeCardNumber,
		handleBlurCardNumber,
		handleChangeName,
		handleBlurName,
		handleChangeCcv,
		handleBlurCcv,
		handleChangeExpiryDate,
		handleBlurExpiryDate,
		dataInfo,
	} = formConfig
	const cardChangeToFalse = () => setActiveCard(false),
		cardChangeToTrue = () => setActiveCard(true)

	return (
		<Form activeForm={activeButton}>
			<FormGroup valid={validCardNumber}>
				<label htmlFor="number">Card number</label>
				<InputNumber
					maxLength={19}
					minLength={19}
					name="number"
					autoComplete="off"
					required
					value={dataInfo.cardNumber}
					onBlur={handleBlurCardNumber}
					onChange={handleChangeCardNumber}
					onFocus={cardChangeToFalse}
				/>
				{validCardNumber === false && (
					<Error>Please provide a valid card number</Error>
				)}
			</FormGroup>

			<FormGroup valid={validName}>
				<label htmlFor="name">Name on card</label>
				<InputName
					name="name"
					required
					value={dataInfo.name}
					onBlur={handleBlurName}
					onChange={handleChangeName}
					onFocus={cardChangeToFalse}
				/>
				{validName === false && <Error>Please provide a valid name</Error>}
			</FormGroup>

			<FormGroupFlex>
				<FormGroup valid={validExpiryDate}>
					<label htmlFor="expiry">Expiry date</label>
					<InputDate
						name="expiry"
						placeholder="MM/YY"
						required
						value={dataInfo.expiryDate}
						onBlur={handleBlurExpiryDate}
						onChange={handleChangeExpiryDate}
						onFocus={cardChangeToFalse}
					/>
					{validExpiryDate === false && (
						<Error>Please provide a date, month and year</Error>
					)}
				</FormGroup>

				<FormGroup valid={validCcv}>
					<label htmlFor="ccv">CCV</label>
					<InputCcv
						name="ccv"
						value={dataInfo.ccv}
						required
						onBlur={handleBlurCcv}
						onChange={handleChangeCcv}
						onFocus={cardChangeToTrue}
					/>
					{validCcv === false && <Error>Please provide a right ccv</Error>}
				</FormGroup>
			</FormGroupFlex>
			{validCardNumber && validName && validExpiryDate && validCcv ? (
				<SendButton>Send</SendButton>
			) : (
				<SendButtonDisable>Send</SendButtonDisable>
			)}
		</Form>
	)
}
