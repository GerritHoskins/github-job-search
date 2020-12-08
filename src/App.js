import React, { useState, useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import Spinner from 'react-bootstrap/Spinner';
import Top from './Containers/Top/Top';
import Main from './Containers/Main/Main';
import Left from './Containers/Left/Left';
import ListStore, { StoreProvider, withStore } from './Store/Store';

const store = new ListStore();

function App() {
  const mounted = useRef(true);
  const [loading, setLoader] = useState(true);

  useEffect(async () => {
    setLoader(true);
    if (mounted.current) {
      await store.getList();
      setLoader(false);
    }
    return () => {
      mounted.current = false
    }
  }, [])

  return (
    loading ? (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>) : (
        <StoreProvider store={store}>
          <Top />
          <Left />
          <Main />
        </StoreProvider>
      )
  );
}

export default withStore(observer(App));