document.addEventListener('click', (e) => {
    let el = e.target;

    if(el.classList.contains('home')) {
        window.location.href = "index.html";
    }

})

function mudarLetra(id_da_div, div_antesUm, div_antesDois){
    let div_escolhida = document.querySelector(id_da_div)
    let div_anteriorUm = document.querySelector(div_antesUm)
    let div_anteriorDois = document.querySelector(div_antesDois)
    div_escolhida.style.display = "flex";
    div_anteriorUm.style.display = "none";
    div_anteriorDois.style.display = "none";
}