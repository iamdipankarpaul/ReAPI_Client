import React from "react";

import { useNavigate, useRouteError } from "react-router-dom";

import { Button, Center, Flex, Text, Title } from "@mantine/core";
import { IconArrowBackUp } from "@tabler/icons-react";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <>
      <Center maw={"100vw"} h={"80vh"}>
        <Flex direction={"column"} gap={"sm"} align={"center"}>
          <Title>Uh oh! We've got a problem.</Title>
          <Text>{error.message || error.statusText}</Text>
          <Text>
            Please try again later.
          </Text>
          <Button
            onClick={() => navigate("/")}
            rightSection={<IconArrowBackUp size={24} />}
          >
            Go Home
          </Button>
        </Flex>
      </Center>
    </>
  );
}

export default ErrorPage;
