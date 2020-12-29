import React, { useEffect } from 'react';
import { useStore } from './../Store/Store';
import { observer } from 'mobx-react';
import Spinner from 'react-bootstrap/Spinner';

import {
  Container
} from 'react-bootstrap';

const Job = ({ match, props }) => {
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
    <Container>   
      {store.status ? (
        <Spinner animation="grow" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      ) : (
        <>   
          {store.job.title}
          {store.job.company}
          {store.job.company_logo}
          {store.job.type}
          {store.job.location}
          {store.job.created_at}
          {store.job.description}
        </>
      )}
    </Container>
  )    
}

export default observer(Job);