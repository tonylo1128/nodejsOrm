const express = require ('express');
const app = express();
const cors = require ('cors');
const bodyParser = require ('body-parser');
const multer = require('multer');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'))

const catCon = require('./controllers/categoryController');
const postCon = require('./controllers/postController')


const storage = multer.diskStorage({
    destionation: './public/uploads',
    filename: (req, file, cb)=>{
        const filename = file.originalname;
        cb(null, filename)
    }
});
const upload = multer({
    storage: storage
})

app.post('/postTopic',  upload.single('img'), postCon.createPost);


app.get('/', catCon.getData);
app.get('/getTopic',postCon.findPost);

app.post('/postTopic',postCon.createPost);

app.delete('/dele/:id', postCon.delePost);







app.listen(8005)