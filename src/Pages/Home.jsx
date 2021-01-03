import React, { useContext, useState, useEffect } from 'react';
import { withStore } from './../Store/Store';
import { observer, inject } from 'mobx-react';
import Top from './../Containers/Top/Top';
import Main from './../Containers/Main/Main';
import Left from './../Containers/Left/Left';
import {
  Container
} from 'react-bootstrap';

const Home = () => {
  const parentType = "ListView";

  useEffect(() => {}, []);

  return (
    <React.Fragment>
        <Top parent={parentType} />
        <Left parent={parentType} />    
        <Main />
        </React.Fragment>
  );
}

export default withStore(observer(Home));