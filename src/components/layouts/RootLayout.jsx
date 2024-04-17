import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Container } from "@mantine/core";

function RootLayout() {
  return (
    <Container size={"md"} style={{ minHeight: "100dvh" }}>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}

export default RootLayout;
