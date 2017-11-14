import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

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
          </nav>
          <section>
            <Route path="/" component={HomePage}/>
            <div>
              <Route path="/about" component={AboutPage}/>

            </div>
          </section>
        </main>
      </BrowserRouter>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
