import { normalizeString } from "./normalizeString";
import listCity from "../../cidades.json";

export const filter = (valueSearch) => {
  if (valueSearch.length > 2) {
    const citys = listCity.filter((city) => {
      return normalizeString(city.nome).includes(normalizeString(valueSearch));
    });
    return citys;
  } else {
    return [];
  }
};
