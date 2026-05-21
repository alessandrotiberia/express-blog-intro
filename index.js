import express from "express";

console.log("creato indexjs");
const app = express();




app.listen(3000,(error) => {
    if (error) {
        console.error("errore nel caricamento della pagina 3000");
        
    } else {
        console.log("pagina 3000 caricata con successo");
        
    }
})