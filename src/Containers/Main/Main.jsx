import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { withStore, useStore } from './../../Store/Store';
import Job from '../../Components/Card/Job';
import {
  Container
} from 'react-bootstrap';

const Main = () => {
 // const { lists } = props.store;
  const [query, setQuery] = useState("");
  const store = useStore();
  const { lists, getList, deleteList } = store;

  useEffect(() => { }, []);
  return (
    <Container>
      {lists.map(item => (
        <Job job={item} />
      ))}
    </Container>
  );
}

export default observer(Main);