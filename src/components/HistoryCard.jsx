import React from "react";

import {
  ActionIcon,
  Center,
  Card,
  Drawer,
  Flex,
  Text,
  Title,
  Tooltip,
  Box,
} from "@mantine/core";
import { modals } from "@mantine/modals";

import { IconTrash, IconRepeat } from "@tabler/icons-react";

import useStore from "../store";

function HistoryCard({ handleRepeatRequest, openDeleteModal }) {
  const { history } = useStore();

  return (
    <Box>
      {history?.toReversed().map((item) => (
        <Card
          key={item.requestId}
          shadow="sm"
          mb={"sm"}
          padding="sm"
          radius="md"
          withBorder
        >
          <Flex direction={"row"} align={"center"} justify={"space-between"}>
            <Title order={6}>{item.method}</Title>
            <Flex gap={"sm"}>
              <Tooltip label="Remove request" position="top-end">
                <ActionIcon
                  size={28}
                  variant="default"
                  aria-label="Delete from history"
                  onClick={() => openDeleteModal(item.requestId)}
                >
                  <IconTrash size={"14px"} />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Repeat request" position="top-end">
                <ActionIcon
                  size={28}
                  variant="default"
                  aria-label="Repeat request"
                  onClick={() => handleRepeatRequest(item)}
                >
                  <IconRepeat size={"14px"} />
                </ActionIcon>
              </Tooltip>
            </Flex>
          </Flex>
          <Text
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              cursor: "default",
            }}
            title={item.url}
          >
            {item.url}
          </Text>
          <Text size="sm" c="dimmed">
            {item.timestamp}
          </Text>
        </Card>
      ))}
    </Box>
  );
}

export default HistoryCard;
