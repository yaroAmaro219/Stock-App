import React from 'react'
import NumericLabel from 'react-pretty-numbers'
import {Link} from 'react-router-dom'

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
            <h1>Watch List</h1>
            {stock}
        </>
    )
}
    
    

export default Watchlist