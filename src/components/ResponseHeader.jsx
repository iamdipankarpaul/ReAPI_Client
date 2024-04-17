import React from "react";
import { Table } from "@mantine/core";
import useStore from "../store";

function ResponseHeader() {
  const { response } = useStore();
  return (
    <Table highlightOnHover withTableBorder>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Key</Table.Th>
          <Table.Th>Value</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {response?.headers &&
          Object.keys(response.headers).map((key, index) => (
            <Table.Tr key={index}>
              <Table.Td>{key}</Table.Td>
              <Table.Td>{response.headers[key]}</Table.Td>
            </Table.Tr>
          ))}
      </Table.Tbody>
    </Table>
  );
}

export default ResponseHeader;
