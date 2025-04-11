import express from 'express';
import {
  createResponse,
  getResponse,
} from '../controller/responseController.js';

const router = express.Router();

router.post('/response', createResponse);
router.get('/responses', getResponse);

export default router;
