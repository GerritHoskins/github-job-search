import React, { useEffect } from "react";

import {
  Container
} from 'react-bootstrap';

const Secondary = (props) => {
  const { title, company, company_logo, type, location, created_at, description } = props.job 
  useEffect(() => {}, []);

  return (
    <Container>   
      {title}
      {company}
      {company_logo}
      {type}
      {location}
      {created_at}
      {description}      
    </Container>
  );
}

export default Secondary;