import axios from "axios";

export default async function fetchFromAPI(requestObj) {
  const startTime = performance.now();
  let result;
  try {
    result = await axios(requestObj);
    const endTime = performance.now();
    result.responseTime = endTime - startTime;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  return result;
}
