import React from "react";
import { ActionIcon } from "@mantine/core";

function SocialIcon({ link, ariaLabel, children }) {
  return (
    <ActionIcon
      size="lg"
      color="gray"
      variant="subtle"
      radius="lg"
      component="a"
      target="_blank"
      href={link}
      aria-label={ariaLabel}
    >
      {children}
    </ActionIcon>
  );
}

export default SocialIcon;
