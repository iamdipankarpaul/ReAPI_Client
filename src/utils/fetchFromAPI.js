import axios from "axios";
import { generateAxiosCode, generateFetchCode } from "./generateCode";

export default async function fetchFromAPI(requestObj) {
  const startTime = performance.now();
  let result;
  try {
    result = await axios(requestObj);
    const endTime = performance.now();
    result.responseTime = endTime - startTime;
    result.axiosCodeSnippet = generateAxiosCode(requestObj);
    result.fetchCodeSnippet = generateFetchCode(requestObj);
    // console.log(result.axiosCodeSnippet);
    // console.log(result.fetchCodeSnippet);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  return result;
}
