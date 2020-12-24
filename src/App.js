import React from 'react';
import './App.css';
import Top from './Containers/Top/Top';
import Main from './Containers/Main/Main';
import Left from './Containers/Left/Left';
const App = () => { 
  return (   
      <>
        <Top />
        <Left />
        <Main />        
      </>      
  );
}

export default App;