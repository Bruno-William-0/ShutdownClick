import express from 'express'
import Commands from './Controller/Commands.js'

const app = express();
app.use(express.json());

app.use('/shutdown', Commands.shutdown)

app.listen(1500, () => console.log('API Rodando na porta 1500'))