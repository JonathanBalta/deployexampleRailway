import express from 'express'
let app = express();

// PORT
import {port} from './config.js'

// MORGAN 
import morgan from 'morgan'
app.use(morgan('dev'))

// ROUTES 
app.get('/', (req, res) => {
    res.send('DEPLOY EXAMPLE')
})

app.listen(port)