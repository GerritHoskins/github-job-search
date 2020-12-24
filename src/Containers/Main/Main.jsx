import React, {
  useState,
  useEffect,
  useRef
} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {
  observer,
  useObserver
} from 'mobx-react';
import stores, {
  useStore
} from './../../Store/Store';
import Job from '../../Components/Card/Job';
import Pagination from '../../Components/Pagination/Pagination';
import {
  Container
} from 'react-bootstrap';
//import Pagination from 'reactjs-hooks-pagination';
const Main = () => {

  const store = useStore();
  const mounted = useRef(true);

  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);  
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  
  const onPageChanged = page => {
    const { currentPage, pageLimit } = page;
    store.setCurrentPage(currentPage);
    store.setPageLimit(pageLimit);
    const currentData = store.splitCurrentData;
    setCurrentPage(currentPage);
    setCurrentData(currentData);
  }

  useEffect(() => {
    mounted.current = true;   
    const getJobData = async() => {               
      if(data.length && !isLoading) {
        return;
      }
      if(mounted.current && store.status) {    
        return;
      }
      await store.fetchList(); 
      setData(store.lists); 
    }
    getJobData()

    return () => mounted.current = false;
  }, [data, store.lists, isLoading]);

  useEffect(() => {
    const offset = store.getOffset();
    setCurrentData(store.splitCurrentData);
  }, [offset, data, isLoading]);

  useEffect(() => {    
    if(isLoading){
      setTimeout(() => {
        if(mounted.current) {
          setIsLoading(false);
        }
      }, 2000)
    };
  }, [isLoading]);

  return (      
    isLoading ? (
      <div>
        <Spinner animation="grow" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div> ) : (
      <Container>
        {store.currentData.map(data => (
          <Job key={data.id} job={data} />
        ))}        
        {store.currentData.length > 0 &&
        <Pagination
          totalRecords={store.lists.length}
          pageLimit={store.pageLimit}
          pageNeighbours={1}
          onPageChanged={onPageChanged} />  
        }
    </Container> )
  )
}

export default observer(Main);