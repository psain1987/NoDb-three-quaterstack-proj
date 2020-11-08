const carList = require('./cars.json');
let favCars = [];

module.exports = {

    getCar: (req, res) => {
        let {search} = req.query
        let carArray = []

        if (search){
            let filteredCars = carList.filter((cars) => cars.make.toLowerCase()
            .includes(search.toLowerCase()))

        for(let i = 0; i < 5; i++){
            if(filteredCars[i]){
                carArray.push(filteredCars[i])
            }
        } 
    }       else {
        for(let i = 0; i < 5; i++){
            carArray.push(carList[i])
        }
    } 
       return res.status(200).send(carArray)
    },

    getOneCar: (req, res) => {
        let {id} = req.params
        let foundCar = carList.find((cars) => cars.id === +id)

        if (!foundCar){
            return res.status(400).send("This car was not found")
        }
         res.status(200).send(foundCar)
    },

    getFavCar: (req, res) => {
        res.status(200).send(favCars)
    },

    addFavCar: (req, res) => {
        let {id} = req.params
        let foundCar = {...carList.find((cars) => cars.id === +id)}

        foundCar.note = ''

        favCars.push(foundCar)

        res.status(200).send(favCars)
    },

    makeCarNote: (req, res) => {
        let {index} = req.params
        let {note} = req.body

        favCars[index].note = note

         res.status(200).send(favCars)
    },

    deleteCar: (req, res) => {
        let {index} = req.params

        favCars.splice(index, 1)

        res.status(200).send(favCars)
    }
};