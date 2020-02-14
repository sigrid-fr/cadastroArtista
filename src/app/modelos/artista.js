const { check } = require('express-validator/check');

class Artista {
    static validacoes() {
        return [
            check('nome').isLength({ min: 5 }).withMessage('O nome precisa ter no mínimo 5 caracteres!'),
            check('nacionalidade').isLength({ min: 5 }).withMessage('A nacionalidade precisa ter no mínimo 5 caracteres!')
        ];
    }
}

module.exports = Artista;