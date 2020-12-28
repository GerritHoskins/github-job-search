import React, { useState, useEffect, useCallback } from 'react';
import { useStore } from './../../../Store/Store';
import { debounce } from 'lodash';
import {
    Row,
    Form
} from 'react-bootstrap';

const LocationSearch = () => {
    const [type, setType] = useState("");
    const [location, setLocation] = useState();
    const [debouncedValue, setDebouncedValue] = useState();
    const store = useStore();
    const debounceCallback = useCallback(
        debounce(value => {             
            store.fetchList();                 
        }, 2000),
        []
      );

     useEffect(() => {
       if(store.status && store.location.length > 0) {
           setLocation("");
       }
    }, [store.status, store.location]); 

    const checkBoxHandler = ({ target: { checked } }) => {    
        const newValue = !!checked;
        setType(newValue);
        store.setType(newValue);    
        debounceCallback();       
    };

    const inputHandler = ({ target: { value } }) => {     
        setLocation(value); 
        store.setLocation(value);
        debounceCallback(value);
       
    };

    return (
        <Form style={{width:"100%"}}> 
            <Row>
                <Form.Group controlId="type">
                    <Form.Check     
                        id="type" 
                        name="type"
                        type="checkbox" label="Full time" 
                        checked={store.type}
                        value={store.type}
                        onChange={checkBoxHandler} />
                </Form.Group>
                </Row>
                <Row>
                    <h4>Location</h4>
                </Row>
                <Row>
                    <input type="text" 
                        style={{width:"100%"}}
                        id="location"
                        name="location"
                        placeholder="City name, zip code or location"
                        minLength="4"
                        value={store.location}
                        onChange={inputHandler} />          
                </Row>
        </Form>
    )
};
export default LocationSearch