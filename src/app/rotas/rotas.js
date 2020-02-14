const artistaRotas = require('./artista-rotas');
const baseRotas = require('./base-rotas');

module.exports = (app) => {
    baseRotas(app);
    artistaRotas(app);
};