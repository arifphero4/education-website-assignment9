import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/Services/Services.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
           <Home></Home>
          </Route>

          <Route path="/Services">
            <Services></Services>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route exact path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
