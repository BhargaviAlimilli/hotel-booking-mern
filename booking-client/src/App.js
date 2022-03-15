import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </div>
    </Router>
  );
}

export default App;
