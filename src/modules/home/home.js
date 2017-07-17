import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {Jumbotron, Grid, Row, Col, Panel, Button} from 'react-bootstrap';
import LocationRows from './LocationRows';
import { getLocation, resetMyLocation } from '../../actions/actions';
import './Home.scss';

class Home extends React.Component{
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
    render(){
        let { user, host } = this.props;
        return(
            <div className="Home">
                <Jumbotron>
                    <Grid>
                        <h1>GeoLocation</h1>
                    </Grid>
                </Jumbotron>
                <Grid>
                    <Row>
                        <Col sm={6}>
                            <Panel header={"User"}>
                                <h4>User estimated location</h4>
                                {this.handleDataLocation(user)}
                                <Row>
                                    <Col sm={6}>
                                        
                                    </Col>
                                    <Col sm={6}>
                                        <Button bsStyle="primary" onClick={()=>{this.handleGetLocation(false);}}>My Location</Button>
                                        <Button bsStyle="warning" onClick={()=>{this.handleResetMyLocation()}}>Reset</Button>
                                    </Col>
                                </Row>
                            </Panel>
                        </Col>
                        <Col sm={6}>
                            <Panel header={"Host"}>
                                <h4>Web Site estimated location</h4>
                                {this.handleDataLocation(host)}
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