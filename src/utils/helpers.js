import bytes from "bytes";

export function toObject(array) {
  return array.reduce((result, { key, value }) => {
    if (key !== "") result[key] = value;
    return result;
  }, {});
}

export function getResponseDetails(response) {
  const size = bytes(
    (response.data ? JSON.stringify(response.data).length : 0) +
      (response.headers ? JSON.stringify(response.headers).length : 0)
  );

  const status = response?.status || 0;
  const time = Math.round(response?.responseTime);
  // const time = response?.customData?.time;

  return { size, status, time };
}
