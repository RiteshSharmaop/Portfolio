import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Your routes here
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// For Vercel, remove app.listen
export default app;
