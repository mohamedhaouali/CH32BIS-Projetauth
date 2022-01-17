import { Navbar } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Landpage from './Pages/Landpage/Landpage';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Errors from './Pages/Errors/Errors';




function App() {



  return (
    <div className="App">

      <NavBar />
      <Switch>

        <Route exact path="/" component={Landpage} ></Route>
        <Route exact path="/register" component={Register} ></Route>
        <Route exact path="/login" component={Login} ></Route>
        <Route exact path="/profile" component={Profile} ></Route>
        <Route exact path="/*" component={Errors} ></Route>

      </Switch>

      <Footer />

    </div >
  );
}

export default App;
