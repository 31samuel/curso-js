function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano ){
        window.alert("[ERRO] verifique os dados e tente novamnete!")
    }else{
        window.alert("tudo OK")
        var fsex = document.getElementsByTagName("radsex")
        var idade = ano - Number(fano.value)
        res.innerHTML ="idade calculada"  +idade +("anos")
        res.style.padding = "20px"
        res.style.background = "blue"
        res.style.color = "#fff"
        res.style.fontSize = "30px"
    }
}