import Image from 'next/image';
import React from 'react';
import { useBuscar } from '../../providers/buscarContext';
import { LabelElement } from './styles';

interface PropsInputComponents {
  typeInput: 'search';

  widthInput: string;
  heightInput: string;
  placeholder: string;
}
function SearchComponent({
  typeInput,
  widthInput,
  heightInput,
  placeholder,
}: PropsInputComponents) {
  const { setInputEncontreArtigo } = useBuscar();

  typeInput.toLocaleUpperCase();

  function valueInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputEncontreArtigo(e.target.value);
  }

  if (typeInput == 'search') {
    return (
      <LabelElement widthInput={widthInput} heightInput={heightInput}>
        <span>
          <Image
            width={20}
            height={20}
            alt="icone de lupa"
            src="/images/icons/search.svg"
          />
        </span>
        <input
          type="search"
          placeholder={placeholder}
          onChange={(e) => valueInput(e)}
        />
      </LabelElement>
    );
  } else {
    return <></>;
  }
}

export default SearchComponent;
