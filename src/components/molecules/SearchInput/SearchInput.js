import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './SearchInputStyle.css'

class SearchInput extends React.Component {


    state = { entry: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
    }


    render() {
        return (
            <Form onSubmit={this.onFormSubmit} >
                <Container>
                    <Row  className="search-input">
                        <Col>
                            <Form.Group controlId="searchText" >
                                <Form.Control type="text"
                                    required
                                    placeholder="Enter a pokemon to Search"
                                    onChange={(event) => this.setState({ entry: event.target.value })}
                                    value={this.state.entry} //onSubmit onClick
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid text
                    </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit">
                                Find it!
                </Button>
                        </Col>
                    </Row>
                </Container>

            </Form>
        )
    }
}

export default SearchInput;