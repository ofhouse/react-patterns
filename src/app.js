import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './app.css';

const files = ['01-command'];

const pages = files.reduce((p, filename, index, fullArray) => {
  const page = require(`./patterns/${filename}`);

  p[filename] = {
    component: page.default,
    path: filename,
    title: page.default.title,
  };

  return p;
}, {});

const Contents = () => (
  <div className="App">
    <h1>Game Programming Patterns</h1>
    <ul>
      {Object.keys(pages).map(key => {
        const page = pages[key];
        return (
          <li key={page.path}>
            <Link to={`patterns/${page.path}`}>{page.title}</Link>
          </li>
        );
      })}
    </ul>
  </div>
);

class FullPage extends React.Component {
  componentDidMount() {
    const { pageId } = this.props.match.params;
    const pageTitle = pages[pageId].title;
    document.title = pageTitle;
  }

  render() {
    const { pageId } = this.props.match.params;
  const Page = pages[pageId].component;

  return <Page />;
  }
}

const Routes = () => (
  <Switch>
    <Route path="/patterns/:pageId" component={FullPage} />
    <Route path="/" component={Contents} />
  </Switch>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
