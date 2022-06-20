import React from "react";

export const useValidationCurrentPosition = () => {
  const validationCurrentPosition = () => {
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

  return [validationCurrentPosition];
};
