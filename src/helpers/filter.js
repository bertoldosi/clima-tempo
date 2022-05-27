import { normalizeString } from "./normalizeString";
import listCity from "../../cidades.json";

export const filter = (valueSearch) => {
  const citys = listCity.filter((city) => {
    return normalizeString(city.nome) === normalizeString(valueSearch);
  });

  return citys;
};
