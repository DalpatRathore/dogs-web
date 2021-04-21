import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Pics from "./pages/pics/Pics";
import Facts from "./pages/facts/Facts";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/pics">
            {/* <h1>Page Completed</h1> */}
            <Pics></Pics>
          </Route>
          <Route path="/facts">
            <Facts></Facts>
          </Route>
          <Route path="/search">
            <Search></Search>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
