import React from 'react';
import { BrowserRouter, Switch, Route, Link, RouteComponentProps } from 'react-router-dom';

import './app.css';

const files = ['01-command', '03-observer', 'I-accordion'];

export interface PageComponent<Props = {}> extends React.FC<Props> {
  title: string;
}

type Page = {
  component: React.ComponentType<any>;
  path: string;
  title: string;
};

type Pages = {
  [key: string]: Page;
};

const pages = files.reduce<Pages>((p, filename) => {
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
    <h1>React Patterns</h1>

    <h3>Game Programming Patterns</h3>
    <ol>
      {Object.keys(pages).map(key => {
        const page = pages[key];
        return (
          <li key={page.path}>
            <Link to={`patterns/${page.path}`}>{page.title}</Link>
          </li>
        );
      })}
    </ol>
  </div>
);

class FullPage extends React.Component<RouteComponentProps<{ pageId: string }>> {
  componentDidMount() {
    const { pageId } = this.props.match!.params;
    const pageTitle = pages[pageId].title;
    document.title = pageTitle;
  }

  render() {
    const { pageId } = this.props.match!.params;
    const Page = pages[pageId].component;

    return <Page />;
  }
}

const Routes: React.FC = () => (
  <Switch>
    <Route path="/patterns/:pageId" component={FullPage} />
    <Route path="/" component={Contents} />
  </Switch>
);

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
