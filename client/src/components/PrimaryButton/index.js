import React from 'react'

import {
  ButtonBox,
  ButtonText
} from "./styles"

const PrimaryButton = (props) => {
  return (
    <ButtonBox onClick = {props.onClick}>
      <ButtonText>{props.buttonText}</ButtonText>
    </ButtonBox>
  )
}

export default PrimaryButton