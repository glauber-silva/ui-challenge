import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Help from './Help';

class LocationRows extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            help: false
        };
    }

    render(){
        let { location } = this.props;
        return(
            <div className="LocationRows text-center">
                <Row>
                    <Col sm={4}>
                        <span className="field-name"> IP </span>
                    </Col>
                    <Col sm={4}>
                        <span className="location-value">{location.ip}</span>
                    </Col>
                    {(location.ip) ? <Help value={"IP"}/> : <div></div>}
                </Row>
                <Row>
                    <Col sm={4}>
                        <span className="field-name"> Country </span>
                    </Col>
                    <Col sm={4}>
                        <span className="location-value">{location.countryName}</span>
                    </Col>
                    {(location.countryName) ? <Help value={"Country"}/> : <div></div>}
                </Row>
                <Row>
                    <Col sm={4}>
                        <span className="field-name"> City  </span>
                    </Col>
                    <Col sm={4}>
                        <span className="location-value">{location.city}</span>
                    </Col>
                    {(location.city) ? <Help value={"City"}/>: <div></div>}
                </Row>
                <Row>
                    <Col sm={4}>
                        <span className="field-name"> Zip Code</span>
                    </Col>
                    <Col sm={4}>
                        <span className="location-value">{location.zipCode}</span>
                    </Col>
                     {(location.zipCode) ?<Help value={"Zip Code"}/> : <div></div>}
                </Row>
                <Row>
                    <Col sm={4}>
                        <span className="field-name"> Latitude </span>
                    </Col>
                    <Col sm={4}>
                        <span className="location-value">{location.position.lat}</span>
                    </Col>
                    {(location.position.lat) ? <Help value={"Latitude"}/> : <div></div>}
                </Row>
                <Row>
                    <Col sm={4}>
                        <span className="field-name"> Longitude </span>
                    </Col>
                    <Col sm={4}>
                        <span className="location-value">{location.position.lng}</span>
                    </Col>
                    {(location.position.lng) ? <Help value={"Longitude"}/> : <div></div>}
                </Row>
            </div>
        );
    }
}

Location.propsTypes = {
    location: PropTypes.object.isRequired
};

export default LocationRows;