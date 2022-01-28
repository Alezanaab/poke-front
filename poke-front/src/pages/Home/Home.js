import React from 'react';
import './HomeStyle.css';
import { withRouter, Route, Switch  } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';


import './HomeStyle.css';

/* templates */
import Search from '../../components/templates/Search/Search';




const Home = () => {
    return (
        <Row className="full-height">
                <Col sm={3} className="gray-right-border">
                </Col>
                <Col>
                <Switch>
                        <Route path='/Search' component = { Search } />
                </Switch>
                 </Col>
                </Row>
    )
}

export default withRouter(Home);