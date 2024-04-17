import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Center, Flex, Text, Title } from "@mantine/core";
import { IconArrowBackUp } from "@tabler/icons-react";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <Center maw={"100vw"} h={"80vh"}>
        <Flex direction={"column"} gap={"sm"} align={"center"}>
          <Title>404 - Page Not Found</Title>
          <Text>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </Text>
          <Text>
            Please check the URL for spelling errors, or go back to the
            homepage.
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

export default NotFoundPage;
