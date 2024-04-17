import React, { useEffect } from "react";
import { Response, Form } from "../components";
import { Container } from "@mantine/core";
import useStore from "../store";

function HomePage() {
  const { response, initialLoad, setLoading } = useStore();

  useEffect(() => {
    initialLoad();
    // setLoading(false);
  }, []);

  return (
    <Container size={"md"} mt={15} mb={10}>
      <Form />
      {response && <Response />}
    </Container>
  );
}

export default HomePage;
