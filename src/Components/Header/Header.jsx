import React, { useContext, useState } from 'react';
import ListStore, { withStore } from './../../Store/Store';
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

const Header = (props) => {
    const [value, setValue] = useState("")
    const [loading, setLoader] = useState(true);

    const prepareAddList = (e) => {
        e.preventDefault()
        props.store.deleteList();
        props.store.getList(value);
        setLoader(false);
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
                    <Form>
                        <Form.Row className="justify-content-md-center">
                            <Col>
                                <FormControl type="text" placeholder="Title, companies, expertise or benefits" value={value} type="text" onChange={(e) => setValue(e.target.value)} />
                            </Col>
                            <Col md="auto">
                                <Button onClick={prepareAddList}>Submit</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            </header>
        </>
    )
};
export default withStore(Header);