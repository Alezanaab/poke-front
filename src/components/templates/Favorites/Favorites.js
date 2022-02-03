
import React from 'react';
import SearchInput from '../../molecules/SearchInput/SearchInput';
import ResultsList from '../../molecules/ResultsList/ResultsList';
import axios from 'axios';
import { Container, Alert } from 'react-bootstrap';

import SimpleLabel from '../../atoms/SimpleLabel/SimpleLabel';
import FavoriteCard from '../../molecules/FavoriteCard/FavoriteCard';
import './Favorites.css';

class Favorites extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        this.findAllmyPokemons();

    }


    findAllmyPokemons = async (entry) => {
        try {
            fetch("http://localhost:3000/api/mypokemons")
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            data: result
                        });
                    },

                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )




        } catch (err) {
            console.log('error', err);
        }
    }

    render() {
        return (
            <div>
                <SimpleLabel text="These are my favorite Pokemons" />
                <Container className="favorites">
                {this.state.data.map(function (item, i) {
                    return <FavoriteCard key={i} item={item} />
                })
                }   
                </Container>       
            </div>
        )
    }

}

export default Favorites;