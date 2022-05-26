import ToDay from "../containers/Today";
import Tomorrow from "../containers/Tomorrow";
import TenDay from "../containers/TenDay";

import { UseAppContext } from "../hooks/AppContextProvider";
import { GetWeatherToDay } from "../api/weather";
import { bolerplate } from "../containers/Today/bolerplate";

export default function Home({ weatherToDay }) {
  const { wrapperType } = UseAppContext();

  const ComponentMap = {
    TO_DAY: <ToDay weather={weatherToDay} />,
    TOMORROW: <Tomorrow />,
    TEN_DAY: <TenDay />,
  };

  const getTemplate = (type) => ComponentMap[type];

  const Template = getTemplate(wrapperType);

  return Template;
}

export async function getServerSideProps(context) {
  console.log(context.window);

  const { data } = await GetWeatherToDay("-10.0007936", "-67.7937152");

  return {
    props: {
      weatherToDay: bolerplate(data),
    },
  };
}
