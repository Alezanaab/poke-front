import { BrowserRouter, Router, Switch,  Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <Container fluid>
      <Switch>
          <Route exact path='/'  component={ Home } />
          <Route path='/Search' component = { Home } />
      </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;