const express = require ('express');
const app = express();
const cors = require ('cors');
const bodyParser = require ('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const catCon = require('./controllers/categoryController');
const postCon = require('./controllers/postController')

app.get('/', catCon.getData);
app.get('/getTopic',postCon.findPost);



app.post('/postTopic',postCon.createPost)





app.listen(8004)