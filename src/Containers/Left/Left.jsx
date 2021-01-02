import React, { useEffect } from "react";
import LocationCheckbox from '../../Components/Filter/LocationCheckbox/LocationCheckbox';
import LocationSearch from '../../Components/Filter/LocationSearch/LocationSearch';
import DetailNavigation from '../../Components/Navigation/DetailNavigation';
import {
  Container
} from 'react-bootstrap';

const Left = (props) => {
  const parentType = props.parent; 
  return (
    <Container>   
      {parentType !== "DetailView" ? (
        <>
          <LocationSearch />   
          <LocationCheckbox />
        </> ) : (
        <DetailNavigation />
      )}  
    </Container>
  );
}

export default Left;