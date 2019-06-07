function verificarCampos(){

    if(document.forms.coeficiente.coeficiente_a.value == "" || 
        document.forms.coeficiente.coeficiente_b.value == "" || 
        document.forms.coeficiente.coeficiente_c.value == ""){
        alert("Preencha todos os campos!");
        return false;
    }else{
        return true;
    }
}

function calcularEquacao(){
    var a = document.forms.coeficiente.coeficiente_a.value;
    var b = document.forms.coeficiente.coeficiente_b.value;
    var c = document.forms.coeficiente.coeficiente_c.value;
    
    if(verificarCampos()){
        var delta = (b * b) - 4 * a * c;
        var pResposta = document.createElement("p");

       document.querySelector("#formulario").removeChild(document.getElementById("frm"));
       
       if(delta < 0){
           //Colocar resposta em um div dinamica
           pResposta.innerHTML = "Não existe raiz";
       } 
       else{
            var raiz1 = (-b + Math.sqrt(delta)) / (2 * a); 
            var raiz2 = (-b - Math.sqrt(delta)) / (2 * a); 
       
            if(delta == 0){
                pResposta.innerHTML = "As raízes é " + raiz1;
            }
            else{
                pResposta.innerHTML = "As raízes são " + raiz1 + " e " + raiz2;

            }
       }
        document.querySelector("#formulario").appendChild(pResposta);

    }

}