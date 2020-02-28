import React from 'react'
import StockData from './StockData'
import NumericLabel from 'react-pretty-numbers'
import {Route, Link} from 'react-router-dom'

const Watchlist = ({ list }) => {
    const switchPrice = Number(list.change) > 0 ? 'up' : 'down'
       
    let params = {
        percentage: true
    }

    const stock =
      list.map((list, index) =>(         
        <Link
            key={index}
            to ={`/${list.symbol}`}
            className = "card" >
          <h4 className="title">
            {list.symbol}</h4>
          <div className="ticker">
          <p className="price">
            ${list.latestPrice}
          </p>
            <span className={`change ${switchPrice}`}>
              <NumericLabel params={params}>
                {list.changePercent}
              </NumericLabel>
            </span>
          </div>
      </Link>
      
    ))

  return (
    <> 
      <u>
        <h1>Watch List</h1>
      </u>  
      <button
        onClick={() => localStorage.clear('watchList')}>
        Refresh
        </button>
        {stock}
        <Route
          path={`/stockdata/:symbol`}
          render={(routerProps) => <StockData data={stock} {...routerProps} />}
        /> 
    </>
    )
}
    
    

export default Watchlist