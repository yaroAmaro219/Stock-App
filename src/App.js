import React from 'react';
import Container from './components/Container'
import Header from './components/Header'
import Footer from './components/Footer'
import StocksData from './components/StockData'
import Posts from './components/Posts'
import Contact from './components/Contact'
import Watchlist from './components/Watchlist'
import './App.css';
import {
  Switch,
  Route,
  NavLink
} from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <nav>
        <NavLink
          exact to={"/"}
          activeClassName={'active'}>
          Home
          </NavLink>
        {/* <NavLink
          to={'/stockdata'}
          activeClassName={'active'}>
          Stock Data
          </NavLink> */}
        <NavLink
          to={'/posts'}
          activeClassName={'active'}>
          Posts
          </NavLink>
        <NavLink
          to={'/contact'}
          activeClassName={'active'}>
          Contact
          </NavLink>
      </nav>
      
      <main>
    <div className="App">
        <Switch>
          <Route exact path={"/"}
            component={Container} />
          {/* <Route
            path={'/stockdata'}
            component={StocksData} /> */}
          <Route
            path={'posts'}
            component={Posts} />
          <Route
            path={'./contact'}
            component={Contact}/>
          </Switch>
        </div>
        
      </main>
      {/* <Footer /> */}
      </>
  );
}

export default App;

