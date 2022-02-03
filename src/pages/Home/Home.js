import React from 'react';
import './HomeStyle.css';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Navigation from '../../components/molecules/Navigation/Navigation';
import { slide as Menu } from 'react-burger-menu';

import './HomeStyle.css';

/* templates */
import Search from '../../components/templates/Search/Search';
import Favorites from '../../components/templates/Favorites/Favorites';
import Dashboard from '../../components/templates/Dashboard/Dashboard';



const Home = () => {
    return (
        <div>
            <Menu >
                <a id="Home" className="menu-item" href="/">Home</a>
                <a id="Favorites" className="menu-item" href="/Favorites">My Favorites</a>
                <a id="Search" className="menu-item" href="/Search">Search A Pokémon!</a>
            </Menu>
            <Row className="full-height">
                {/*<Col sm={3} className="gray-right-border">
                <Navigation />
                
            </Col>*/}
                <Col className='canvas'>

                    <Switch>
                        <Route path='/Favorites' component={Favorites} />
                        <Route path='/Search' component={Search} />
                        <Route path='/' component={Dashboard} />
                    </Switch>
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(Home);