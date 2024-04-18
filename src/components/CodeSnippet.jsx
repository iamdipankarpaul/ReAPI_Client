import React from "react";

import { Box, Tabs, Title } from "@mantine/core";
import { CodeHighlightTabs, CodeHighlight } from "@mantine/code-highlight";

import useStore from "../store";

function CodeSnippet() {
  const { response } = useStore();
  return (
    <Box>
      <Title order={3} fw={700} my={20}>
        Code Snippet
      </Title>
      <Box my={24} mx={"auto"}>
        <Tabs defaultValue={"axios"} variant="outline" radius="md">
          <Tabs.List>
            <Tabs.Tab value="axios">Axios Code</Tabs.Tab>
            <Tabs.Tab value="fetch">Fetch Code</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="axios">
            <CodeHighlight code={response?.axiosCode} language="js" />
          </Tabs.Panel>
          <Tabs.Panel value="fetch">
            <CodeHighlight code={response?.fetchCode} language="js" />
          </Tabs.Panel>
        </Tabs>
      </Box>
    </Box>
  );
}

export default CodeSnippet;

{/* <CodeHighlightTabs
          withExpandButton
          defaultExpanded={false}
          expandCodeLabel="See full code"
          collapseCodeLabel="See less"
          code={[
            {
              fileName: "Axios Code",
              code: response?.axiosCode,
              language: "js",
            },
            {
              fileName: "Fetch Code",
              code: response?.fetchCode,
              language: "js",
            },
          ]}
        /> */}
