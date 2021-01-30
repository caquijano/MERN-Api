import { Router } from "express";
import * as entryDetailController from './entryDetails.controller'

const router = Router();

router.get('/entries', entryDetailController.getEntryDetails);

router.get('/entries/:id', entryDetailController.getEntryDetail);

router.post('/entries', entryDetailController.createEntryDetail);

router.delete('/entries/:id', entryDetailController.deleteEntryDetails);

router.put('/entries/:id', entryDetailController.updateEntryDetails);

export default router