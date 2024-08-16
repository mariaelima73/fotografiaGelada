let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send('Servidor Online');
});

const PORT = process.envPORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor online na porta ${PORT}.`);
});

const usuarios = require('./config/usuarios');