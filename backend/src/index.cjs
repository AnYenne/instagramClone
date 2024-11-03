const path = require('path')
const express = require('express');
const app = express();
const cors = require('cors')
const { engine} = require('express-handlebars');
const router = require('./routers/index.cjs')
const connectDb = require('./config/db.cjs')


//connect to DB
connectDb()

//allow frontend connect
app.use(cors())


// template engine
app.engine('hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));


//routers
router(app)

// local port 127.0.0.1
const port = process.env.PORT || 5000


//listen port
app.listen(port, () => console.log(`listening to the server app on port http://localhost:${port}`));