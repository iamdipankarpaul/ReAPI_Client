export function generateAxiosCode(req) {
  const codeSnippet = `
import axios from "axios";
let options = {
    url: "${req.url}",
    method: "${req.method}",
    headers: ${JSON.stringify(req.headers, null, 2)},
    params: ${JSON.stringify(req.params, null, 2)},
    body: ${JSON.stringify(req.data, null, 2)},
}
let response = await axios.request(options);
console.log(response.data);
`;

  return codeSnippet;
}

export function generateFetchCode(req) {
  const codeSnippet = `
let url: "${req.url}",
let options = {
    method: "${req.method}",
    headers: ${JSON.stringify(req.headers, null, 2)},
    params: ${JSON.stringify(req.params, null, 2)},
    body: ${JSON.stringify(req.data, null, 2)},
}

fetch(url, options)
.then((response) => {
  if (!response.ok) {
    throw new Error("HTTP error! Status: ", response.status);
  }
  return response.json();
})
.then((data) => {
  console.log(data);
 })
.catch((error) => {
  console.log("Fetch error: ", error);
});
`;

  return codeSnippet;
}
