import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import Login from '../pages/login';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const ROUTE_CONFIG = [
  { path: '/tezos_ua', component: Home },
  { path: '/login', component: Login },
];

const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        {ROUTE_CONFIG.map((route, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Route key={i} path={route.path}>
              <route.component />
            </Route>
          );
        })}
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
