import { Router } from "express";
export const router = Router();

import { getBreweriesController } from "../controllers/breweries";
import { postBreweriesController } from "../controllers/breweries";
import { putBreweriesController } from "../controllers/breweries";
import { deleteBreweriesController } from "../controllers/breweries";
import { getDetailsBreweriesController } from "../controllers/breweries";

router.get('/', getBreweriesController.get);
router.post('/', postBreweriesController.post);
router.put('/', putBreweriesController.put);
router.delete('/:id', deleteBreweriesController.delete);
router.get('/:id', getDetailsBreweriesController.get);