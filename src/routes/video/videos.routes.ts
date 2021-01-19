import { Router } from "express";
const router = Router();

import * as videoController from './videos.controller'

router.get('/videos', videoController.getVideos);

router.post('/create', videoController.createVideo);

export default router