import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './Navigation.js';
import Home from './components/Home/Home/Home.js';
import Mailer from './components/Mailer/Mailer';

function App() {
  return (
    <div>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Mailer></Mailer>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
