import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  method: "GET",
  url: "https://api.restful-api.dev/objects/1",
  queryParams: [{ key: "", value: "" }],
  requestHeaders: [{ key: "", value: "" }],
  jsonRequestBody: "{\n\t\n}",
  response: null,
  loading: false,
  history: [],
  setMethod: (method) => set({ method }),
  setUrl: (url) => set({ url }),
  setQueryParams: (params) => set({ queryParams: params }),
  setRequestHeaders: (headers) => set({ requestHeaders: headers }),
  setJsonRequestBody: (body) => set({ jsonRequestBody: body }),
  setResponse: (response) => set({ response }),
  resetResponse: () => set({ response: null }),
  setLoading: (status) => set({ loading: status }),
  saveToHistory: (request) =>
    set((state) => {
      const updatedHistory = [...state.history, request].slice(-20);
      return { history: updatedHistory };
    }),
  deleteFromHistory: (requestId) =>
    set((state) => ({
      history: state.history.filter((req) => req.requestId !== requestId),
    })),
  repeatRequestFromHistory: (request) =>
    set({
      method: request.method,
      url: request.url,
      queryParams: request.queryParams,
      requestHeaders: request.requestHeaders,
      jsonRequestBody: request.jsonRequestBody,
    }),
  initialLoad: () =>
    set({
      method: "GET",
      url: "https://api.restful-api.dev/objects/1",
      queryParams: [{ key: "", value: "" }],
      requestHeaders: [{ key: "", value: "" }],
      jsonRequestBody: "{\n\t\n}",
      response: null,
    }),
  clearHistory: () => set({ history: [] }),
});

const useStore = create(devtools(persist(store, { name: "reapi_history" })));

export default useStore;
