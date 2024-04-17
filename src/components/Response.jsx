import React from "react";

import {
  Box,
  Group,
  JsonInput,
  Tabs,
  Text,
  Title,
  Table,
  Tooltip,
  ActionIcon,
} from "@mantine/core";
import { useFullscreen, useElementSize } from "@mantine/hooks";

import useStore from "../store";
import statusColors from "../utils/httpStatusColors";
import { getResponseDetails } from "../utils/helpers";
import { IconArrowsMaximize, IconArrowsMinimize } from "@tabler/icons-react";

function Response() {
  const { response } = useStore();

  const { ref, toggle, fullscreen } = useFullscreen();
  const { ref: responseRef, width, height: responseHeight } = useElementSize();

  const { size, status, time } = response
    ? getResponseDetails(response)
    : {
        size: "",
        status: "",
        time: "",
      };

  return (
    <>
      <Box my={10} mx={"auto"}>
        <Group align="center" justify="space-between" my={5} px={8}>
          <Title order={3} fw={700}>
            Response
          </Title>
          <Group>
            <Text c={statusColors[status]}>Status: {status}</Text>
            <Text>Time: {time}ms</Text>
            <Text>Size: {size}</Text>
          </Group>
        </Group>

        <Tabs
          ref={ref}
          defaultValue="Response"
          variant="outline"
          mah={"400px"}
          radius={"md"}
          my={10}
          style={{
            overflowY: "auto",
            position: "relative",
          }}
        >
          <Tabs.List
            style={{
              position: "sticky",
              top: 0,
              zIndex: 3,
              backgroundColor: "var(--mantine-color-body)",
            }}
          >
            <Tabs.Tab value="Response">Response</Tabs.Tab>
            <Tabs.Tab value="Headers">Headers</Tabs.Tab>
          </Tabs.List>

          {responseHeight >= 400 && (
            <>
              <Tooltip label="Toggle fullscreen" position="top-end">
                <ActionIcon
                  variant="default"
                  onClick={toggle}
                  aria-label="Toggle fullscreen button"
                  style={{
                    position: "absolute",
                    zIndex: 3,
                    top: "50px",
                    right: "15px",
                  }}
                  size={30}
                >
                  {fullscreen ? (
                    <IconArrowsMinimize size="16px" />
                  ) : (
                    <IconArrowsMaximize size="16px" />
                  )}
                </ActionIcon>
              </Tooltip>
            </>
          )}

          <Tabs.Panel value="Response" ref={responseRef}>
            <JsonInput
              aria-label="Response json body..."
              minRows={5}
              autosize
              readOnly
              value={JSON.stringify(response?.data, null, 2)}
            />
          </Tabs.Panel>
          <Tabs.Panel value="Headers">
            <Table highlightOnHover withTableBorder>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Key</Table.Th>
                  <Table.Th>Value</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {response?.headers &&
                  Object.keys(response.headers).map((key, index) => (
                    <Table.Tr key={index}>
                      <Table.Td>{key}</Table.Td>
                      <Table.Td>{response.headers[key]}</Table.Td>
                    </Table.Tr>
                  ))}
              </Table.Tbody>
            </Table>
          </Tabs.Panel>
        </Tabs>
      </Box>
    </>
  );
}

export default Response;
