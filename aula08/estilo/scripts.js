
 let area = window.document.getElementById("area")
 area.addEventListener("click", clicar)
 area.addEventListener("mouseenter", entrar)
 area.addEventListener("mouseout",sair)


function clicar(){
    area.innerText = "clicou"
    area.style.background = "red"
}
function entrar(){
    area.innerText = "entrou"
    area.style.background = "black"
    area.style.color = "#fff"
}

function sair(){
    area.innerText ="saiu"
    area.style.background = "blue"
}