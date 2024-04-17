import React from "react";
import { Response, Form } from "../components";
import { Container } from "@mantine/core";
import useStore from "../store";

function HomePage() {
  const { response } = useStore();
  return (
    <Container size={"md"}>
      <Form />
      {response && <Response />}
    </Container>
  );
}

export default HomePage;
