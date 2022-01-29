
import React from 'react';
import SearchInput from '../../molecules/SearchInput/SearchInput';
import ResultsList from '../../molecules/ResultsList/ResultsList';
import axios from 'axios';
import { Container, Alert } from 'react-bootstrap';

import SimpleLabel from '../../atoms/SimpleLabel/SimpleLabel';

class Dashboard extends React.Component {

 

    render() {
        return (
            <div>
                <SimpleLabel text="Welcome to PokeSearch" />
            </div>
        )
    }

}

export default Dashboard;