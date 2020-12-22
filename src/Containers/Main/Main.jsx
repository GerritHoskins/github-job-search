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
import Pagination from '../../Components/Pagination/Pagination';
import {
  Container
} from 'react-bootstrap';
import Pagination from 'reactjs-hooks-pagination';

const pageLimit = 5;
const Main = () => {
  const store = useStore(stores);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalJobs, setTotalJobs] = useState(50);
  const [allJobs, setAllJobs] = useState([]);  

  useEffect(() => {               
      if(store.lists.length > 0) {        
        setAllJobs(store.lists);
        setTotalJobs(store.lists.length);
        setIsLoading(false);
      }
      if (totalJobs === 0) {
        return null;
      }
  }, []);

  return (    
    <Container>
      {isLoading ? (
        <Spinner animation="grow" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> )
      : (
      allJobs.length > 0 && allJobs.map(item => ( 
        <Job key={item.id} job={item} />
      ))      
       )
      }
      <Pagination
          totalRecords={totalJobs}
          pageLimit={pageLimit}
          pageRangeDisplayed={1}
          onChangePage={setCurrentPage}
      />
    </Container>
  )
}

export default observer(Main);