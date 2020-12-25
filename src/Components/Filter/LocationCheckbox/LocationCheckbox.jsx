import React, { useState } from 'react';
import { useStore } from './../../../Store/Store';
import {
    Row,
    Form
} from 'react-bootstrap';

const LocationCheckbox = () => {
    const store = useStore();
    
    const inputGroupChangeHandler = (event) => {
        store.setLocation(event.target.value);
        store.fetchList();
    }

    return (
        <Row>
            <Form>
                    <Form.Check    
                        id="location1" 
                        name="location"     
                        type="radio" label="Germany" 
                        value="Germany"
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