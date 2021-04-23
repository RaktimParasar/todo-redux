import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItemList from "./pages/ItemList";

function App() {
  return (
    <div className="center">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list-id:id" component={ItemList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
