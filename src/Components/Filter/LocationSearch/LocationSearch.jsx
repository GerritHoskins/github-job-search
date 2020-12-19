import React, { useState } from 'react';
import stores, { useStore } from './../../../Store/Store';
import {
    Container,
    Row,
    Form
} from 'react-bootstrap';

const LocationSearch = () => {
    const [state, setState] = useState({
        description: "",
        type: "",
        location: ""
    });
    const store = useStore(stores);
    const prepareAddList = (event) => {
        event.preventDefault();
        setState(prevState => ({
            ...prevState,
            description: event.target.value
            }));
        store.getList(state);
    }

    const inputGroupChangeHandler = (event) => {
        setState((prevState) => ({
           ...prevState,
           [event.target.id]: event.target.value
        }));
    }

    return (
        <Form onSubmit={prepareAddList} style={{width:"100%"}}> 
            <Row>
                <Form.Group controlId="type">
                    <Form.Check     
                        id="type" 
                        name="type"
                        type="checkbox" label="Full time" 
                        value={state.type}
                        onChange={inputGroupChangeHandler} />
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
                        value={state.description}
                        onChange={inputGroupChangeHandler} />          
                </Row>
        </Form>
    )
};
export default LocationSearch