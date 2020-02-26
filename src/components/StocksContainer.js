import React from 'react'
import { Route, Link } from 'react-router-dom'
import NumericLabel from 'react-pretty-numbers'
import StockData from './StockData'


const StocksContainer = ({ stock, addToWatchList }) => {
    const switchPrice = Number(stock.change) > 0 ? 'up' : 'down'
        let params = {
            percentage: true
        }
  
        // <Link to={{
        //   pathname: '/tylermcginnis',
        //   state: {
        //     fromNotifications: true
        //   }
        // }}>Tyler McGinnis</Link>
    
    const stockName = 
      <Link
        className="card"
        to={{
          pathname: `/stockdata/${stock.symbol}`,
          state: { stock: true }
        }} >
            <h4 className="title">{stock.symbol}</h4>
            <div className="ticker">
            <p className="price">${stock.latestPrice}</p>
            <span className={`change ${switchPrice}`}>
            <NumericLabel params={params}>
                {stock.changePercent}
            </NumericLabel>
            </span> 
            </div>
        </Link>
        
    return (
        <>
            {stock.symbol === undefined ?
                (<></>) : (
                <>
                 {stockName}
                </>    
                )}
        <button
            onClick={
            () => addToWatchList(stock.symbol)}>
            Add to Watchlist
        </button>
        <Route
          path={'/stockdata:symbol'}
        render={(props) => <StockData data={stock} {...props}/>}/> 
        </>
    
    )
}

export default StocksContainer