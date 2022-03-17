import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from './components/ProtectedRoute'
import Dashboard from './users/DashBoard'
import DashboardSeller from './users/DashBoardSeller'


function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path= '/dashboard/seller' component={DashboardSeller} />
      </div>
    </Router>
  );
}

export default App;
