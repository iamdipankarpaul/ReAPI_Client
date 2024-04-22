import React from "react";

import { Box, Tabs, Title } from "@mantine/core";
import { CodeHighlight, CodeHighlightTabs } from "@mantine/code-highlight";

import useStore from "../store";

function CodeSnippet() {
  const { response } = useStore();
  return (
    <>
      {response?.fetchCode && response?.axiosCode && (
        <Box>
          <Title order={3} fw={700} my={20}>
            Code Snippet
          </Title>
          <Box my={24} mx={"auto"}>
            <Tabs defaultValue="fetch" variant="outline" radius="md">
              <Tabs.List>
                <Tabs.Tab value="fetch">Fetch Code</Tabs.Tab>
                <Tabs.Tab value="axios">Axios Code</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="fetch">
                <CodeHighlight code={response?.fetchCode} language="js" />
              </Tabs.Panel>
              <Tabs.Panel value="axios">
                <CodeHighlight code={response?.axiosCode} language="js" />
              </Tabs.Panel>
            </Tabs>
            {/* <CodeHighlightTabs
              code={[
                {
                  fileName: "Fetch code",
                  code: response.fetchCode,
                  language: "js",
                },
                {
                  fileName: "Axios code",
                  code: response.axiosCode,
                  language: "js",
                },
              ]}
            /> */}
          </Box>
        </Box>
      )}
    </>
  );
}

export default CodeSnippet;
