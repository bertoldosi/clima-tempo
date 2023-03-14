import { serviceData } from "../../../lib/axios-instances-external";

export default async function handler(req, res) {
  const { lat, lon } = req.query;

  try {
    const response = await serviceData.get("/onecall", {
      params: {
        lat,
        lon,
        lang: "pt_br",
      },
    });

    const data = {
      daily: response.data.daily[0],
      current: response.data.current,
    };

    res.status(200).send(data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
}
