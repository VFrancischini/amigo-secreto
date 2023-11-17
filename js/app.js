let listaDeAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    let amigosAdicionados = document.getElementById('lista-amigos');

    if (nomeAmigo == '') {
        alert('Informe um nome!');
        return;
    }

    if (listaDeAmigos.includes(nomeAmigo)) {
        alert('Nome já adicionado, informe um sobrenome ou apelido!');
        return;
    }

    listaDeAmigos.push(nomeAmigo);

    if (amigosAdicionados.textContent == '') {
        amigosAdicionados.textContent = nomeAmigo;
    } else {
        amigosAdicionados.textContent += ', ' + nomeAmigo;
    }

    document.getElementById('nome-amigo').value = '';
}

function sortear() {

    if (listaDeAmigos.length < 4) {
        alert('Informe mais de 3 participantes!');
        return;
    }

    embaralha(listaDeAmigos);

    let listaSorteio = document.getElementById('lista-sorteio');

    for (let indice = 0; indice < listaDeAmigos.length; indice++) {

        if (indice == listaDeAmigos.length - 1) {
            listaSorteio.innerHTML += listaDeAmigos[indice] + ' --> ' + listaDeAmigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML += listaDeAmigos[indice] + ' --> ' + listaDeAmigos[indice + 1] + '<br>';
        }
    }
}

function embaralha(listaDeAmigos) {

    for (let indice = listaDeAmigos.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [listaDeAmigos[indice - 1], listaDeAmigos[indiceAleatorio]] = [listaDeAmigos[indiceAleatorio], listaDeAmigos[indice - 1]];
    }
}

function reiniciar() {
    listaDeAmigos = [];

    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}