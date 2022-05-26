const semana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const dateParseString = String(1653505440) + "000";

const dateLocaleString = new Date(parseInt(dateParseString)).toLocaleString();

const dateISO = new Date(dateLocaleString);

console.log(dateISO);
