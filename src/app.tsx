import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage, Faqs, Us, Projects } from './components';
import './less/main.less';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/us" component={Us} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<MainRouter />, document.getElementById('main'));
