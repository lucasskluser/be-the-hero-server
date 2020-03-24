const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Lucas Samuel'
    });
});

module.exports = router;