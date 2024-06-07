const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(helmet());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/my-api', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Rotas Básicas
app.get('/', (req, res) => {
  res.send('API is running');
});

// Iniciar o Servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

