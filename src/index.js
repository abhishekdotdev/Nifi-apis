import express from 'express';
import studentRouter from './routes/student.js';
import uploadRouter from './routes/uploadRoute.js';

import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', studentRouter);
app.use('/api/v1', uploadRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'server is up and running',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
