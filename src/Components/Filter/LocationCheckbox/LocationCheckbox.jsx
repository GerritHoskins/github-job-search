import React, { useState } from 'react';
import { useStore } from './../../../Store/Store';
import { debounce, throttle } from 'lodash';
import {
    Row,
    Form
} from 'react-bootstrap';

const LocationCheckbox = () => {
    const store = useStore();
    
    const inputGroupChangeHandler = (event) => {
        store.setLocation(event.target.value);
        store.setCurrentPage(1);
        store.fetchList();
       //throttle(loadData, 1000);
    }

    return (
        <Row>
            <Form>
                    <Form.Check    
                        id="location1" 
                        name="location"     
                        type="radio" label="Germany" 
                        value="Germany"
                        defaultChecked={true}
                        onChange={inputGroupChangeHandler} />                    
                    <Form.Check  
                        id="location2" 
                        name="location"
                        type="radio" label="Munich"
                        value="Munich"
                        onChange={inputGroupChangeHandler} />
                    <Form.Check  
                        id="location3" 
                        name="location" 
                        type="radio" label="Berlin" 
                        value="Berlin"
                        onChange={inputGroupChangeHandler} />
                    <Form.Check  
                        id="location4" 
                        name="location" 
                        type="radio" label="Remote" 
                        value="Remote" 
                        onChange={inputGroupChangeHandler} />
            </Form>
        </Row>
    )
};
export default LocationCheckbox;