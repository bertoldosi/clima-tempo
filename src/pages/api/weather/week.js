import { serviceData } from "../../../lib/axios-instances-external";

export default async function (req, res) {
  const { lat, lon } = req.query;

  try {
    const response = await serviceData.get("/onecall", {
      params: {
        lat,
        lon,
        lang: "pt_br",
      },
    });

    res.status(200).send(response.data.daily);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
}
