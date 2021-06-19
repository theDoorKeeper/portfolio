import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar } from './components/Navbar';
function App() {
  return (
    <Router> 
    <div className="App">
      <Navbar/>
      <Switch>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
