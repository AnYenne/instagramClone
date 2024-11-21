const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const { engine} = require('express-handlebars');
const router = require('./routers/index.cjs');
const connectDb = require('./config/db.cjs');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')

app.use(express.urlencoded({ extended: true }));  // Để phân tích form-urlencoded (dữ liệu form gửi lên)
app.use(express.json());  // Để phân tích JSON

//connect to DB
connectDb()

//allow frontend connect
app.use(cors())

//config env()
dotenv.config()

app.use(cookieParser())
app.use(express.json())

// template engine
app.engine('hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));

//storage image from client
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '/tmp/my-uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now());
    }
})

var upload = multer({storage: storage})


//routers
router(app)

// local port 127.0.0.1
const port = process.env.PORT || 5000


//listen port
app.listen(port, () => console.log(`listening to the server app on port http://localhost:${port}`));