import express from 'express'
import BodyParser  from 'body-parser'
import cors from 'cors'
import router from './src/resources/todos/todos.router.js'

const app = express()
app.use(BodyParser.json())
app.use(cors())
app.use('/api/todos', router)
app.listen(4000, () => {
    console.log('listening at 4000')
})