import React from 'react'
import {Title, Description, Wrapper} from './Blockquote.style'

export default function Blockquote(props) {
  return (
    <Wrapper>
        <Title TitleColor = {props.TitleColor}>{props.title}</Title>
        <Description DescriptionColor = {props.DescriptionColor}>{props.description}</Description>
    </Wrapper>
  )
}
