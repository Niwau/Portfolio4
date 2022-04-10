import React from 'react'
import {Image, Wrapper} from './Tech.style'

export default function Tech(props) {
  return (
    <Wrapper>
        <Image src={props.src} alt={props.alt}/>
    </Wrapper>
  )
}
