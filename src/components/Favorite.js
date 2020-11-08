import React from 'react';
import FavoriteCars from './FavoriteCars';

const Favorite = (props) => {
    let carsArray = props.favCars.map((cars, index) => (
        <FavoriteCars 
        key={`${cars.id}-${index}`} 
        cars={cars}
        deleteCar={props.deleteCar}
        makeCarNote={props.makeCarNote}
        index={index}/>
    ));
    return <ul className='list'>{carsArray}</ul>;
};
export default Favorite