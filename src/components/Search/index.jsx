import React from "react";
import { FiSearch } from "react-icons/fi";

import { Container } from "./styles";

const Search = () => {
  return (
    <Container>
      <input placeholder="Veja o tempo da sua cidade" />
      <FiSearch />
    </Container>
  );
};

export default Search;
