import { Group, Flex, Text, Divider, Box, Anchor } from "@mantine/core";
import {
  GithubLogo,
  LinkedinLogo,
  DevToLogo,
  Code,
} from "@phosphor-icons/react";
import SocialIcon from "./SocialIcon";

function Footer() {
  return (
    <Box mt="auto">
      <Divider mb="sm" />
      <Flex direction="column" align="center" justify="center" gap="xs" my="sm">
        <Flex
          direction="column"
          gap="5px"
          justify="center"
          style={{ textWrap: "balance", textAlign: "center" }}
        >
          <Text fz={{ base: "h5", sm: "h4" }}>
            Made by Dipankar with ReactJs, Mantine and Zustand.
          </Text>
          <Text fz={{ base: "h6", sm: "h5" }}>
            My other projects are
            <Anchor
              href="https://retube-nine.vercel.app/"
              target="_blank"
              underline="hover"
              mx="3px"
              c="var(--text-color)"
              fz={{ base: "h6", sm: "h5" }}
            >
              ReTube,
            </Anchor>
            <Anchor
              href="https://homebudget-react.vercel.app/"
              target="_blank"
              underline="hover"
              mx="3px"
              c="var(--text-color)"
              fz={{ base: "h6", sm: "h5" }}
            >
              HomeBudget,
            </Anchor>
            <Anchor
              href="https://taskadeapp.vercel.app/"
              target="_blank"
              underline="hover"
              mx="3px"
              c="var(--text-color)"
              fz={{ base: "h6", sm: "h5" }}
            >
              Taskade.
            </Anchor>
          </Text>
        </Flex>

        <Group gap="sm" wrap="nowrap">
          <SocialIcon
            link={"https://dev.to/dipankarpaul"}
            ariaLabel={"Open dev.to in a new tab"}
          >
            <DevToLogo size={24} color="#2782d5" />
          </SocialIcon>

          <SocialIcon
            link={"https://www.linkedin.com/in/iamdipankarpaul/"}
            ariaLabel={"Open linkedin in a new tab"}
          >
            <LinkedinLogo size={24} color="#2782d5" />
          </SocialIcon>

          <SocialIcon
            link={"https://github.com/dipankarpaul2k"}
            ariaLabel={"Open github in a new tab"}
          >
            <GithubLogo size={24} color="#2782d5" />
          </SocialIcon>
        </Group>
      </Flex>
    </Box>
  );
}

export default Footer;
