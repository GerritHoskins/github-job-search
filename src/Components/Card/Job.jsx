import React, {useEffect} from 'react';
import {
    Row,
    Col,
    Button,
    Card
} from 'react-bootstrap';

const Job = (props) => {   
    const { title, company, id } = props.job
    return (        
        <Row key={id}>
            <Card>
                <h4>{title}</h4>
                <div>{company}</div>
            </Card>
        </Row>
    )
};
export default Job;