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
import fetchFromAPI from "../utils/fetchFromAPI";

function HistoryDrawer({ opened, close }) {
  const {
    history,
    deleteFromHistory,
    repeatRequestFromHistory,
    setResponse,
    setLoading,
  } = useStore();

  const handleRepeatRequest = async (request) => {
    setLoading(true);
    let time = new Date().getTime();
    repeatRequestFromHistory(request);

    try {
      const res = await fetchFromAPI(request);
      setResponse(res);
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
      close();
    }
  };

  const openDeleteModal = (requestId) =>
    modals.openConfirmModal({
      title: "Delete this request?",
      centered: true,
      size: "sm",
      radius: "md",
      children: (
        <Text size="sm">Are you sure you want to delete this request?</Text>
      ),
      labels: { confirm: "Delete", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => deleteFromHistory(requestId),
    });

  const content = history?.toReversed().map((item) => (
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
      <Text style={{ overflow: "hidden" }}>{item.url}</Text>
      <Text size="sm" c="dimmed">
        {item.timestamp}
      </Text>
    </Card>
  ));

  return (
    <>
      <Drawer opened={opened} onClose={close} title="History">
        {history?.length > 0 ? (
          <>{content}</>
        ) : (
          <>
            <Center>
              <Text>There is no history yet!! Make a request.</Text>
            </Center>
          </>
        )}
      </Drawer>
    </>
  );
}

export default HistoryDrawer;
