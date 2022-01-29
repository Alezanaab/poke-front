import React from 'react';
import './HomeStyle.css';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Navigation from '../../components/molecules/Navigation/Navigation';


import './HomeStyle.css';

/* templates */
import Search from '../../components/templates/Search/Search';

import Dashboard from '../../components/templates/Dashboard/Dashboard';



const Home = () => {
    return (
        <Row className="full-height">
            <Col sm={3} className="gray-right-border">
                <Navigation />
            </Col>
            <Col>
                <Switch>
                    <Route path='/Search' component={Search} />
                    <Route path='/' component={Dashboard} />
                </Switch>
            </Col>
        </Row>
    )
}

export default withRouter(Home);