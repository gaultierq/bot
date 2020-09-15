import { ThemeProvider } from '@material-ui/core';
import { Routes } from '@web/constants';
import '@web/global/root.css';
import { BotEdit, BotRun,BotList, Home, InteractionEdit, InteractionList, InteractionCreate } from '@web/pages';
import theme from '@web/theme';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { configureApolloClient } from '@web/graphql';
import Config from '@web/config';
import { Footer } from '@web/layout';
import * as serviceWorker from './serviceWorker';
import BotCreate from './pages/Bot/BotCreate';

const config = new Config(process.env);
const client = configureApolloClient(config);

function App(): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path={Routes.HOME} component={Home} />

            <Route exact path={Routes.BOT_LIST} component={BotList} />
            <Route exact path={Routes.BOT_CREATE} component={BotCreate} />
            <Route path={Routes.BOT_EDIT} component={BotEdit} />
            <Route path={Routes.BOT_RUN} component={BotRun} />

            <Route exact path={Routes.INTERACTION_LIST} component={InteractionList} />
            <Route exact path={Routes.INTERACTION_CREATE} component={InteractionCreate} />
            <Route path={Routes.INTERACTION_EDIT} component={InteractionEdit} />
          </Switch>
          <Route component={Footer} />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
