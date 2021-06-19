import './App.css';
import { About }from './components/About';
import { Navbar } from './components/Navbar';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router> 
    <div className="App">
      <Navbar/>
      <Switch>

        <Route exact path='/'>
        <About/>
        </Route>

          <Route exact path='/Skills'>
          <Skills/>
          </Route>

        <Route exact path='/Projects'>
          <Projects/>
          </Route>


      </Switch>
    </div>
    </Router>
  );
}

export default App;
