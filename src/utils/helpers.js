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

export function toKeyValuePairs(obj) {
  if (obj === null || obj === undefined) {
    return [{ key: "", value: "" }];
  }

  const keys = Object.keys(obj);
  if (keys.length === 0) {
    return [{ key: "", value: "" }];
  }

  return Object.keys(obj).map((key) => ({ key, value: obj[key] }));
}

export function validJsonBody(data) {
  // const DataLen = Object.entries(data).length > 0;
  if (data === null || data === undefined) {
    return "{\n\t\n}";
  }

  const keys = Object.keys(data);
  if (keys.length === 0) {
    return "{\n\t\n}";
  }

  return JSON.stringify(data, null, 2);
}
