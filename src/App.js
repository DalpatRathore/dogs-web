import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Pics from "./pages/pics/Pics";
import Facts from "./pages/facts/Facts";
import SearchContextProvider from "./contexts/SearchContext";

function App() {
  return (
    <div className="App">
      <Router>
        <SearchContextProvider>
          <Header></Header>
          <Switch>
            <Route path="/pics">
              {/* <h1>Page Completed</h1> */}
              <Pics></Pics>
            </Route>
            <Route path="/facts">
              {/* <h1>Facts Completed</h1> */}
              <Facts></Facts>
            </Route>
            <Route path="/search">
              {/* <h1>Search Page Completed</h1> */}
              <Search></Search>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
          <Footer></Footer>
        </SearchContextProvider>
      </Router>
    </div>
  );
}

export default App;
