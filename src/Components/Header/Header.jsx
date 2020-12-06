import React from 'react';
import {
    Container,
    Row,
    Col,
    Navbar,
    Form,
    FormControl,
    Button
} from 'react-bootstrap'
const Header = () => {
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
                                <FormControl type="text" placeholder="Title, companies, expertise or benefits" />
                            </Col>
                            <Col md="auto">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            </header>
        </>
    )
};
export default Header;