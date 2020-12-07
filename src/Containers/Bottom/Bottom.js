import React, { useEffect } from "react";
import {
  Container
} from 'react-bootstrap';

const Bottom = () => {

  useEffect(() => {}, []);

  return (
    <Container>
      <Card />
      <Pager />
    </Container>
  );
}

export default Bottom;