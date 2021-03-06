import React, {
  useState,
  useEffect,
  useRef
} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {
  observer
} from 'mobx-react';
import {
  useStore
} from './../../Store/Store';
import Job from '../../Components/Card/Job';
import Pagination from '../../Components/Pagination/Pagination';
import {
  Container
} from 'react-bootstrap';

const Main = () => {

  const store = useStore();
  const mounted = useRef(true);
  const [currentPage, setCurrentPage] = useState(1);  
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  
  const onPageChanged = page => {
    const { currentPage, pageLimit } = page;
    store.setCurrentPage(currentPage);
    store.setPageLimit(pageLimit);    
    setCurrentPage(currentPage);
  }

  useEffect(() => {
    const currentData = store.splitCurrentData();
    setCurrentData(currentData)
  }, [currentPage, store.currentPage]);

  useEffect(() => {
    mounted.current = true; 
    if(data.length === 0 || store.status) {
     getJobData();
    }        
    return () => mounted.current = false;
  }, []);
  
  const getJobData = async() => {   
    try{
      await store.fetchList();   
      setData(store.lists); 
      setCurrentData(store.currentData);
    }catch(error){
      console.warn("error mainjsx")
    }
  }

  return (      
    store.status ? (
      <>
        <Spinner animation="grow" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </> ) : (
      <>
        {store.currentData.map(item => (         
          <Job key={item.id} job={item} />
        ))} 
        {store.currentData.length > 0 &&       
          <Pagination
            totalRecords={store.lists.length}
            pageLimit={store.pageLimit}
            pageNeighbours={1}
            onPageChanged={onPageChanged} />  
        }
      </> )
  )
}

export default observer(Main);