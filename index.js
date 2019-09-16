const express = require ('express');
const app = express();
const cors = require ('cors');
const bodyParser = require ('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const catCon = require('./controllers/categoryController');

app.get('/', catCon.getData)




app.listen(8000)