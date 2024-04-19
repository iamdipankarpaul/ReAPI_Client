import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  Box,
  Button,
  NativeSelect,
  TextInput,
  Tabs,
  JsonInput,
  Flex,
  Loader,
} from "@mantine/core";

import { IconSend } from "@tabler/icons-react";

import KeyValuePairs from "./KeyValuePairs";

import useStore from "../store";
import fetchFromAPI from "../utils/fetchFromAPI";
import { toObject } from "../utils/helpers";

function Form() {
  const {
    loading,
    method,
    url,
    queryParams,
    requestHeaders,
    jsonRequestBody,
    setMethod,
    setUrl,
    setQueryParams,
    setRequestHeaders,
    setJsonRequestBody,
    setResponse,
    setLoading,
    saveToHistory,
  } = useStore();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    let data;
    try {
      data = JSON.parse(jsonRequestBody.toString());
    } catch (e) {
      alert("Something is wrong with the JSON data.");
    }

    let time = new Date().getTime();

    const request = {
      url: url.trim(),
      method,
      params: toObject(queryParams),
      headers: toObject(requestHeaders),
      data,
      requestId: uuidv4(),
    };

    try {
      const response = await fetchFromAPI(request);
      setResponse(response);
      saveToHistory({
        ...request,
        timestamp: new Date().toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        }),
      });
    } catch (error) {
      time = new Date().getTime() - time;
      setResponse({
        status: 404,
        responseTime: time,
        data: error.response.data,
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box mx={"auto"} mb={10}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justify={{ sm: "center" }}
        gap={"10px"}
      >
        <NativeSelect
          data={[
            { label: "GET", value: "GET" },
            { label: "POST", value: "POST" },
            { label: "PUT", value: "PUT" },
            { label: "PATCH", value: "PATCH" },
            { label: "DELETE", value: "DELETE" },
          ]}
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          size="md"
          radius="md"
        />
        <TextInput
          placeholder="Base url"
          flex={2}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          size="md"
          radius="md"
        />
        <Button
          variant="filled"
          rightSection={
            loading ? (
              <Loader size="sm" color="rgba(255, 255, 255, 1)" />
            ) : (
              <IconSend size={16} />
            )
          }
          onClick={handleSubmit}
          size="md"
          radius="md"
        >
          Send
        </Button>
      </Flex>

      <Tabs defaultValue="Params" my={20} variant="outline" radius={"md"}>
        <Tabs.List>
          <Tabs.Tab value="Params">Params</Tabs.Tab>
          <Tabs.Tab value="Headers">Headers</Tabs.Tab>
          <Tabs.Tab value="Body">Body</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Params">
          <KeyValuePairs
            keyValuePairs={queryParams}
            setKeyValuePairs={setQueryParams}
          />
        </Tabs.Panel>

        <Tabs.Panel value="Headers">
          <KeyValuePairs
            keyValuePairs={requestHeaders}
            setKeyValuePairs={setRequestHeaders}
          />
        </Tabs.Panel>

        <Tabs.Panel value="Body">
          <JsonInput
            aria-label="Request json body..."
            placeholder="Request json body..."
            validationError="Invalid JSON"
            formatOnBlur
            autosize
            minRows={5}
            value={jsonRequestBody}
            onChange={setJsonRequestBody}
          />
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}

export default Form;
