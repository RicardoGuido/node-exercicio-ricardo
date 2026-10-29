import express from 'express'
import restaurante from './restaurante.js';    

const porta = '3000';
const app = express();

app.get('/restaurante', (requisicao, resposta) => {
  resposta.send(restaurante);
});


app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});

