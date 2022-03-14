import React from 'react'
import { useBuscar } from '../../providers/buscarContext';
import { LabelElement } from "./styled";

interface PropsInputComponents {
  typeInput: "email";

  widthInput: string;
  heightInput: string;
  placeholder: string;
}
function InputComponent({ typeInput, widthInput, heightInput, placeholder }: PropsInputComponents) {
  const { setInputEmail } = useBuscar();

  typeInput.toLocaleUpperCase()

  function enviarDadosEmail(e: React.ChangeEvent<HTMLInputElement>){
      setInputEmail(e.target.value)
  }
  
  if (typeInput == "email") {
    return (
      <LabelElement widthInput={widthInput} heightInput={heightInput}>
        <input type="text" placeholder={placeholder} onChange={(e) => enviarDadosEmail(e)}/>
      </LabelElement>
    )
  } else {
    return <></>
  }
}

export default InputComponent

