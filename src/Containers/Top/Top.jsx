import React from "react";
import Header from '../../Components/Header/Header';
import SimpleHeader from '../../Components/Header/SimpleHeader';
import {
  Container
} from 'react-bootstrap';

const Top = (props) => {
  const parentType = props.parent; 
  return (
    <Container>
      {parentType !== "DetailView" ? (
        <Header /> ) : (
        <SimpleHeader />
        )}
    </Container>
  );
}

export default Top;