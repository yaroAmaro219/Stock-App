import React from 'react'
import { Link } from 'react-router-dom'
import NumericLabel from 'react-pretty-numbers'

const StocksContainer = ({ stock, addToWatchList }) => {
    const switchPrice = Number(stock.change) > 0 ? 'up' : 'down'
        let params = {
            percentage: true
        }
    
    const stockName = 
    <Link  to={`/${stock.symbol}`} className="card">
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
            ) 
            }
        <button
            onClick={
            () => addToWatchList(stock.symbol)}>
            Add to Watchlist
        </button>
        </>
    
    )
}

export default StocksContainer