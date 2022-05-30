import React from "react";
import { FiSearch } from "react-icons/fi";
import { filter } from "../../helpers/filter";
import { formatStringAddressWriting } from "../../helpers/formatStringAddressWriting";
import { UseAppContext } from "../../hooks/AppContextProvider";

import { Container, Details } from "./styles";

const Search = () => {
  const { city, setCity } = UseAppContext();

  const [inputValue, setInputValue] = React.useState(
    formatStringAddressWriting(city)
  );

  const [listSearch, setListSearch] = React.useState([]);

  React.useEffect(() => {
    const filterSearch = filter(inputValue);
    setListSearch(filterSearch);
  }, [inputValue]);

  React.useEffect(() => {
    setInputValue(formatStringAddressWriting(city));
  }, [city]);

  return (
    <Container>
      <Details>
        <input
          placeholder="Veja o clima da sua cidade preferida"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <ul>
          {listSearch.map((item, i) => (
            <li
              key={i}
              onClick={() => {
                setCity(item);
                setListSearch([]);
                setInputValue(`${item.nome} - ${item.uf.nome}`);
              }}
            >
              {item.nome} - {item.uf.nome}
            </li>
          ))}
        </ul>
      </Details>
      <FiSearch />
    </Container>
  );
};

export default Search;
