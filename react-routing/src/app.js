import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import 'bootstrap-css-only';
import './scss/style.scss';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main className="container">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/1234">Some Id</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/:id" component={ShowId}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

const HomePage = () => {
  return (
    <h1>Home Page</h1>
  );
};

const AboutPage = () => {
  return (
    <h1>About Page</h1>
  );
};

const ShowId = (props) => {
  console.log(props);
  return (
    <h1> the id is: { props.match.params.id }</h1>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
