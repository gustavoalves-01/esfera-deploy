import React from 'react'
import { LabelElement } from "./styled";

interface PropsInputComponents {
  typeInput: "email";

  widthInput: string;
  heightInput: string;
  placeholder: string;
}
function InputComponent({ typeInput, widthInput, heightInput, placeholder }: PropsInputComponents) {
  typeInput.toLocaleUpperCase()

  if (typeInput == "email") {
    return (
      <LabelElement widthInput={widthInput} heightInput={heightInput}>
        <input type="text" placeholder={placeholder} />
      </LabelElement>
    )
  } else {
    return <></>
  }
}

export default InputComponent

