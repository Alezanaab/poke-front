import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button }  from 'react-bootstrap';

const NavButton = (props) => {
    return (
        <Button variant="link" className='primary'>
            <Link to={`/${props.route}`}>{props.title.toString()}</Link>
        </Button>
    )
}

export default withRouter(NavButton);