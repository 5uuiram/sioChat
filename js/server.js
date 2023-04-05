const express = require('express');
const app = express();
const http = require('http');
const PORT = 3137;
const server = http.createServer(app);


app.use((req,res, next)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(404).send("Erreur,Page instrouvable");
});
app.get('/',(red,res)=>{
    res.send('<h1>Hello world, oui oui baguette</h1>');
    res.sendFile(__direname+'/index.html')
});


server.listen(PORT, () => {
    console.log("Serveur démarré sur le port : " + PORT);
})