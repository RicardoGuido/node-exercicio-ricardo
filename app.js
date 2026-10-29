import express from 'express'
import restaurante from './restaurante';    

const porta = '3000';
const app = express();

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});

