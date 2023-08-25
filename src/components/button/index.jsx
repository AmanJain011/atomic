import React from 'react'
import Wrapper from './style'

const Button = ({type, value, method, disabled}) => {
  return (
      <Wrapper type={type} value={value} onClick={method} disabled={disabled} />
  )
}

export default Button
