import React from "react";

import { Box, Button, Flex, Group, TextInput } from "@mantine/core";
import { IconTrashX } from "@tabler/icons-react";

function KeyValuePairs({ keyValuePairs, setKeyValuePairs }) {
  const handleChange = (index, key, value) => {
    const newKeyValuePairs = [...keyValuePairs];
    newKeyValuePairs[index] = { key, value };
    setKeyValuePairs(newKeyValuePairs);
  };

  const handleRemove = (index) => {
    const newKeyValuePairs = [...keyValuePairs];
    newKeyValuePairs.splice(index, 1);
    setKeyValuePairs(newKeyValuePairs);
  };

  const handleAdd = () => {
    setKeyValuePairs([...keyValuePairs, { key: "", value: "" }]);
  };

  return (
    <Box>
      {keyValuePairs?.map(({ key, value }, index) => (
        <Flex
          key={index}
          my={8}
          direction={{ base: "column", sm: "row" }}
          justify={{ sm: "center" }}
          gap={"10px"}
        >
          <TextInput
            placeholder="key"
            value={key}
            onChange={(e) => handleChange(index, e.target.value, value)}
            flex={1}
            size="md"
            radius="md"
          />
          <TextInput
            placeholder="value"
            value={value}
            onChange={(e) => handleChange(index, key, e.target.value)}
            flex={1}
            size="md"
            radius="md"
          />
          <Button
            type="button"
            size="md"
            radius="md"
            color="red"
            variant="filled"
            onClick={() => handleRemove(index)}
            rightSection={<IconTrashX size={16} />}
          >
            Remove
          </Button>
        </Flex>
      ))}
      <Button type="button" onClick={handleAdd} my={5} radius={"md"}>
        Add
      </Button>
    </Box>
  );
}

export default KeyValuePairs;
