import React from 'react';
import {
    Row,
    Col,
    Form,
    FormControl
} from 'react-bootstrap';

const LocationCheckbox = () => {
    return (
        <Row>
            <Form>
                <Form.Group controlId="check1">
                    <Form.Check type="checkbox" label="Check me out1" />
                </Form.Group>
                <Form.Group controlId="check2">
                    <Form.Check type="checkbox" label="Check me out2" />
                </Form.Group>
                <Form.Group controlId="check3">
                    <Form.Check type="checkbox" label="Check me out3" />
                </Form.Group>
            </Form>
        </Row>
    )
};
export default LocationCheckbox;