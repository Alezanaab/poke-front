
import React from 'react';
import SearchInput from '../../molecules/SearchInput/SearchInput';
import ResultsList from '../../molecules/ResultsList/ResultsList';
import axios from 'axios';
import { Container, Alert } from 'react-bootstrap';

import SimpleLabel from '../../atoms/SimpleLabel/SimpleLabel';
import FavoriteCard from '../../molecules/FavoriteCard/FavoriteCard';

class Favorites extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        console.log('component did mount', this.props);
        this.findAllmyPokemons();

    }


    findAllmyPokemons = async (entry) => {
        try {
            /*FETCH */
            fetch("http://localhost:3000/api/mypokemons")
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result);
                        this.setState({
                            data: result
                        });
                        console.log(this.state.data);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
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
                <SimpleLabel text="This are my Favorites Pokemon" />
                <Container>
                {this.state.data.map(function (item, i) {
                    console.log('test');
                    return <FavoriteCard item={item} />
                })
                }   
                </Container>       
            </div>
        )
    }

}

export default Favorites;