const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) =>
{
    res.sendFile(__dirname + '/index.html');
});


const welcomeMessage = {
    id: 0,
    from: "Death",
    text: "Welcome to the Death chat system!"
}

const messages = [welcomeMessage]


app.get('/', function (request, response)
{
});
