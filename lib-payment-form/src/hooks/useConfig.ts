import { useState } from 'react'

import { cc_format, validateCreditCardNumber } from '../utils'

const useConfig = () => {
	const [activeCard, setActiveCard] = useState(false)
	const [activeButton, setActiveButton] = useState(true),
		[validCardNumber, setValidCardNumber] = useState<any>(undefined),
		[validExpiryDate, setValidExpiryDate] = useState<any>(undefined),
		[validName, setValidName] = useState<any>(undefined),
		[validCcv, setValidCcv] = useState<any>(undefined),
		[kindOfCard, setKindOfCard] = useState<any>(undefined)

	const [cardNumber, setCardNumber] = useState(''),
		[name, setName] = useState(''),
		[ccv, setCcv] = useState(''),
		[expiryDate, setExpiryDate] = useState(''),
		dataInfo = {
			cardNumber,
			name,
			ccv,
			expiryDate,
		}

	const handleChangeCardNumber = (e: React.FormEvent<HTMLInputElement>) => {
			const value = e.currentTarget.value
			const regexNumbers = /\d{1,4}\s?/
			const regexSpace = /^(\s|\d\s|\d\d\s|\d\d\d\s)/

			if (!regexSpace.test(value)) {
				if (value === '' || regexNumbers.test(value)) {
					setCardNumber(cc_format(value))
					console.log(cardNumber)
					const { card } = validateCreditCardNumber(cardNumber)
					if (card) {
						setKindOfCard(card)
					}
					console.log(kindOfCard)
				}
			}
			if (!value) {
				setKindOfCard(undefined)
				setValidCardNumber(undefined)
			}
			value.length === 19 && setValidCardNumber(true)
		},
		handleBlurCardNumber = () => {
			const regexCard = /(\d{4} *\d{4} *\d{4} *\d{4})/
			const isValid = regexCard.test(cardNumber)
			cardNumber.length > 0
				? setValidCardNumber(isValid)
				: setValidCardNumber(undefined)
		},
		handleChangeName = (e: React.FormEvent<HTMLInputElement>) => {
			const value = e.currentTarget.value
			const regexCharacters = /^[a-zñ]+\s?[a-zñ]?/i
			const regexSpace = /^ /
			if (!regexSpace.test(value)) {
				if (value === '' || regexCharacters.test(value)) {
					setName(value)
				}
			}
			!value && setValidName(undefined)
			if (/^[a-zñ]+\s[a-zñ]+$/i.test(value)) {
				setValidName(true)
			}
		},
		handleBlurName = (e: React.FormEvent<HTMLInputElement>) => {
			const value = e.currentTarget.value
			const regexName = /^[a-zñ]+\s[a-zñ]+$/i
			value.length > 0
				? setValidName(regexName.test(value))
				: setValidName(undefined)
		},
		handleChangeCcv = (e: React.FormEvent<HTMLInputElement>) => {
			const value = e.currentTarget.value
			const regexNumbers = /^[0-9]+$/
			if (value === '' || regexNumbers.test(value)) {
				value.length < 4 && setCcv(value)
			}
			!value && setValidCcv(undefined)
			value.length === 3 && setValidCcv(true)
		},
		handleBlurCcv = (e: React.FormEvent<HTMLInputElement>) => {
			const value = e.currentTarget.value
			ccv.length === 3 ? setValidCcv(true) : setValidCcv(false)
			!value && setValidCcv(undefined)
		},
		handleChangeExpiryDate = (e: React.FormEvent<HTMLInputElement>) => {
			let value: string | any = e.currentTarget.value
			if (!/^\d{0,2}\/?\d{0,2}$/.test(value)) {
				return
			}
			if (/^\d{3,}$/.test(value)) {
				value = value.match(new RegExp('.{1,2}', 'g')).join('/')
			}
			setExpiryDate(value)
			!value && setValidExpiryDate(undefined)
			value.length === 5 && setValidExpiryDate(true)
		},
		handleBlurExpiryDate = (e: React.FormEvent<HTMLInputElement>) => {
			const value = e.currentTarget.value
			const regexDate = /^(0[1-9]|1[0-2])\/\d{2}$/
			value.length > 0
				? setValidExpiryDate(regexDate.test(value))
				: setValidExpiryDate(undefined)
		},
		cardConfig = {
			activeCard,
			activeButton,
			setActiveCard,
			setActiveButton,
			kindOfCard,
			dataInfo,
		},
		formConfig = {
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
		}

	return {
		cardConfig,
		formConfig,
	}
}

export default useConfig
