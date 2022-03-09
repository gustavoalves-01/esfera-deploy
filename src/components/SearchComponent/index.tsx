import Image from 'next/image';
import React from 'react'
import { LabelElement } from "./styled";

interface PropsInputComponents {
  typeInput: "search";

  widthInput: string;
  heightInput: string;
  placeholder: string;
}
function SearchComponent({ typeInput, widthInput, heightInput, placeholder }: PropsInputComponents) {
  typeInput.toLocaleUpperCase()

  if (typeInput == "search") {
    return (
      <LabelElement widthInput={widthInput} heightInput={heightInput}>
        <span>
          <Image width={20} height={20} alt="icone de lupa" src="/images/icons/search.svg"/>
        </span>
        <input type="search" placeholder={placeholder} />
      </LabelElement>
    )
  } else {
    return <></>
  }
}


export default SearchComponent
