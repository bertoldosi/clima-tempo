import apiGateway from "../lib/axios-instance-local";

export const getAllArtist = (name) => {
  const params = { artista: name };

  return apiGateway.get("/weather/one-day", { params });
};
