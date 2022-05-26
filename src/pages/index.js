import Today from "../containers/Today";
import Tomorrow from "../containers/Tomorrow";
import TenDay from "../containers/TenDay";

import { UseAppContext } from "../hooks/AppContextProvider";

export default function Home() {
  const { wrapperType } = UseAppContext();

  const ComponentMap = {
    TODAY: <Today />,
    TOMORROW: <Tomorrow />,
    TEN_DAY: <TenDay />,
  };

  const getTemplate = (type) => ComponentMap[type];

  const Template = getTemplate(wrapperType);

  return Template;
}
