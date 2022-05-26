import React from "react";

import Wrapper from "../../components/Wrapper";
import Search from "../../components/Search";
import Clock from "../../components/Clock";
import HeaderToggle from "../../components/HeaderToggle";
import Temperature from "../../components/Temperature";

const Today = () => {
  // const [geolocation, setGeolocation] = React.useState("");

  // React.useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         setGeolocation({
  //           lat: position.coords.latitude,
  //           lon: position.coords.longitude,
  //         });
  //       });
  //     }
  //   }
  // }, []);

  return (
    <Wrapper>
      <Search />
      <HeaderToggle />
      <Temperature />
      <Clock />
    </Wrapper>
  );
};

export default Today;
