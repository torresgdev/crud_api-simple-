const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});