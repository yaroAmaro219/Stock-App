import React, {
  Component
} from 'react'
import Axios from 'axios'
import StocksContainer from './StocksContainer'
import Search from './Search'
import Watchlist from './Watchlist'
import Header from './Header'
const IEX_TOKEN = process.env.REACT_APP_IEX_TOKEN


export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stock: {},
      watchListStocks: [],
      tickers: [],
      searchQuery: ''
    }
  }

  componentDidMount() {
    const storageStocks = JSON.parse(localStorage.getItem('watchList'))
   if (this.state.watchListStocks.length === 0 && storageStocks !== null) {
      return (
        this.setState({
          watchListStocks: storageStocks
        }))
    } else {
      return  
    }
  }

  addToWatchList = () => {
    const add = this.state.stock
    this.setState({
      watchListStocks: [...this.state.watchListStocks, add]
    }
      , () => localStorage.setItem('watchList', JSON.stringify(this.state.watchListStocks))
    )
  }

  fetchStocks = async () => {
    this.setState({
      stock: {}
    })

    try {
      const {
        searchQuery
      } = this.state
      const response = await Axios.get(
        `https://cloud.iexapis.com/stable/stock/${searchQuery}/quote?token=${IEX_TOKEN}`
      )

      this.setState({
        stock: response.data
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchStocks()
  }


  render() {
    return (
      <div className = "container" >
        <Header />
        <Search
          onChange={this.handleChange}
          onSubmit = {this.handleSubmit}
          value = {this.state.searchQuery}
          name="searchQuery"
        />
        <StocksContainer
          stock={this.state.stock}
          addToWatchList = {this.addToWatchList}
        />
        <Watchlist
          list={this.state.watchListStocks}
        />
    </div >

    )
  }
}