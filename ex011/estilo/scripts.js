
function  calcular(){
  
    var txtv = window.document.querySelector("input#txtvel")
   
    var res = window.document.querySelector("div#res")
   
    var vel = Number(txtv.value)
   

res.innerHTML = ("sua velocidade e de " +vel);
if (vel>60){
    res.innerHTML += "<P>Voce esta <strong>multado</strong por excesso de velocidade"
}
res.innerHTML += "<p>Dirija sempre com cinto de segurança</p>"
}
