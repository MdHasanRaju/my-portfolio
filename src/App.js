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
import Blogs from './components/Blogs/Blogs';
import ProjectOneDetails from './components/Home/ProjectOneDetails/ProjectOneDetails';
import ProjectOne from './components/Home/ProjectOne/ProjectOne';
import ProjectTwo from './components/Home/ProjectTwo';

function App() {
  return (
    <div>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/detailsOne">
            <ProjectOne></ProjectOne>
          </Route>
          <Route path="/detailsTwo">
            <ProjectTwo></ProjectTwo>
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
