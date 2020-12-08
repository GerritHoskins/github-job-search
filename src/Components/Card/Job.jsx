import React, {useEffect} from 'react';
import {
    Row,
    Col,
    Button,
    Card
} from 'react-bootstrap';

const Job = (props) => {   
    const { title, company } = props.job
    return (        
        <Row>
            <Card>
                <h4>{title}</h4>
                <div>{company}</div>
            </Card>
        </Row>
    )
};
export default Job;