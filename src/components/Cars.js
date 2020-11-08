import React from 'react'

const Cars = (props) => {
   return <ul className='cars'
    onClick={() => {
        props.addFavCar(props.cars.id)
    }}>
        <h1>{props.cars.make}</h1>
        <h2>{props.cars.model}</h2>
        
    </ul>
}

export default Cars