import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, Faqs, Us, Projects } from './components';

export default function MainRouter() {
  return (
    <React.StrictMode>
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/us" component={Us} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.render(
  <MainRouter />,
  document.getElementById('main')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
