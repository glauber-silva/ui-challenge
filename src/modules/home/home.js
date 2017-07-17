import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Jumbotron, Grid, Row, Col, Panel} from 'react-bootstrap';
import LocationRows from './LocationRows';
import './Home.scss';


class Home extends React.Component{
    handleDataLocation(data){
        return(
            <LocationRows location={data}/>
        );
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

function mapStateToProps(state){
    return{
        user: state.user,
        host: state.host
    };
}

Home.protoTypes = {
    user: PropTypes.object.isRequired,
    host: PropTypes.object.isRequired
};

export default connect(mapStateToProps,{})(Home);