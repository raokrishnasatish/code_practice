const express = require('express');
const path = require('path');
const router = require('./routes/api/members');
const logger = require('./middleware/logger');


const app = express();
const PORT = process.env.PORT || 5000;

/*app.use(express.static(path.join(__dirname, 'public')));
*/

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
*/

//initialize middleware function logger
app.use(logger);

//initialize a body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// get members using router
app.use('/api/members', require('./routes/api/members'));


app.listen(PORT, () => {
    console.log(`Server started and running on ${PORT}`);
});
