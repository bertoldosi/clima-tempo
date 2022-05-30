import React from "react";
import { FiSearch } from "react-icons/fi";
import { filter } from "../../helpers/filter";
import { UseAppContext } from "../../hooks/AppContextProvider";

import { Container, Details } from "./styles";

const Search = () => {
  const { city, setCity } = UseAppContext();

  const [inputValue, setInputValue] = React.useState(() => {
    const valueFormattedSearch = `${city?.nome} - ${city?.uf.nome}`;
    const valueSearch = city?.nome ? valueFormattedSearch : "";

    return valueSearch;
  });

  const [listSearch, setListSearch] = React.useState([]);

  React.useEffect(() => {
    const filterSearch = filter(inputValue);
    setListSearch(filterSearch);
  }, [inputValue]);

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
