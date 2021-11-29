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

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
