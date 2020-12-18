import React, {
  useState,
  useEffect
} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {
  observer
} from 'mobx-react';
import stores, {
  useStore
} from './../../Store/Store';
import Job from '../../Components/Card/Job';
import {
  Container
} from 'react-bootstrap';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const store = useStore();

  useEffect(async () => {            
      await stores.getList();
      if(!stores.status) {
        setIsLoading(false);
      }
      return;
  }, []);

  return (
    <Container>
      {isLoading ? 
        <Spinner animation="grow" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> :
      store.lists.map(item => ( 
        <Job key={item.id} job={item} />
      ))}
    </Container>
  )
}

export default observer(Main);