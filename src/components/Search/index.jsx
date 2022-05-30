import React from "react";

import { Container, Details } from "./styles";

import { FiSearch } from "react-icons/fi";
import { formatStringAddressWriting, filter } from "../../helpers";
import { UseAppContext } from "../../hooks/AppContextProvider";

const Search = () => {
  const { city, setCity } = UseAppContext();

  const [listSearch, setListSearch] = React.useState([]);
  const [inputValue, setInputValue] = React.useState(
    formatStringAddressWriting(city)
  );

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
          {listSearch.map((item, i) => {
            const displayNameCity = formatStringAddressWriting(item);

            return (
              <li
                key={i}
                onClick={() => {
                  setCity(item);
                  setListSearch([]);
                  setInputValue(displayNameCity);
                }}
              >
                {displayNameCity}
              </li>
            );
          })}
        </ul>
      </Details>
      <FiSearch />
    </Container>
  );
};

export default Search;
