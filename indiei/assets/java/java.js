function mudarLetra(id_da_div, div_antes){
    let div_escolhida = document.querySelector(id_da_div)
    let div_anterior = document.querySelector(div_antes)
    div_escolhida.style.display = "flex";
    div_anterior.style.display = "none";

}