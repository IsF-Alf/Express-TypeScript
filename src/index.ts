import express from 'express';
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log('Funcionando ' + new Date().toLocaleDateString());
    res.send('Pong!');
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});