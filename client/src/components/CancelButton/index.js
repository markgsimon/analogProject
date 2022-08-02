import React from 'react'

import {
    CancelButtonBox,
    CancelButtonText
} from "./styles"
const CancelButton = (props) => {
  return (
    <CancelButtonBox onClick = {props.onClick}>
        <CancelButtonText>{props.buttonText}</CancelButtonText>
    </CancelButtonBox>
  )
}

export default CancelButton