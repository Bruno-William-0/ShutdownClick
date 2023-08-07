import express from 'express'
import cors from 'cors'
import Commands from './Controller/Commands.js'

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
  }));
  /*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permite solicitações de qualquer origem
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });*/

app.use('/shutdown', Commands.shutdown)

app.listen(1500, () => console.log('API Rodando na porta 1500'))