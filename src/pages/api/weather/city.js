import { serviceGeo } from "../../../lib/axios-instances-external";

export default async function (req, res) {
  const { lat, lon } = req.query;

  try {
    const response = await serviceGeo.get("/reverse", {
      params: {
        lat,
        lon,
      },
    });

    const city = {
      nome: response.data[0].name,
      latitude: response.data[0].lat,
      longitude: response.data[0].lon,
      uf: {
        uf: response.data[0].state,
        nome: response.data[0].state,
      },
    };

    res.status(200).send(city);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
}
