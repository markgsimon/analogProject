import React from 'react'

import {
    InputBox,
    InputField,
    InputLabel
} from "./styles"

const InputBoxWithLabel = (props) => {
  let validated = false;

  if (props.validated === undefined) validated = true;
  if (props.validated === true ||   props.validated === false) {
    validated = props.validated;
  } else {
    validated = validated  ||  false;
  }


  return (
    <InputBox>
        <InputLabel>{props.inputLabel}</InputLabel>
        <InputField value = {props.value}
                    onChange = {props.onChange}
                    validated = {props.validated}
                    onClick = {props.onClick}/>
    </InputBox>
  )

}

export default InputBoxWithLabel