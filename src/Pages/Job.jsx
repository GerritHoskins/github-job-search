import React, { useEffect } from 'react';
import { useStore } from './../Store/Store';
import { observer } from 'mobx-react';
import Top from './../Containers/Top/Top';
import Secondary from './../Containers/Secondary/Secondary';
import Left from './../Containers/Left/Left';
import Spinner from 'react-bootstrap/Spinner';
import {
  Container
} from 'react-bootstrap';

const Job = ({ match, props }) => {
  const parentType = "DetailView";
  const {
    params: { id }
  } = match;
  const store = useStore();

  const fetchJob = async() => {
    store.setFilter(id);
    try{
      await store.fetchJobById();
    }
    catch(error){
      console.warn("error job.jsx");
    }
  }
 
  useEffect(() => {
    if(store.job.length === 0 || store.status){
      fetchJob();
    }else {
      return;
    }    
  }, []);

  return (   
    <section className="jobDetail">
      <Top parent={parentType} />
      <Left parent={parentType} />    
      {store.status ? (
        <Spinner animation="grow" role="status">
        <span className="sr-only">Loading...</span>
        </Spinner> ) : (
        <Secondary job={store.job} />
      )}
    </section>    
  )    
}

export default observer(Job);