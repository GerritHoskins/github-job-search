import React, { useContext, useState, useEffect } from 'react';
import { useStore } from './../Store/Store';
import { observer, inject } from 'mobx-react';
//import Detail from './../Components/Detail/Detail';
/* import Top from './../Containers/Top/Top';
import Main from './../Containers/Main/Main';
import Left from './../Containers/Left/Left'; */

import {
  Container
} from 'react-bootstrap';

const Job = ({ match }) => {
  const {
    params: { id }
  } = match;
  const store = useStore();
  const [filter, setFilter] = useState([]);
 
  useEffect(() => {
    if(store.job.length > 0){
      return;
    }
    store.setFilter(id)
    store.filteredLists;
    setFilter(store.job)
  }, [filter]);

  return (   
    <Container>   
      {filter.length > 0 &&
          <>   
            {filter.title}
            {filter.company}
            {filter.company_logo}
            {filter.type}
            {filter.location}
            {filter.created_at}
          </>
      }
    </Container>
  )    
}

export default observer(Job);