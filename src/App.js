import React from "react";
import { JumbotronContainer } from "./containers/Jumbotron";
import { AccordionContainer } from "./containers/Accordion";
import { FooterContainer } from "./containers/Footer";

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}
