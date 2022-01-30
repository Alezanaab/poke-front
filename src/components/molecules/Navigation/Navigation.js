import React from 'react';
import { Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import NavButton from '../../atoms/NavButton/NavButton';
import './NavigationStyle.css';

const Navigation = () => {
    return (
        <div className="main-navigation">
            <Navbar expand="lg" >
                    <Navbar.Brand className="mx-auto" >
                        <NavButton route="" title="HOME"/>
                    </Navbar.Brand> 
            </Navbar>
            <br />
            <Navbar expand="lg" >
                    <Navbar.Brand className="mx-auto" >
                        <NavButton route="Search" title="SEARCH POKEMONS"/>
                    </Navbar.Brand> 
            </Navbar>
            <br />
            <Navbar expand="lg" >
                    <Navbar.Brand className="mx-auto" >
                        <NavButton route="Favorites" title="MY FAVORITES"/>
                    </Navbar.Brand> 
            </Navbar>
            <br />
        </div>
    )
}

export default withRouter(Navigation);