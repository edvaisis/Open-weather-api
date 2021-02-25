if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY

const expres = require('express')
const app = expres()

app.use(expres.json())
app.use(expres.static('public'))

app.post('/weather', (req, res) => {

})

app.listen(3000, () => {
    console.log('Server Started')
})