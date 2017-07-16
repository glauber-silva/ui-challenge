import React from 'react';
import {Jumbotrom, Grid, Row, Col, Panel, Tabs, Tab} from 'react-bootstrap';
import 'Home.scss';


class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <Jumbotrom>
                    <Grid>
                        <h1>GeoLocation</h1>
                    </Grid>
                </Jumbotrom>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <Tabs defaultActiveKey={2} id="geolocation-data-panel">
                                <Tab eventKey={1} title="User Location">
                                    <p>
                                        Dados de Localização do Usuário    
                                    </p>
                                </Tab>
                                <Tab eventKey={2} title="Host Location">
                                    <p>
                                        Dados de Localização do Host    
                                    </p>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Home;