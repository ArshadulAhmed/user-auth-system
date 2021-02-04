export const tokenConfig = () => {
  const userToken = null;
  if (userToken) {
    const headers = {
      "Content-Type": "application/json",
      "x-access-token": `${JSON.parse(userToken)}`,
    };
    return headers;
  } else {
    const headers = {
      "Content-Type": "application/json",
    };
    return headers;
  }
};
