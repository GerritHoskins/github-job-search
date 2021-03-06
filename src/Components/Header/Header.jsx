import React, { useState } from 'react';
import { useStore } from './../../Store/Store';
import {
    Container,
    Row,
    Form,
    Button
} from 'react-bootstrap';

const Header = () => {
    const [state, setState] = useState({
        description: "",
        type: "",
        location: ""
    });
    const store = useStore();

    const prepareAddList = (event) => {
        event.preventDefault();
        store.setDescription(state.description);
        store.fetchList();
    }

    const inputGroupChangeHandler = (event) => {
        setState((prevState) => ({
           ...prevState,
           [event.target.id]: event.target.value
        }));
    }

    return (
        <>
            <header>
                <Row>
                    <h1 align="left">github Jobs</h1>                             
                </Row>
                <Row>
                <Form onSubmit={prepareAddList} style={{width:"100%"}}> 
                    <Container>
                        <Row>
                            <input type="text" 
                                style={{width:"90%"}}
                                id="description"
                                name="description"
                                placeholder="Title, companies, expertise or benefits"
                                value={state.description}
                                onChange={inputGroupChangeHandler} />                                                
                            <Button 
                                style={{width:"10%"}}
                                onClick={prepareAddList}>Submit</Button>  
                        </Row>
                    </Container>
                </Form>
                </Row>
            </header>
        </>
    )
};
export default Header;