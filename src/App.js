import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Navigation from './Navigation.js';
// import Home from './components/Home/Home/Home.js';
// import Mailer from './components/Mailer/Mailer';
// import Blogs from './components/Blogs/Blogs';
// import ProjectOneDetails from './components/Home/ProjectOneDetails/ProjectOneDetails';
// import ProjectOne from './components/Home/ProjectOne/ProjectOne';
// import ProjectTwo from './components/Home/ProjectTwo';
// import ProjectThree from './components/Home/ProjectThree/ProjectThree';
// import Footer from './components/Home/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading";

const Navigation = lazy(() => import("./Navigation.js"));
const Home = lazy(() => import("./components/Home/Home/Home.js"));
const Blogs = lazy(() => import("./components/Blogs/Blogs"));
const ProjectOne = lazy(() =>
  import("./components/Home/ProjectOne/ProjectOne")
);
const ProjectTwo = lazy(() => import("./components/Home/ProjectTwo"));
const ProjectThree = lazy(() =>
  import("./components/Home/ProjectThree/ProjectThree")
);
const Mailer = lazy(() => import("./components/Mailer/Mailer"));
const Footer = lazy(() => import("./components/Home/Footer/Footer"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
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
          <Route path="/detailsThree">
            <ProjectThree></ProjectThree>
          </Route>
          <Route path="/contact">
            <Mailer></Mailer>
          </Route>
        </Switch>
        <Footer></Footer>
      </Suspense>
    </Router>
  );
}

export default App;
