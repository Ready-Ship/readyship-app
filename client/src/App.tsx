import { FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// App Css Import
import './stylesheets/App.css';

// Screens Import
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';

import ProjectScreen from './screens/ProjectScreen';
import TestScreen from './screens/TestScreen';

// Component Imports
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Overlay from './components/Overlay';
import { useDispatch } from 'react-redux';

import * as authActions from './redux/actions/authActions';

const App: FC = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.authenticate());
  }, [dispatch]);

  const menuButtonHandler = (e: any) => {
    e.target.classList.toggle('open');
    if (!menuToggle) {
      setMenuToggle(true);
      e.target.classList.add('open');
    } else {
      setMenuToggle(false);
      e.target.classList.remove('open');
    }
  };

  return (
    <Router>
      <header>
        <Menu show={menuToggle} click={() => setMenuToggle(false)} />
        <Overlay show={menuToggle} click={() => setMenuToggle(false)} />
        <Navbar open={menuToggle} click={menuButtonHandler} />
      </header>
      <main className='readyship__main-section'>
        <Switch>
          <Route exact path='/'>
            <LoginScreen />
          </Route>
          <Route exact path='/signup'>
            <SignupScreen />
          </Route>
          <Route exact path='/dashboard'>
            <DashboardScreen />
          </Route>

          <Route exact path='/dashboard/:projectId'>
            <ProjectScreen />
           </Route>
          
          <Route path='/test'>
            <TestScreen />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
