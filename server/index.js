const path = require('path');
const cors = require('cors');
const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
// const passport = require('./passport');
// const session = require('express-session');

const routes = require('./routes.js');

const PORT = 3000;
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client/dist')));

// app.use(
//   session({
//     secret: 'thicc-milcc',
//     resave: false,
//     saveUninitialized: false
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

app.use('/api', routes);

app.listen(PORT, () => console.log('App is listening on PORT', PORT));
