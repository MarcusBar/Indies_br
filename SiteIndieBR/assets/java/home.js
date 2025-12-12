document.addEventListener('click', (e) => {
    let el = e.target;

    if(el.id === 'historiaParaCacadores'){
        window.location.href = "historiaParaCacadores.html";
    }

    if(el.id === 'tempoDePipa'){
        window.location.href = "tempoDePipa.html";
    }

    if(el.id === 'praticarATeimosia'){
        window.location.href = "praticarTeimosia.html";
    }
})

var btnHome = document.getElementById('btn-home');
var bntSobreNos = document.getElementById('btn-sobrenos');
var bntNovidades = document.getElementById('btn-novidades');
var bntMusica = document.getElementById('btn-musica');
var bntExplore = document.getElementById('btn-explore')

bntExplore.addEventListener('click', () =>{

    document.getElementById('parteDaMusica').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

bntMusica.addEventListener('click', () =>{

    document.getElementById('parteDaMusica').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

bntSobreNos.addEventListener('click', () =>{

    document.getElementById('sobreNos').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

bntNovidades.addEventListener('click', () =>{

    document.getElementById('novidades').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})