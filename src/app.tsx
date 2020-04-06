import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Provider } from 'mobx-react';

import { HomePage } from './components';
import './less/main.less';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const stores = {
  routing: routingStore,
};

const history = syncHistoryWithStore(browserHistory, routingStore);

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Provider {...stores}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
      </Provider>
    </BrowserRouter>
  );
}

ReactDOM.render(<MainRouter />, document.getElementById('main'));
