import React from "react";

import { Box, Tabs, Title } from "@mantine/core";
import { CodeHighlightTabs } from "@mantine/code-highlight";

import useStore from "../store";

function CodeSnippet() {
  const { response } = useStore();
  return (
    <Box>
      <Title order={3} fw={700} my={20}>
        Code Snippet
      </Title>
      <Box my={24} mx={"auto"}>
        <CodeHighlightTabs
          withExpandButton
          defaultExpanded={false}
          expandCodeLabel="See full code"
          collapseCodeLabel="See less"
          code={[
            {
              fileName: "Axios Code",
              code: response.axiosCodeSnippet,
              language: "js",
            },
            {
              fileName: "Fetch Code",
              code: response.fetchCodeSnippet,
              language: "js",
            },
          ]}
        />
      </Box>
    </Box>
  );
}

export default CodeSnippet;
