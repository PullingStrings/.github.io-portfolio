import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';

import 'bootstrap-css-only';
import './scss/style.scss';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main className="container">
          <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
          </nav>
          <section>
            <Route path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/projects" component={ProjectsPage}/>
            <Route path="/experience" component={ExperiencePage}/>
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
