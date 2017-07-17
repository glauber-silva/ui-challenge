import React from 'react';
import { Col, Button } from 'react-bootstrap';

class Help extends React.Component{
    render(){
        return(
            <Col sm={4}>
                <Button bsStyle="info">?</Button>
            </Col>       
        );
    }
}

export default Help;