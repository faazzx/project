const express= require("express");
const { chats } = require("./data/data");

const cors = require('cors');  // To handle cross-origin requests
const app = express();


const port = 5000;
app.use(cors()); 


app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});


app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ receivedData: data });
});


app.get('/' , (req, res)=>{
    res.send("hello my name is faaz khan");

})
 app.get('/api/chat', (req,res)=>{
    res.send(chats)
 })
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
