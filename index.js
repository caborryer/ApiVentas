const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');

//App
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.set('/users', require('./routes/api/usersRoutes'));



//Start the server
app.set("port", process.env.PORT || 4000);

app.listen(app.set("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});