import { Router } from "express";
import * as entryDetailController from './entryDetails.controller'

const router = Router();

router.get('/entryDetails', entryDetailController.getEntryDetails);

router.get('/entryDetails/:id', entryDetailController.getEntryDetail);

router.post('/entryDetails', entryDetailController.createEntryDetail);

router.delete('/entryDetails/:id', entryDetailController.deleteEntryDetails);

router.put('/entryDetails/:id', entryDetailController.updateEntryDetails);

export default router