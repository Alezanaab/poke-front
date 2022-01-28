
import React from 'react';
import SearchInput from '../../molecules/SearchInput/SearchInput';
import ResultsList from '../../molecules/ResultsList/ResultsList';
import axios from 'axios';
import { Container, Alert } from 'react-bootstrap';

import SimpleLabel from '../../atoms/SimpleLabel/SimpleLabel';
import './SearchStyle.css'

class Search extends React.Component {
    state = {
        data: ''
    }

    onSearchSubmit = async (entry) => {
        try {

 
            const response = await axios.get(`http://localhost:3000/api/pokemons/${entry}`,
                {
                headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
            })
            console.log(response.data);
            
            

            //const totalResultsText = `Your Search for "` + entry + `" has ` + response.data + ` results`;
            this.setState({
                data: response.data
            }
            );
 
        } catch (err) {
            console.log('error', err);
        }
    }


 

    render() {
        return (
            <div>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <SimpleLabel text={this.state.totalResultsText} />
                <div className='results-list'>
                <ResultsList data={this.state.data} />
                </div>
            </div>
        )
    }

}

export default Search;