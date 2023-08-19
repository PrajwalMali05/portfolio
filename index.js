const express = require('express');
const path = require('path')

const app = express();

app.use(express.static('project'));
app.use('*', express.static(path.join(__dirname, 'project')));

app.listen(3000, () => {
    console.log("app is running on port 3000");

})