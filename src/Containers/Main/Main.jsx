import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { withStore } from './../../Store/Store';
import Job from '../../Components/Card/Job';
import {
  Container
} from 'react-bootstrap';

const Main = (props) => {
  const { lists } = props.store;

  useEffect(() => { }, []);
  return (
    <Container>
      {lists.map(item => (
        <Job job={item} />
      ))}
    </Container>
  );
}

export default withStore(observer(Main));