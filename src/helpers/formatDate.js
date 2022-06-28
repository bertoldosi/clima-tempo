import { format } from "date-fns";
import pt from "date-fns/locale/pt-BR";

export const formatDate = (timestemp) => {
  const correctingTimestemp = String(timestemp) + "000";
  const dateLocaleString = new Date(parseInt(correctingTimestemp));

  const date = format(dateLocaleString, "EEE', 'dd' de 'LLL' de   'yyyy", {
    locale: pt,
  });

  return date;
};
