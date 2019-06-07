function verificarLados(){
    if(document.forms.lados.lado1.value == "" || 
        document.forms.lados.lado2.value == "" || 
        document.forms.lados.lado3.value == ""){
        alert("Preencha todos os campos!");
        return false;
    }else{
        return true;
    }
}

function classificarTriangulo(){
    var lado1 = document.forms.lados.lado1.value;
    var lado2 = document.forms.lados.lado2.value;
    var lado3 = document.forms.lados.lado3.value;
    
    if(verificarLados()){
        var pResultado = document.createElement("p");
        document.querySelector("#formulario").removeChild(document.getElementById("frm"));
        if(lado1 == lado2 && lado2 == lado3){
           pResultado.innerHTML = "Triângulo Equilátero"; 
        }
        else{
            if((lado1 == lado2 && lado2 != lado3) || 
                (lado1 == lado3 && lado1 != lado2) ||
                (lado2 == lado3 && lado3 != lado1)){
                    pResultado.innerHTML = "Triângulo Isósceles";
                }
            else{
                if(lado1 != lado2 && lado2 != lado3){
                    pResultado.innerHTML = "Triângulo Escaleno";
                }
            }
        }
        
        document.getElementById("formulario").appendChild(pResultado);
    }
}