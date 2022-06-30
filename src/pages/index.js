import Today from "../containers/Today";
import Tomorrow from "../containers/Tomorrow";
import Week from "../containers/Week";

import "react-loading-skeleton/dist/skeleton.css";

import { UseAppContext } from "../hooks/AppContextProvider";

export default function Home() {
  const { wrapperType } = UseAppContext();

  const ComponentMap = {
    TODAY: <Today />,
    TOMORROW: <Tomorrow />,
    WEEK: <Week />,
  };

  const getTemplate = (type) => ComponentMap[type];

  const Template = getTemplate(wrapperType);

  return Template;
}
