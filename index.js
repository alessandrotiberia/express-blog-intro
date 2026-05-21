import express, { request, response } from "express";

console.log("creato indexjs");
const app = express();

//middleware prende nome cartella per convenzione public
app.use(express.static('public'));

app.get("/", (request, response) => {
    response.send("server del mio blog");

});
// nel terminale srivi node --watch index.js per far runnare server nel browser

// punto 2, creare array dove inserire lista di 5 post
//titolo, contenuto, immagine e tags (tags è un array di stringhe)
const post = [
    {
        titolo: "il padrino",
        contenuto: "film",
        img: "./public/il-padrino.jpeg",
        tags: ["tag0", "tag1", "tag2"]
    },
    {
        titolo: "lost",
        contenuto: "serie tv",
        img: "./public/lost.jpeg",
        tags: ["tag0", "tag1", "tag2"]
    },
    {
        titolo: "scarface",
        contenuto: "film",
        img: "./public/scarface.jpeg",
        tags: ["tag0", "tag1", "tag2"]
    },
    {
        titolo: "dragon ball",
        contenuto: "anime",
        img: "./public/dgb.jpeg",
        tags: ["tag0", "tag1", "tag2"]
    },
    {
        titolo: "one piece",
        contenuto: "anime",
        img: "./public/one-piece.png",
        tags: ["tag0", "tag1", "tag2"]
    }
];
// punto 3 collegare con bacheca oggetto json che ci da il post su 
app.get('/bacheca', (request, response) => {
    response.json(post);
});



app.listen(3000, (error) => {
    if (error) {
        console.error("errore nel caricamento della pagina 3000");

    } else {
        console.log("pagina 3000 caricata con successo");

    }
});