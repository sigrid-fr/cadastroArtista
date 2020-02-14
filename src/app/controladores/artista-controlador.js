const { validationResult } = require('express-validator/check');

const ArtistaDao = require('../infra/artista-dao');
const db = require('../../config/database');

const templates = require('../views/templates');

class ArtistaControlador {

    static rotas() {
        return {
            autenticadas: '/artistas*',
            lista: '/artistas',
            cadastro: '/artistas/form',
            edicao: '/artistas/form/:id',
            delecao: '/artistas/:id'
        };
    }

    lista() {
        return function(req, resp) {

            const artistaDao = new ArtistaDao(db);
            artistaDao.lista()
                    .then(artistas => resp.marko(
                        templates.artistas.lista,
                        {
                            artistas: artistas
                        }
                    ))
                    .catch(erro => console.log(erro));
        };
    }

    formularioCadastro() {
        return function(req, resp) {
            resp.marko(templates.artistas.form, { artista: {} });
        };
    }

    formularioEdicao() {
        return function(req, resp) {
            const id = req.params.id;
            const artistaDao = new ArtistaDao(db);
    
            artistaDao.buscaPorId(id)
                    .then(artista => 
                        resp.marko(
                            templates.artistas.form, 
                            { artista: artista }
                        )
                    )
                    .catch(erro => console.log(erro));
        };
    }

    cadastra() {
        return function(req, resp) {
            console.log(req.body);
            const artistaDao = new ArtistaDao(db);
            
            const erros = validationResult(req);
    
            if (!erros.isEmpty()) {
                return resp.marko(
                    templates.artistas.form,
                    { 
                        artista: {}, 
                        errosValidacao: erros.array()
                    }
                );
            }
    
            artistaDao.adiciona(req.body)
                    .then(resp.redirect(ArtistaControlador.rotas().lista))
                    .catch(erro => console.log(erro));
        };
    }

    edita() {
        return function(req, resp) {
            console.log(req.body);
            const artistaDao = new ArtistaDao(db);
            
            artistaDao.atualiza(req.body)
                    .then(resp.redirect(ArtistaControlador.rotas().lista))
                    .catch(erro => console.log(erro));
        };
    }

    remove() {
        return function(req, resp) {
            const id = req.params.id;
    
            const artistaDao = new ArtistaDao(db);
            artistaDao.remove(id)
                    .then(() => resp.status(200).end())
                    .catch(erro => console.log(erro));
        };
    }
}

module.exports = ArtistaControlador;