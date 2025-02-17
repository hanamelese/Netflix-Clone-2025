import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Detail from './pages/Detail';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detail/:movieId">
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
