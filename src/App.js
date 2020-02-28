import React from 'react';
import Container from './components/Container'
import Footer from './components/Footer'
import StockData from './components/StockData'
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
            
        </div>
        
      </main>
        <Footer />
    </>
  );
}

export default App;

