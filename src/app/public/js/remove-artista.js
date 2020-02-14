let tabelaArtistas = document.querySelector('#artistas');

tabelaArtistas.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remocao') {
        let artistaId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/artistas/${artistaId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#artista_${artistaId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));
    }
});