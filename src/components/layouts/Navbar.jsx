import React from "react";

import {
  ActionIcon,
  Flex,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
  Tooltip,
  Button,
  em,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import { IconBulb, IconBulbOff, IconHistory } from "@tabler/icons-react";
import HistoryDrawer from "../HistoryDrawer";

function Navbar() {
  const { setColorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  return (
    <>
      <Flex align={"center"} h={"8vh"} p={"10px"} justify={"space-between"}>
        <Title order={3} fw={700} c={"#1C7ED6"}>
          ReAPI Client
        </Title>
        <Flex align={"center"} gap={"10px"}>
          <Tooltip label="Toggle theme" position="bottom-end">
            <ActionIcon
              variant="outline"
              size={29}
              onClick={() =>
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light"
                )
              }
              radius={"lg"}
            >
              {computedColorScheme === "dark" ? (
                <IconBulb size={"22px"} />
              ) : (
                <IconBulbOff size={"22px"} />
              )}
            </ActionIcon>
          </Tooltip>
          {isMobile ? (
            <Tooltip label="History" position="bottom-end">
              <ActionIcon
                size={28}
                variant="outline"
                aria-label="History button"
                onClick={open}
              >
                <IconHistory size={22} />
              </ActionIcon>
            </Tooltip>
          ) : (
            <Button
              variant="outline"
              size="xs"
              onClick={open}
              rightSection={<IconHistory size={22} />}
            >
              History
            </Button>
          )}
        </Flex>
      </Flex>
      <HistoryDrawer opened={opened} close={close} />
    </>
  );
}

export default Navbar;
