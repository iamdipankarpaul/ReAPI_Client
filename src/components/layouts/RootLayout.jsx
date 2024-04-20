import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Container, Divider } from "@mantine/core";
import Footer from "./Footer";

function RootLayout() {
  return (
    <Container size={"md"} style={{ minHeight: "100dvh" }}>
      <nav>
        <Navbar />
      </nav>
      <Divider />
      <main>
        <Outlet />
      </main>
      
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}

export default RootLayout;
