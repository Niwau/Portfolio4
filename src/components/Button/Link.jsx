import React from 'react'
import {Link} from './Link.style'

export default function Button(props) {
  return (
    <div>
        <Link href={props.link} >{props.text}</Link>
    </div>
  )
}
