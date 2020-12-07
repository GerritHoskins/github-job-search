import React, { useEffect } from "react";
import Job from '../../Components/Card/Job';
import {
  Container
} from 'react-bootstrap';

const Main = () => {

  useEffect(() => {}, []);

  return (
    <Container>
      <Job />
    </Container>
  );
}

export default Main;