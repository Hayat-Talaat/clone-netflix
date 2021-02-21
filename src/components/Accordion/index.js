import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Inner,
  Item,
  Title,
  Header,
  Body,
} from "./styles/Accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [showItem, setShowItem] = useState(false);

  return (
    <ToggleContext.Provider value={{ showItem, setShowItem }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { showItem, setShowItem } = useContext(ToggleContext);

  return (
    <Header onClick={() => setShowItem((showItem) => !showItem)} {...restProps}>
      {children}
      {showItem ? (
        <img src="/images/icons/close-slim.png" alt="close" />
      ) : (
        <img src="/images/icons/add.png" alt="open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { showItem } = useContext(ToggleContext);

  return showItem ? <Body {...restProps}>{children}</Body> : null;
};
