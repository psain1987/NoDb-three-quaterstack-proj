import React, {Component} from 'react'
import Cars from './Cars'
import axios from 'axios'

class CarList extends Component {
    constructor(){
        super()
        this.state = {
            searchBox: '',
            displayCar: [],
        }
    }

    componentDidMount(){
        axios.get('/api/cars')
        .then((res) => {
            this.setState({displayCar: res.data})
        })
        .catch((err) => console.log(err))
       
    }

    handleInput = (e) => {
        this.setState({ searchBox: e.target.value})
        axios.get(`/api/cars?search=${e.target.value}`)
        .then((res) => {
            this.setState({displayCar: res.data})
        })
        .catch((err) => console.log(err))

    }

    render(){

        
        let mappedCars = this.state.displayCar.map((cars) => (
            
            <Cars 
            key={cars.id} 
            cars={cars}
            addFavCar={this.props.addFavCar}/>
            
        ))
        
        return <div>
            <input className='search-box' value={this.state.searchBox} onChange={this.handleInput}></input>
            <ul className='list'>{mappedCars}
            </ul>
            </div>

    }
}
export default CarList;