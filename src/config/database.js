const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('muzik.db');

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome_completo VARCHAR(40) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL, 
    senha VARCHAR(255) NOT NULL
)
`;

const INSERIR_USUARIO_1 = 
`
INSERT INTO usuarios (
    nome_completo, 
    email,
    senha
) SELECT 'Sigrid Rodrigues', 'sigrid@bol.com.br', '123' WHERE NOT EXISTS (SELECT * FROM usuarios WHERE email = 'sigrid@bol.com.br')
`;

const ARTISTAS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS artistas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL, 
    nacionalidade TEXT NOT NULL,
    url_capa TEXT
)
`;

const INSERIR_ARTISTA_1 = 
`
INSERT INTO artistas (
    nome,
    nacionalidade
) SELECT 'Avril Lavigne', 'Canadense' WHERE NOT EXISTS (SELECT * FROM artistas WHERE nome = 'Avril Lavigne')
`;

const INSERIR_ARTISTA_2 = 
`
INSERT INTO artistas (
    nome, 
    nacionalidade
) SELECT 'Ed Sheeran', 'inglês' WHERE NOT EXISTS (SELECT * FROM artistas WHERE nome = 'Ed Sheeran')
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(USUARIOS_SCHEMA);
    bd.run(INSERIR_USUARIO_1);
    bd.run(ARTISTAS_SCHEMA);
    bd.run(INSERIR_ARTISTA_1);
    bd.run(INSERIR_ARTISTA_2);

    bd.each("SELECT * FROM usuarios", (err, usuario) => {
        console.log('Usuario: ');
        console.log(usuario);
    });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;