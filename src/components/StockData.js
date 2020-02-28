import React, {Component} from 'react'
import Axios from 'axios'
const IEX_TOKEN = process.env.REACT_APP_IEX_TOKEN


export default class StockData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stock: {},
            isLoading: true
        }
    }

  async componentDidMount() {
    const { match: { params: { symbol } } } = this.props
    
    try {
      const response = await Axios.get(
          `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${IEX_TOKEN}`
      )
      this.setState({
        stock: response.data,
        isLoading: false
      })
  } catch (error) {
      console.error(error)
  }
}
  

    addToWatchList = () => {
        const add = this.state.stock
        this.setState({
            watchListStocks:[...this.state.watchListStocks, add]
        })
    }
  

  render() {
    const { isLoading, stock } = this.state
    return (
      <div className="container" >
      {
        isLoading ? (
          <h1 className="title">loading...</h1>
        ) : (
            <div className="stock-data">
              <div>
                <span className="label">
                  Symbol:
                </span>
                <span className="detail-value">
                  {stock.companyName}
                </span>
              </div>

              <div>
                <span className="label">
                  Exchange:
                </span>
                <span className="data-value">
                  {stock.primaryExchange}
                </span>
              </div>

              <div>
                <span className="label">
                  Latest Price:
                </span>
                <span className="data-value">
                  ${stock.latestPrice}
                </span>
              </div>

              <div>
                <span className="label">
                  52 Week High:
                </span>
                <span className="data-value">
                  ${stock.week52High}
                </span>
                </div>

              <div>
                <span className="label">
                  52 Week Low: 
                </span>
                <span className="data-value">
                  ${stock.week52Low}
                </span>
              </div>

              <div>
                <span className="label">
                  Market Cap:
                </span>
                <span className="data-value">
                  {stock.marketCap}
                </span>
              </div>

              <div>
                <span className="label">
                  Price to Earnings Ratio:
                </span>
                <span className="data-value">
                  {stock.peRatio}
                </span>
              </div>
              </div>
        )
          }
      </div >
            
        )
    }
}
