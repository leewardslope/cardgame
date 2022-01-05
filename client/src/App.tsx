import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { routes } from './routes';
import UserAuthContextProvider from './context/authContext';

function App() {
  return (
    <React.Fragment>
      <UserAuthContextProvider>
        <Router>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          ))}
        </Router>
      </UserAuthContextProvider>
    </React.Fragment>
  );
}

export default App;
