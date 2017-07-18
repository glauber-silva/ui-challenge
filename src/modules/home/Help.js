import React from 'react';
import { Col, Button, Modal } from 'react-bootstrap';

class Help extends React.Component{
    constructor(props){
        super(props);
            let now = new Date();
            this.state = {
                showModal : false,
                message: "This is your " + this.props.value + "according to freegeoip.net at" + now 
            }
        
    }
    open(){
        this.setState({showModal:true});
    }
    close(){
        this.setState({showModal:false});
    }
    render(){
        return(
            <div>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>GeoLocation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.message}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>{this.close()}}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <Col sm={4}>
                    <Button bsStyle="info" onClick={()=>{this.open()}}>?</Button>
                </Col>
            </div>
        );
    }
}

export default Help;