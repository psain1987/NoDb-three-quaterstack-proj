import React, {Component} from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import CarList from './components/CarList'
import Favorite from './components/Favorite'

class App extends Component{
  constructor(){
    super()
    this.state = {
      favCars: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/favCar')
    .then((res) => {
      this.setState({ favCars: res.data})
    })
    .catch((err) => console.log(err))
  }

  addFavCar = (id) => {
    axios.post(`/api/favCar/${id}`)
    .then((res) => {
      this.setState({ favCars: res.data })
    })
    .catch((err) => console.log(err))
  }

  makeCarNote = (index, note) => {
    axios.put(`/api/favCar/${index}`, {note})
    .then((res) => {
      this.setState({ favCars: res.data})
    })
    .catch((err) => console.log(err))
  }

  deleteCar = (index) => {
    axios.delete(`/api/favCar/${index}`)
    .then((res) => {
      this.setState({ favCars: res.data})
    })
    .catch((err) => console.log(err))
  }

  
  render(){
    return(
      <div>
        <Header/>
        <main className='box-one'>
          <Favorite 
          favCars={this.state.favCars}
          deleteCar={this.deleteCar}
          makeCarNote={this.makeCarNote}
          />
          <CarList addFavCar={this.addFavCar}/>
        </main>
      </div> 
    )
  }
}

  

export default App;
