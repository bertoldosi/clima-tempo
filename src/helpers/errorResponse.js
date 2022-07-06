export const errorResponse = (error) => {
  if (error.response) {
    const errorAPI = {
      code: error?.response?.data?.cod,
      message: error?.response?.data?.message,
    };
    console.log(errorAPI);

    return errorAPI;
  } else {
    const errorLocation = {
      code: error?.code,
      message: error?.message,
    };
    console.log(errorLocation);

    return errorLocation;
  }
};
