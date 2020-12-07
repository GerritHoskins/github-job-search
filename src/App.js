import React, { useEffect, useRef, useContext } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import { getList } from './Services/Jobs';
import Top from './Containers/Top/Top';
import Main from './Containers/Main/Main';
import Left from './Containers/Left/Left';
import { ListStore } from './Store/Store';

export const StoreContext = React.createContext();

function App() {
  const mounted = useRef(true);
  const store = new ListStore()
  useEffect(() => {
    mounted.current = true;
    getList()
      .then(items => {
        if (mounted.current) {
          store.addList(items)
        }
      })
    return () => {
      mounted.current = false;
    }
  }, [])


  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <Top />
        <Left />
        <Main />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
