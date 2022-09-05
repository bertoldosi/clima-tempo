export const mockCity = {
  city: {
    nome: "Cascavel",
    uf: {
      uf: "Paraná",
      nome: "Paraná",
    },
  },
};

export const mockGetWeatherTomorrow = {
  data: {
    dt: 1656514800,
    sunrise: 1656497950,
    sunset: 1656536109,
    moonrise: 1656499800,
    moonset: 1656537660,
    moon_phase: 0.02,
    temp: {
      day: 289.31,
      min: 282.34,
      max: 291.13,
      night: 282.34,
      eve: 285.07,
      morn: 285.16,
    },
    feels_like: {
      day: 288.57,
      night: 281.96,
      eve: 284.43,
      morn: 284.9,
    },
    pressure: 1019,
    humidity: 61,
    dew_point: 282.16,
    wind_speed: 3.84,
    wind_deg: 202,
    wind_gust: 8.1,
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "nuvens dispersas",
        icon: "03d",
      },
    ],
    clouds: 30,
    pop: 0.03,
    uvi: 4.79,
  },
};

export const mockGetWeatherCity = {
  data: {
    nome: "Cascavel",
    latitude: -24.9554996,
    longitude: -53.4560544,
    uf: {
      uf: "Paraná",
      nome: "Paraná",
    },
  },
  status: 200,
  statusText: "OK",
  headers: {
    "content-length": "105",
    "content-type": "application/json; charset=utf-8",
    date: "Thu, 18 Aug 2022 16:36:20 GMT",
    etag: 'W/"69-Kw+JoZVULPeEkN7AFfl07vQJZ7M"',
    "x-powered-by": "Express",
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: null,
    },
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    baseURL: "http://localhost:3001",
    params: {
      lat: -24.9570178,
      lon: -53.4615512,
    },
    method: "get",
    url: "/weather/city",
  },
  request: {},
};

export const mockPosition = {
  coords: {
    latitude: "-24.9570178",
    longitude: "-53.4615512",
  },
};
