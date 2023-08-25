import React from 'react'
import ButtonWrapper from './style'

const Button = ({type, name, method, children}) => {
  return (
      <ButtonWrapper type={type} name={name} onClick={method}>
        {children}
      </ButtonWrapper>
  )
}

export default Button
