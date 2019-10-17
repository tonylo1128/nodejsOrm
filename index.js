const express = require ('express');
const app = express();
const cors = require ('cors');
const bodyParser = require ('body-parser');
const multer = require('multer');
const router = express.Router();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'))



const storage = multer.diskStorage({
    destionation: './public/uploads/',
    filename: (req, file, cb)=>{
        const filename = file.originalname;
        cb(null, filename)
    }
});
const upload = multer({
    storage: storage
})

// app.post('/postTopic',  upload.single('img'), postCon.createPost);
app.post('/postTopic',  upload.single('img'), (req, res)=>{
    const file = req.file;
    const fileObj = req.body.fileObj;

    console.log("___________________________________")
    console.log(file)
    console.log("___________________________________")
    console.log(res.body)
    console.log("___________________________________")
    console.log(fileObj)
    console.log("___________________________________")
    

} );

// app.post('/fileUpload', upload.single('img'), (req, res, next) => {
//     console.log("Testing")
// })

const catCon = require('./controllers/categoryController');
const postCon = require('./controllers/postController')






app.get('/', catCon.getData);
app.get('/getTopic',postCon.findPost);



app.post('/postTopic',postCon.createPost);

app.delete('/dele/:id', postCon.delePost);







app.listen(8005)