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
            img.setAttribute("src" , "bebe 2 anos.png")
            res.innerHTML = "Detectamos bebe" +("com") +idade 
          +("anos")
       
    }else if (idade < 21){
            //jovem
            img.setAttribute("src" , "joven-homen.png")
            res.innerHTML = "Detectamos jovem" +("com") +idade 
          +("anos")
        
        
        
        }else if (idade < 50){
            //adulto
            img.setAttribute("src" , "adulto.png")
            res.innerHTML = "Detectamos adulto" +("com")+("com") +idade 
          +("anos")
           img.style.width ="200px"
           img.style.margin = "40px"
           img.style.justifyItems="center"
        }else{
            //idoso
            img.setAttribute("src" , "idoso.png")
            res.innerHTML = "Detectamos idoso" +("com") +idade 
          +("anos")
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
      
      res.appendChild(img)
}
}