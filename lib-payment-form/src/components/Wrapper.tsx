import React from 'react'
import { Wrapper } from './styles'

const WrapperForm: React.FC = ({ children }) => {
	return (
		<>
			<Wrapper className="wrapper">{children}</Wrapper>
		</>
	)
}

export default WrapperForm
