import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {Jumbotron, Grid, Row, Col, Panel, Button,
    FormGroup, FormControl, InputGroup} from 'react-bootstrap';
import Map from './Maps';
import LocationRows from './LocationRows';
import { getLocation, resetMyLocation } from '../../actions/actions';

import './Home.scss';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            website:""
        };
    }
    handleDataLocation(data){
        return(
            <LocationRows location={data}/>
        );
    }
    handleResetMyLocation(){
        this.props.resetMyLocation();
    }
    handleGetLocation(data){
        this.props.getLocation(data);
    }
    updateWebSite(e){
        this.setState({website:e.target.value});
    }
    render(){
        let { user, host } = this.props;
        return(
            <div className="Home">
                <Jumbotron>
 
                    <Map 
                        containerElement={
                            <div style={{height:500+'px'}} />
                        }
                        mapElement={
                            <div style={{height:500+'px'}} />
                        }
                    />

                </Jumbotron>
                <Grid>
                    <Row>
                        <Col sm={6}>
                            <Panel header={"User"}>
                                <Row>
                                    <Col sm={12} className="text-center">
                                        <h4>User estimated location</h4>
                                    </Col>
                                    {this.handleDataLocation(user)}
                                
                                    <Col sm={6}>
                                    </Col>
                                    <Col sm={6}>
                                        <Button bsStyle="primary" onClick={()=>{this.handleGetLocation(false);}}>My Location</Button>
                                        <Button bsStyle="warning" onClick={()=>{this.handleResetMyLocation();}}>Reset</Button>
                                    </Col>
                                </Row>
                            </Panel>
                        </Col>
                        <Col sm={6}>
                            <Panel header={"Host"}>
                                <Row>
                                    <Col sm={12} className="text-center">
                                        <h4>Web Site estimated location</h4>
                                    </Col>
                                    {this.handleDataLocation(host)}
                                
                                    <Col sm={12}>
                                        <form>
                                            <FormGroup>
                                                <InputGroup>
                                                    <InputGroup.Addon>http://</InputGroup.Addon>
                                                    <FormControl 
                                                        type="text" 
                                                        onChange={evt => this.updateWebSite(evt)}
                                                        value={this.state.website}
                                                    />
                                                    <InputGroup.Button>
                                                        <Button bsStyle="primary" onClick={()=>{this.handleGetLocation(this.state.website);}}>Locate</Button>
                                                    </InputGroup.Button>
                                                </InputGroup>
                                            </FormGroup>
                                        </form>
                                    </Col>
                                </Row>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

Home.protoTypes = {
    user: PropTypes.object.isRequired,
    host: PropTypes.object.isRequired,
    getLocation: PropTypes.func,
    resetMyLocation: PropTypes.func
};

function mapStateToProps(state){
    return{
        user: state.user,
        host: state.host
        
    };
}

export default connect(mapStateToProps,{getLocation,resetMyLocation})(Home);