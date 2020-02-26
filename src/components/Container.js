import React, {Component} from 'react'
import Axios from 'axios'
import StocksContainer from './StocksContainer'
import Search from './Search'
import Watchlist from './Watchlist'
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


    addToWatchList = () => {
        const add = this.state.stock
        this.setState({
            watchListStocks:[...this.state.watchListStocks, add]
        })
    }


    fetchStocks = async () => {
        this.setState({
            stock: {}
        })

        try {
            const { searchQuery } = this.state
            console.log(searchQuery)
            const response = await Axios.get(
                `https://cloud.iexapis.com/stable/stock/${searchQuery}/quote?token=${IEX_TOKEN}`
            )

            console.log(response)

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
            <div className="container" >

            <Search
                onChange={this.handleChange}
                onSubmit = {this.handleSubmit}
                value = {this.state.searchQuery}
                name="searchQuery"
            />
                
                    <StocksContainer
                        stock={this.state.stock}
                        addToWatchList={this.addToWatchList}
                    />
                     
                
            <Watchlist
                    list={this.state.watchListStocks}
            />
            </div >
        )
    }
}