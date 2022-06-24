import Image from 'next/image';
import router from 'next/router';
import React from 'react';
import { useBuscar } from '../../providers/buscarContext';
import { LabelElement } from './styles';

interface PropsInputComponents {
  typeInput: 'search';

  widthInput: string;
  heightInput: string;
  placeholder: string;
  widthIcon: string;
}
function SearchComponent({
  typeInput,
  widthInput,
  heightInput,
  placeholder,
  widthIcon
}: PropsInputComponents) {
  const { setInputEncontreArtigo, inputEncontreArtigo } = useBuscar();

  typeInput.toLocaleUpperCase();

  function valueInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputEncontreArtigo(e.target.value);
  }

  function sendRouterBlog() {
    router.push(`/${inputEncontreArtigo}`);
  }

  function handleSearch(e: React.KeyboardEvent<HTMLSpanElement>) {
    if (e.key == "Enter") {
      router.push(`/pesquisa?st=${inputEncontreArtigo}`);
    }
  }

  if (typeInput == 'search') {
    return (
      <LabelElement widthInput={widthInput} heightInput={heightInput} widthIcon={widthIcon} onKeyPress={(e) => handleSearch(e)}>
        <input
          type="search"
          placeholder={placeholder}
          onChange={(e) => valueInput(e)}
        />
        <span onClick={() => sendRouterBlog()} >
          <Image
            width={20}
            height={20}
            alt="icone de lupa"
            src="/images/icons/search.svg"
          />
        </span>
      </LabelElement>
    );
  } else {
    return <></>;
  }
}

export default SearchComponent;
