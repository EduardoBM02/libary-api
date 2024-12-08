import express from 'express';
import cors from 'cors';
import livrosRoutes from './routes/livros.js';

const app = express();

app.use(express.json()); 
app.use(cors());        

app.use('/api/livros', livrosRoutes); 

app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Gerenciamento de Biblioteca!');
});

export default app;
