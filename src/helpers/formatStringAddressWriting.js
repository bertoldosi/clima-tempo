export const formatStringAddressWriting = (city) => {
  const address = city?.nome ? `${city?.nome} - ${city?.uf.nome}` : "";

  return address;
};
