const express = require('express');
const cors = require('cors');
const escrituras = require("./escrituras.json");

const PORT = process.env.PORT || 8000

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async function (req, res) {
        res.json(escrituras);
    });

app.listen(PORT, () => {
    console.log('Listening to PORT:', PORT)
});