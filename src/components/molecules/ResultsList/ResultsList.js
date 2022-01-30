import React from 'react';
import SimpleCard from '../SimpleCard/SimpleCard';

const ResultsList = (props) => {

    return (
        <div>
            
                    <SimpleCard key={Math.random()}
                        title={props.data.name ? props.data.name : '' }
                        img={props.data.sprites && props.data.sprites.back_default ? props.data.sprites.back_default : ''} 
                        weight={props.data.weight ? props.data.weight : ''}
                        height={props.data.height ? props.data.height : '' }/>
        </div>
    )
}

export default ResultsList;