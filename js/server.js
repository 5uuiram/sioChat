const express = require('express');
const app = express();
const http = require('http');
const PORT = 3137;
const server = http.createServer(app);


app.get('/',(red,res)=>{
    res.send('<h1>Hello world, oui oui baguette</h1>');
    res.sendFile(__direname+'/page1.html')
});


server.listen(PORT, () => {
    console.log("Serveur démarré sur le port : " + PORT);
})