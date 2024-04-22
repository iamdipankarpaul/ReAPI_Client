import axios from "axios";
import { generateAxiosCode, generateFetchCode } from "./generateCode";

export default async function fetchFromAPI(requestObj) {
  console.log("request: ", requestObj);
  const startTime = performance.now();
  let result;
  try {
    result = await axios(requestObj);
    const endTime = performance.now();
    result.responseTime = endTime - startTime;
    console.log("result: ", result);
    result.axiosCode = generateAxiosCode(requestObj);
    result.fetchCode = generateFetchCode(requestObj);
  } catch (error) {
    console.log(error);
    throw error;
  }
  return result;
}
