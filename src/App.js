import Header from "./Components/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home /> }/>
          
          <Route path="/portfolio" exact component={() => <Portfolio />} /> 
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
