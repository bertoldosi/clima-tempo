import React from "react";

const usePosition = () => {
  const currentPosition = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          resolve(pos);
        },
        (err) => {
          reject(err);
        },
        options
      );
    });
  };

  return { currentPosition };
};

export default usePosition;
