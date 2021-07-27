import { FC, useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// App Css Import
import './stylesheets/App.css';

// Screens Import
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
// import DashboardScreen from './screens/DashboardScreen';

// Component Imports
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Overlay from './components/Overlay';

const App:FC = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  
  const menuButtonHandler = (e: any) => {
    e.target.classList.toggle('open');
    if(!menuToggle) {
       setMenuToggle(true);
       e.target.classList.add('open');
    } else {
      setMenuToggle(false);
      e.target.classList.remove('open');
    }
  }

  // useEffect(() => {
  //   const menuBtn = document.querySelector('.hamburger__menu');

  //   if(menuToggle){
  //     menuBtn?.classList.add('open');
  //   } else {
  //     menuBtn?.classList.remove('open');
  //   }
  // }, [menuToggle]);

  return (
    <Router>
      <header>
        <Menu show={menuToggle} click={() => setMenuToggle(false)} />
        <Overlay show={menuToggle} click={() => setMenuToggle(false)} />
        <Navbar open={menuToggle} click={menuButtonHandler} />
      </header>
      <main>
        <Switch>
          <Route exact path='/'>
            <LoginScreen />
          </Route>
          <Route exact path='/signup'>
            <SignupScreen />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
