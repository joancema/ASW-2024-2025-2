import express from 'express'
import { optionRouter, signRouter } from './routes'
import { jwtMiddleware } from './middleware/jwt'


const app = express()
const port = 3000


app.use(express.json())
// app.use(jwtMiddleware)

app.use('/api/options',jwtMiddleware, optionRouter)
app.use('/api/sign', signRouter )

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


