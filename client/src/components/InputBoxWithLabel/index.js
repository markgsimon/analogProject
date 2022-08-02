import React from 'react'

import {
    InputBox,
    InputField,
    InputLabel
} from "./styles"

const InputBoxWithLabel = (props) => {

  console.log(props.inputLabel)
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