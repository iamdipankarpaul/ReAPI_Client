import React from "react";

import {
  ActionIcon,
  Flex,
  useComputedColorScheme,
  useMantineColorScheme,
  Tooltip,
  Button,
  em,
  Text,
  Group,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import { IconBulb, IconBulbOff, IconHistory } from "@tabler/icons-react";
import HistoryDrawer from "../HistoryDrawer";
import { Code } from "@phosphor-icons/react";

function Navbar() {
  const { setColorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  return (
    <>
      <Flex align="center" h="8.5vh" p="10px" justify="space-between" >
        <Group gap="xs" align="center">
          <Code size={32} weight="fill" color="#2782d5" />
          <Text fz={{base: "h4", sm: "h3"}} fw="700">
            ReAPI Client
          </Text>
        </Group>
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
              radius="lg"
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
              radius={"md"}
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
