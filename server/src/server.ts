import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('listagem de usuários');
    
    response.json([
        'Kalil',
        'José',
        'Willian',
        'Kaio'
    ]);
})

app.listen(3333);