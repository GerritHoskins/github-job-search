import React, { useState } from 'react';
import stores, { useStore } from './../../Store/Store';
import {
    Container,
    Row,
    Form,
    Button
} from 'react-bootstrap';

const Header = () => {
    const [value, setValue] = useState("")
    const store = useStore(stores);

    const prepareAddList = (e) => {
        e.preventDefault()        
        store.getList(value);
        setValue("");
    }

    return (
        <>
            <header>
                <Row>
                    <h1 align="left">GitHub Jobs</h1>                        
                            <h1 align="left">GitHub Jobs</h1>
                    <h1 align="left">GitHub Jobs</h1>                        
                </Row>
                <Row>
                <Form onSubmit={prepareAddList} style={{width:"100%"}}> 
                    <Container>
                        <Row>
                            <input type="text" 
                                style={{width:"90%"}}
                                placeholder="Title, companies, expertise or benefits"
                                value={value} type="text"
                                onChange={(e) => setValue(e.target.value)} />                                                
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