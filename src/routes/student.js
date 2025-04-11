import express from 'express';
import {
  createStudent,
  getStudents,
  updateStudent,
} from '../controller/studentController.js';

const router = express.Router();

router.post('/student', createStudent);
router.get('/students', getStudents);
router.patch('/student/:id', updateStudent);

export default router;
