import React, { useState } from 'react';
import stores, { useStore } from './../../../Store/Store';
import {
    Row,
    Form
} from 'react-bootstrap';

const LocationCheckbox = () => {

    const [state, setState] = useState({
        description: "",
        type: "",
        location: ""
    });
    const store = useStore(stores);

    const inputGroupChangeHandler = (event) => {
        setState((prevState) => ({
           ...prevState,
           [event.target.id]: event.target.value
        }));
    }

    return (
        <Row>
            <Form>
                    <Form.Check    
                        id="location1" 
                        name="location"
                        type="radio" label="Nuremberg" 
                        value={state.description}
                        onChange={inputGroupChangeHandler} />                     
                    <Form.Check  
                        id="location2" 
                        name="location"
                        type="radio" label="Munich"
                        value={state.description}
                        onChange={inputGroupChangeHandler} />
                    <Form.Check  
                        id="location3" 
                        name="location" 
                        type="radio" label="Berlin" 
                        value={state.description}
                        onChange={inputGroupChangeHandler} />
                    <Form.Check  
                        id="location4" 
                        name="location" 
                        type="radio" label="Frankfurt" 
                        value={state.description}
                        onChange={inputGroupChangeHandler} />
            </Form>
        </Row>
    )
};
export default LocationCheckbox;