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
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/pics">
              <Pics></Pics>
            </Route>
            <Route path="/facts">
              <Facts></Facts>
            </Route>
            <Route path="/search">
              <Search></Search>
            </Route>
          </Switch>
          <Footer></Footer>
        </SearchContextProvider>
      </Router>
    </div>
  );
}

export default App;
