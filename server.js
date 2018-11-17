const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

require('./app/db/db');

const routes = require('./app/routes/index');

app.use(cors());
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: false }));
app.use('/api', routes);

const PORT = process.env.PORT || 8081;

const server = app.listen(PORT, function () {
    console.log('SUINStats is running on port ' + PORT + '...');
});