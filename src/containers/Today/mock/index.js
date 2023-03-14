export const mockCity = {
  city: {
    nome: "Cascavel",
    uf: {
      uf: "Paraná",
      nome: "Paraná",
    },
  },
};

export const mockGetWeatherToday = {
  data: {
    daily: {
      dt: 1656428400,
      sunrise: 1656411546,
      sunset: 1656449690,
      moonrise: 1656410280,
      moonset: 1656448200,
      moon_phase: 0,
      temp: {
        day: 292.53,
        min: 284.45,
        max: 293.39,
        night: 287.48,
        eve: 288.48,
        morn: 285.02,
      },
      feels_like: {
        day: 292.43,
        night: 287.45,
        eve: 288.47,
        morn: 284.61,
      },
      pressure: 1018,
      humidity: 73,
      dew_point: 287.99,
      wind_speed: 4.58,
      wind_deg: 4,
      wind_gust: 9.2,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "chuva leve",
          icon: "10d",
        },
      ],
      clouds: 9,
      pop: 0.2,
      rain: 0.11,
      uvi: 4.96,
    },
    current: {
      dt: 1656458599,
      sunrise: 1656411546,
      sunset: 1656449690,
      temp: 288.07,
      feels_like: 288.05,
      pressure: 1017,
      humidity: 93,
      dew_point: 286.95,
      uvi: 0,
      clouds: 4,
      visibility: 10000,
      wind_speed: 1.89,
      wind_deg: 10,
      wind_gust: 3.82,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "céu limpo",
          icon: "01n",
        },
      ],
    },
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
    baseURL: "http://localhost:3000",
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
