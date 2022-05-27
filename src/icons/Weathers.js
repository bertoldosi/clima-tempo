import React from "react";

export const Weathers = (icon, size) => {
  return <img src={`http://openweathermap.org/img/wn/${icon}@${size}x.png`} />;
};
