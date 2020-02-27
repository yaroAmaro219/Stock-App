import React from 'react';
import Container from './components/Container'
import Footer from './components/Footer'
import StockData from './components/StockData'
import Posts from './components/Posts'
import Contact from './components/Contact'
import './App.css';
import {
  Switch,
  Route,
  NavLink
} from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <NavLink
          exact to={"/"}
          activeClassName={'active'}>
          Home
          </NavLink>
        <NavLink
          to={'/posts'}
          activeClassName={'active'}>
          Posts
          </NavLink>
        <NavLink
          exact to={'/contact'}
          activeClassName={'active'}>
          Contact
          </NavLink>
      </nav>
      <main>
        <div className="App">
          <Switch>
            <Route
              exact path={"/"}
              component={Container} />
            <Route
              exact path={'/stockdata/:symbol'}
              component={StockData} />
            <Route 
              exact path={'/:symbol'}
              component={StockData} />
            
          </Switch>
          <Route
              path={'posts'}
            component={Posts} />
          <Route
              exact path={'/contact'}
              component={Contact} />
            
        </div>
        
      </main>
        <Footer />
    </>
  );
}

export default App;

