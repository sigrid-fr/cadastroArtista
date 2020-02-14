class ArtistaDao {

    constructor(db) {
        this._db = db;
    }

    adiciona(artista) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO artistas (
                    nome, 
                    nacionalidade
                ) values (?,?)
                `,
                [
                    artista.nome,
                    artista.nacionalidade
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o artista!');
                    }

                    resolve();
                }
            )
        });
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM artistas',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar os artistas!');

                    return resolve(resultados);
                }
            )
        });
    }

    buscaPorId(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM artistas
                    WHERE id = ?
                `,
                [id],
                (erro, artista) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o artista!');
                    }
                    return resolve(artista);
                }
            );
        });
    }

    atualiza(artista) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE artistas SET
                nome = ?,
                nacionalidade = ?
                WHERE id = ?
            `,
            [
                artista.nome,
                artista.nacionalidade,
                artista.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o artista!');
                }

                resolve();
            });
        });
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    DELETE 
                    FROM artistas
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o artista!');
                    }
                    return resolve();
                }
            );
        });
    }
}

module.exports = ArtistaDao;