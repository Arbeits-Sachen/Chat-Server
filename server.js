const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }))
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) =>
{
    res.sendFile(__dirname + '/index.html');
});




const welcomeMessage =
{
    id: 0,
    from: "Death",
    text: "Welcome to the Death chat system!"
}

const msg = [welcomeMessage]


app.get("/messages", (req, res) =>
{
    res.send(msg);
});

// Create a new message
app.post("/messages", (req, res) =>
{
    //const { msgName, msgText } = req.body;
    let msgName = req.body.name;
    let msgText = req.body.text;
    let idPosition = msg.length;

    const newMsg =
    {
        id: idPosition,
        name: msgName,
        message: msgText,
    };

    if (!newMsg.name || !newMsg.message)
    {
        return res.status(400).json("Please include a name and message");
    }

    msg.push(newMsg);
    res.send(msg);
});
