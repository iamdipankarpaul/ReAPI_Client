import { Center, Drawer, Text, Button, Box, ScrollArea } from "@mantine/core";
import { modals } from "@mantine/modals";

import useStore from "../store";
import HistoryCard from "./HistoryCard";
import fetchFromAPI from "../utils/fetchFromAPI";
import { toKeyValuePairs, validJsonBody } from "../utils/helpers";

function HistoryDrawer({ opened, close }) {
  const {
    history,
    setLoading,
    setResponse,
    clearHistory,
    deleteFromHistory,
    repeatRequestFromHistory,
  } = useStore();

  const handleRepeatRequest = async (request) => {
    setLoading(true);
    let time = new Date().getTime();

    const updatedReq = {
      ...request,
      queryParams: toKeyValuePairs(request.params),
      requestHeaders: toKeyValuePairs(request.headers),
      jsonRequestBody: validJsonBody(request.data),
    };

    repeatRequestFromHistory(updatedReq);

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
      title: "Delete Request!!!",
      centered: true,
      size: "sm",
      radius: "md",
      children: (
        <Text size="md">Are you sure you want to delete this request?</Text>
      ),
      labels: { confirm: "Delete", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel Delete Request."),
      onConfirm: () => deleteFromHistory(requestId),
    });

  const clearHistoryModal = () =>
    modals.openConfirmModal({
      title: "Clear Request!!!",
      centered: true,
      size: "sm",
      radius: "md",
      children: (
        <Text size="md">
          Are you sure you want to clear your history? Your data will be
          permanently lost.
        </Text>
      ),
      labels: { confirm: "Clear", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel Clear History."),
      onConfirm: () => clearHistory(),
    });

  return (
    <>
      <Drawer opened={opened} onClose={close} title="History"
      scrollAreaComponent={ScrollArea.Autosize}>
        {history?.length > 0 ? (
          <>
            <HistoryCard
              openDeleteModal={openDeleteModal}
              handleRepeatRequest={handleRepeatRequest}
            />
            <Box
              py={16}
              style={{
                position: "sticky",
                bottom: 0,
                backgroundColor: "var(--mantine-color-body)",
              }}
            >
              <Button radius={"md"} fullWidth onClick={clearHistoryModal}>
                Clear History
              </Button>
            </Box>
          </>
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
