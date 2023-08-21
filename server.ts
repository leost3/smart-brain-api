import express from 'express'


const app = express()


app.listen(8080, () => 'running on port 3000')

app.get('/', (req, res) => {
    res.send('yuup')
})