import React, { useEffect } from "react";
import LocationCheckbox from '../../Components/Filter/LocationCheckbox/LocationCheckbox';
import LocationSearch from '../../Components/Filter/LocationSearch/LocationSearch';
import {
  Container
} from 'react-bootstrap';

const Left = () => {
  return (
    <Container>   
      <LocationSearch />   
      <LocationCheckbox />         
    </Container>
  );
}

export default Left;