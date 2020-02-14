const ArtistaControlador = require('../controladores/artista-controlador');
const artistaControlador = new ArtistaControlador();

const Artista = require('../modelos/artista');

const BaseControlador = require('../controladores/base-controlador');

module.exports = (app) => {
    const rotasArtista = ArtistaControlador.rotas();
    
    app.use(rotasArtista.autenticadas, function(req, resp, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            resp.redirect(BaseControlador.rotas().login);
        }
    });

    app.get(rotasArtista.lista, artistaControlador.lista());

    app.route(rotasArtista.cadastro)
        .get(artistaControlador.formularioCadastro())
        .post(Artista.validacoes(), artistaControlador.cadastra())
        .put(artistaControlador.edita());

    app.get(rotasArtista.edicao, artistaControlador.formularioEdicao());

    app.delete(rotasArtista.delecao, artistaControlador.remove());
};