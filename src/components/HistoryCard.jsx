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
} from "@mantine/core";
import { modals } from "@mantine/modals";

import { IconTrash, IconRepeat } from "@tabler/icons-react";

import useStore from "../store";

function HistoryCard({ handleRepeatRequest }) {
  const { history, deleteFromHistory } = useStore();

  return (
    <div>
      <div>HistoryCard</div>
    </div>
  );
}

export default HistoryCard;
