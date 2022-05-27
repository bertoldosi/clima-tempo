import React from "react";
import { FiSearch } from "react-icons/fi";
import { filter } from "../../helpers/filter";
import { UseAppContext } from "../../hooks/AppContextProvider";

import { Container, Details } from "./styles";

const Search = () => {
  const { city } = UseAppContext;

  const [inputValue, setInputValue] = React.useState(
    `${city?.nome - city?.uf.nome}`
  );
  const [listSearch, setListSearch] = React.useState([]);

  React.useEffect(() => {
    const filterSearch = filter(inputValue);

    setListSearch(filterSearch);
  }, [inputValue]);

  return (
    <Container>
      <Details>
        <input
          placeholder="Veja o tempo da sua cidade"
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
                console.log(item);
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
