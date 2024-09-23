const PORT = 3002;
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/router");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static('public'));
app.use('/', routes);

app.listen(PORT || 8000, () => {
    console.log(`Server connected successfully to port ${PORT}...`);
})