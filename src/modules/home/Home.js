import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {Jumbotron, Grid, Row, Col, Panel, Button,
    FormGroup, FormControl, InputGroup, Tabs, Tab} from 'react-bootstrap';
import Map from './Maps';
import LocationRows from './LocationRows';
import { getLocation, resetMyLocation } from '../../actions/actions';

import './Home.scss';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            website:"",
            markers:[
                {
                    position: this.props.user.position,
                    content: "User Location"
                },
                {
                    position:this.props.host.position,
                    content: "Site Content"
                }
            ],
            location:{
                lat:-23.5565751,
                lng:-46.6617431
            }
        };
    }
    /*
    * Updata form and map information about user and website (host)
    */
    componentWillReceiveProps(nextProps){
        this.setState({
            markers:[
                {
                    position:nextProps.user.position,
                    content: "User Locaction"
                },
                {
                    position: nextProps.host.position,
                    content: "Site Location"
                }
            ]
        });
    }
    /*
    * Load inputs for data location
    */
    handleDataLocation(data){
        return(
            <LocationRows location={data}/>
        );
    }
    /*
    * Reset User Location
    */
    handleResetMyLocation(){
        this.props.resetMyLocation();
        this.setState({
            markers:[]
        });
    }
    /*
    * Call action to executa a async function to load location
    */
    handleGetLocation(data){
        this.props.getLocation(data);
    }
    /*
    * Function to get website's input
    */
    updateWebSite(e){
        this.setState({website:e.target.value});
    }
    /*
    * Render Map and form inputs
    */
    render(){
        let { user, host } = this.props;

        return(
            <div className="Home">
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <Tabs defaultActiveKey={2} id="data-location">
                                <Tab eventKey={1} title="User">
                                    <Row>
                                        <Col xs={12} sm={12} className="text-center">
                                            <h4>User estimated location</h4>
                                        </Col>
                                        {this.handleDataLocation(user)}
                                    

                                        <Col sm={12}>
                                            <div className="MyLocationButtons">
                                                <Col xs={6} sm={6}>
                                                    <Button bsStyle="primary" onClick={()=>{this.handleGetLocation(false);}} block>My Location</Button>
                                                </Col>
                                                <Col xs={6} sm={6}>
                                                    <Button bsStyle="warning" onClick={()=>{this.handleResetMyLocation();}} block>Reset</Button>
                                                </Col>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey={2} title="WebSite">
                                    <Row>
                                        <Col xs={12} sm={12} className="text-center">
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
                                                            <Button 
                                                                bsStyle="primary" 
                                                                onClick={()=>{this.handleGetLocation(this.state.website);}}
                                                            >
                                                                Locate
                                                            </Button>
                                                        </InputGroup.Button>
                                                    </InputGroup>
                                                </FormGroup>
                                            </form>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col sm={12}>
                            <div className="Map">
                            {(user.ip || host.ip) ?
                                <Map 
                                    markers={this.state.markers}
                                    center = {this.state.location}
                                    containerElement={
                                        <div style={{height:500+'px'}} />
                                    }
                                    mapElement={
                                        <div style={{height:500+'px'}} />
                                    }
                                /> 
                                :
                                <div></div>
                            }
                            </div>
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