import React from 'react';
import {
    Container
} from 'react-bootstrap';

const SimpleHeader = () => {
    return (
        <Container>
            <header className="page-header">
                <h3 className="page__title">
                    <b>Github</b> Jobs
                </h3>
            </header>
        </Container>
    )
};
export default SimpleHeader;