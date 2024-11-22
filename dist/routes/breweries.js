"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    res.json({ message: "message d'accueil" });
});
exports.router.post('/', (req, res) => {
    res.json({ message: "ajouter une brasserie" });
});
exports.router.put('/', (req, res) => {
    res.json({ message: "modifier une brasserie" });
});
exports.router.delete('/', (req, res) => {
    //récupérer l'id de la brasserie aà supprimer
    try {
        //code sql pour supprimer la brasserie
        //connexion à la bdd
        //on va executer la requete sql pour la suppression
        res.send('bien supprimé');
    }
    catch (error) {
        //et si tout c'est bien passé on affiche msg confimration
        // sinon message d'erreur
        res.send('erreur');
    }
});
