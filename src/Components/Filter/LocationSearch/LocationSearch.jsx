import React, { useState } from 'react';
import stores, { useStore } from './../../../Store/Store';
import {
    Row,
    Form
} from 'react-bootstrap';

const LocationSearch = () => {
    const [state, setState] = useState({
        type: "",
        location: ""
    });
    const store = useStore(stores);
    
    const checkBoxHandler = (event) => {     
        let occupationType = event.target.value === "" ? "Full Time" : "";
        setState((prevState) => ({
            ...prevState,
            [event.target.id]: occupationType
         }));

        store.setType(state.type);        
        store.getList(state);
    }

    const inputHandler = (event) => {        
        setState((prevState) => ({
           ...prevState,
           [event.target.id]: event.target.value
        }));
        store.setLocation(state.location);
        store.getList(state);
    }

    return (
        <Form style={{width:"100%"}}> 
            <Row>
                <Form.Group controlId="type">
                    <Form.Check     
                        id="type" 
                        name="type"
                        type="checkbox" label="Full time" 
                        defaultChecked={true}
                        value={state.type}
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
                        value={state.location}
                        onChange={inputHandler} />          
                </Row>
        </Form>
    )
};
export default LocationSearch