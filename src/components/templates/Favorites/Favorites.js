
import React from 'react';
import SearchInput from '../../molecules/SearchInput/SearchInput';
import ResultsList from '../../molecules/ResultsList/ResultsList';
import axios from 'axios';
import { Container, Alert } from 'react-bootstrap';

import SimpleLabel from '../../atoms/SimpleLabel/SimpleLabel';

class Favorites extends React.Component {

 

    render() {
        return (
            <div>
                <SimpleLabel text="This are my Favorites Pokemon" />
            </div>
        )
    }

}

export default Favorites;