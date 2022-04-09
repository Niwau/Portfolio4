import React from 'react'
import {ButtonStyled} from './Button.style'

export default function Button(props) {
  return (
    <div>
        <ButtonStyled>{props.text}</ButtonStyled>
    </div>
  )
}
