const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const db = require('./backend/database/config/key').mongoURI;
const user = require('./backend/routes/userApi');
app.use(bodyParser.json());

// connection to mongodb
mongoose.connect(process.env.MONGODB_URI || db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Mongo db connected"))
    .catch((error) => console.log("mongo connection faild due to : ", error))

//allow cors to all request
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use(cors({ origin: true, credentials: true }));

//use routs
app.use('/user', user);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
process.on('exit',() => console.log("server exit"));