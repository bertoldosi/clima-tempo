export const formatDate = (timestemp) => {
  const week = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const month = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Sem",
    "Out",
    "Nov",
    "Dez",
  ];

  const correctingTimestemp = String(timestemp) + "000";
  const dateLocaleString = new Date(
    parseInt(correctingTimestemp)
  ).toLocaleString();
  const dateISO = new Date(dateLocaleString);
  const date = dateISO;

  const dayWeek = week[date.getDay()];
  const dayMonth = String(date.getDate()).padStart(2, "0");
  const monthYear =
    month[String(date.getMonth()).padStart(2, "0").replace("0", "")];

  const dateFormat = `${dayWeek}, ${dayMonth} de ${monthYear}`;

  return dateFormat;
};
