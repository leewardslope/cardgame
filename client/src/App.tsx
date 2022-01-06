import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { routes } from './routes';
import UserAuthContextProvider from './context/authContext';
import SocketContextProvider from './context/socketContext';

function App() {
  return (
    <React.Fragment>
      <SocketContextProvider>
        <UserAuthContextProvider>
          <Router>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
          </Router>
        </UserAuthContextProvider>
      </SocketContextProvider>
    </React.Fragment>
  );
}

export default App;
