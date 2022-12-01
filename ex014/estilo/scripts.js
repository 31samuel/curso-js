function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano ){
        window.alert("[ERRO] verifique os dados e tente novamente!")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero =  ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
      if (fsex[0].checked){
        genero = "homem"
        if(idade >=0 && idade < 10){
            //criança
            img.setAttribute("src" , "foto-bebe-m.png")
        }else if (idade < 21){
            //jovem
        }else if (idade < 50){
            //adulto
        }else{
            //idoso
        }

      }else if(fsex[1].checked){
        genero = "mulher"
        if(idade >=0 && idade < 10){
            //criança
        }else if (idade < 21){
            //jovem
        }else if (idade < 50){
            //adulta
        }else{
            //idosa
        }
      }
      res.innerHTML = "Detectamos " +genero +("com") +idade +("anos") +("👩‍❤️‍💋‍👨")
      res.appendChild(img)
}
}