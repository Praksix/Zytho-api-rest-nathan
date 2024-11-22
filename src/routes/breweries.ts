import { Router } from "express";
export const router = Router();


router.get('/', (req, res)=>{
    res.json({message : "message d'accueil"});
});

router.post('/', (req, res)=>{
    res.json({message :"ajouter une brasserie"});
});

router.put('/', (req, res)=>{
    res.json({message :"modifier une brasserie"});
});

router.delete('/', (req, res)=>{

    //récupérer l'id de la brasserie aà supprimer

    try {
        //code sql pour supprimer la brasserie
        //connexion à la bdd
        //on va executer la requete sql pour la suppression
        res.send('bien supprimé');

    } catch (error) {
    //et si tout c'est bien passé on affiche msg confimration
    // sinon message d'erreur
    res.send('erreur');
    }
});
