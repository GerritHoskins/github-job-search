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

    const checkBoxHandler = (event) => {    
        let occupationType = event.target.value === "" ? "Full Time" : "";
        setType(occupationType);
        store.setType(occupationType);    
        debounceCallback();       
    }
    const inputHandler = ({ target: { value } })  => {       
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
                        defaultChecked={true}
                        value={store.getType()}
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
                        value={store.getLocation()}
                        onChange={inputHandler} />          
                </Row>
        </Form>
    )
};
export default LocationSearch