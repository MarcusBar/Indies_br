document.addEventListener('click', (e) => {
    let el = e.target;

    if(el.id === 'historiaParaCacadores'){
        window.location.href = "historiaParaCacadores.html";
    }
})

var btnHome = document.getElementById('btn-home');
var bntSobreNos = document.getElementById('btn-sobrenos');
var bntNovidades = document.getElementById('btn-novidades');
var bntMusica = document.getElementById('btn-musica');

bntMusica.addEventListener('click', () =>{

    document.getElementById('parteDaMusica').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})