import { Router } from "express";
import * as entryController from './entries.controller'

const router = Router();

router.get('/entries', entryController.getEntries);

router.get('/entries/:id', entryController.getEntry);

router.post('/entries', entryController.createEntry);

router.delete('/entries/:id', entryController.deleteEntries);

router.put('/entries/:id', entryController.updateEntries);

export default router