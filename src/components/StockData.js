import React from 'react'
import { Link } from 'react-router-dom'


const StockData = (stock) => {
  console.log(`data: ${stock}`)
  const switchPrice = Number(list.change) > 0 ? 'up' : 'down'
       
    

  const data =
  stock.map((stock, index) =>(         
      <Link
              key={index}
              to ={`/${stock.symbol}`}
              className = "card" >
          <h4 className="title">
              {>
          <div className="ticker">
              <p className="price">
                  ${list.latestPrice}
              </p>
              <span className={`change ${switchPrice}`}>
                  
                      {list.changePercent}
                  
              </span>
          </div>
      </Link>
  ))

  return (
    <>
      <h1>Hello twirl</h1>
        {data}
      </>
  )
}

export default StockData