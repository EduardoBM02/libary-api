import express from 'express';
import cors from 'cors';
import livrosRoutes from './routes/livros.js'; // Importe as rotas criadas

// Inicialize o Express
const app = express();

// Middlewares globais
app.use(express.json()); // Para trabalhar com JSON no body das requisições
app.use(cors());         // Habilitar CORS para permitir conexões de outros domínios

// Rotas da API
app.use('/api/livros', livrosRoutes); // Associa as rotas de livros ao caminho "/api/livros"

// Rota inicial para teste da API
app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Gerenciamento de Biblioteca!');
});

// Exporta o app para ser usado em outro lugar
export default app;
