import express, { request, response } from "express";

console.log("creato indexjs");
const app = express();

//middleware prende nome cartella per convenzione public
app.use(express.static('public'));

app.get("/", (request, response) => {
    response.send("server del mio blog");
    
});





app.listen(3000,(error) => {
    if (error) {
        console.error("errore nel caricamento della pagina 3000");
        
    } else {
        console.log("pagina 3000 caricata con successo");
        
    }
});