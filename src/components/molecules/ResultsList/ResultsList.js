import React from 'react';
import SimpleCard from '../SimpleCard/SimpleCard';
import SimpleLabel from '../../atoms/SimpleLabel/SimpleLabel';
import "./ResultsList.css";

const ResultsList = (props) => {

    return (
      
        <div>
            {props.data !== '' ? <SimpleCard key={Math.random()}
                        title={props.data.name ? props.data.name : '' }
                        img={props.data.sprites && props.data.sprites.front_default ? props.data.sprites.front_default : ''} 
                        weight={props.data.weight ? props.data.weight : ''}
                        height={props.data.height ? props.data.height : '' }/> : 
                        <div className='search-welcome'>
                        <div className='typing-text'>
                        <img className="scizor" src='/images/scizor.png'></img>
                        <p>
                            Start typing the name of a pokémon on the search box to find one...
                            </p>
                        </div>
                    </div> }
                    
        </div>
    )
}

export default ResultsList;