import React, { useContext, useState } from 'react';
import { StoreContext } from '../../App';
import { observer } from 'mobx-react';
import {
    Container,
    Row,
    Col,
    Navbar,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

const Header = () => {
    const {addList} = useContext(StoreContext);
    const [value, setValue] = useState("")
  
    //const {addList} = props.store

    const prepareAddList = (e) => {
        e.preventDefault()
        addList(value)
        setValue("")
    }

    return (
        <>
            <header>
                <Container>
                    <Row noGutters>
                        <Col md="auto">
                            <h1 align="left">GitHub Jobs</h1>
                        </Col>
                    </Row>
                    <Form onSubmit={prepareAddList} >
                        <Form.Row className="justify-content-md-center">
                            <Col>
                                <FormControl type="text" placeholder="Title, companies, expertise or benefits" value={value} type="text" onChange={(e) => setValue(e.target.value)} />
                            </Col>
                            <Col md="auto">
                                <Button>Submit</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            </header>
        </>
    )
};
export default observer(Header);