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
  //const data = useContext(StoreContext);

  useEffect(() => {}, []);

  return (
    <>
        <Top />
        <Left />    
        <Main />
    </>
  );
}

export default withStore(observer(Home));