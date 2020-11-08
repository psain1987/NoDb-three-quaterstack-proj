const express = require('express')
const app = express()
ctrl = require('./controller')

app.use(express.json())


app.get('/api/cars', ctrl.getCar)
app.get('/api/cars/:id', ctrl.getOneCar)
app.get('/api/favCar', ctrl.getFavCar)
app.post('/api/favCar/:id', ctrl.addFavCar)
app.put('/api/favCar/:index', ctrl.makeCarNote)
app.delete('/api/favCar/:index', ctrl.deleteCar)


port = 3213
app.listen(port, () => console.log(`Server is listening on port: ${port}`))