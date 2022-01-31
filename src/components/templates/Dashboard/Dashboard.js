
import React from 'react';
import SearchInput from '../../molecules/SearchInput/SearchInput';
import ResultsList from '../../molecules/ResultsList/ResultsList';
import axios from 'axios';
import { Container, Alert } from 'react-bootstrap';
import './Dashboard.css'

import SimpleLabel from '../../atoms/SimpleLabel/SimpleLabel';

class Dashboard extends React.Component {



    render() {
        return (
            <div className='welcome-message'>
                <div className="text-welcome">
                    <SimpleLabel text="Welcome to" />
                </div>
                <img className="pokemon" src='/images/pokemon-search.png'></img>
                <div className="text-search">
                    <SimpleLabel  text="Search" />
                </div>
                <p className='introduce-text'>
                    On this app, you will be able to search for a pokémon and see some of his stats.
                    You can start navigating first to <span>Search Pokemons</span> Search for a pokemon and add to your favorites!
                    <img className="pikachu" src='/images/pikachu-1.png'></img>
                </p>
            </div>
        )
    }

}

export default Dashboard;