import React, { useEffect } from "react";
import LocationCheckbox from './../../Components/Filter/LocationCheckbox/LocationCheckbox';
import {
  Container
} from 'react-bootstrap';

const Left = () => {

  useEffect(() => {}, []);

  return (
    <Container>   
      <LocationCheckbox />   
    </Container>
  );
}

export default Left;