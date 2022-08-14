export const errorResponse = (error) => {
  if (error.response) {
    const errorAPI = {
      code: error?.response?.data?.cod,
      message: error?.response?.data?.message,
    };

    return errorAPI;
  } else {
    const errorLocation = {
      code: error?.code,
      message: error?.message,
    };

    return errorLocation;
  }
};
