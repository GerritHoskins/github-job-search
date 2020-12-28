import React from 'react';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';

const Detail = (props) => {   
    const { title, company, id,company_logo, type, location, created_at } = props.job
    return (        
        <Row key={id}>
            <Card style={{width:"100%"}}
                    bg={"white"} >  
                <Row>
                    <Col sm={4} md="2">
                        <Card.Img src={company_logo} className="rounded" />     
                    </Col>
                    <Col sm={8} md="auto">
                        <Card.Body>
                            <Card.Text>
                            {company}
                            </Card.Text>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{type}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>     
                <Row>    
                    <Col sm={{ span: 8, offset: 4 }} md={{ span: 10, offset: 2 }}>
                            <small className="text-muted">{location}</small>
                            <small className="text-muted">{created_at}</small>
                    </Col>
                </Row>
            </Card>
        </Row>
    )
};
export default Detail;