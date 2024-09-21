import server from 'express'
import { optionRouter } from './routes'


const app = server()

app.use(server.json())


app.use('/options', optionRouter)


app.listen(3000, () => {
    console.log('Server on port 3000')
})