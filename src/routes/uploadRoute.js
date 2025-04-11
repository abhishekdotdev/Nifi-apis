import express from 'express';
import { createFile, getFiles } from '../controller/uploadController.js';
import upload from '../middlewares/multer.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

router.use('/files', express.static(path.join(__dirname, '../uploads')));

router.post('/upload', upload.single('img'), createFile);
router.get('/uploads', getFiles);
export default router;
