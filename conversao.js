function verificarCampo(){
    if(document.forms.conversao.cel.value == ""){
        alert("Preencha o campo!");
        return false;
    }else{
        return true;
    }
}

function converterGrau(){
    if(verificarCampo()){
        var c = document.forms.conversao.cel.value;
        
        var calculo = c * 1.8 + 32;
        
        document.forms.conversao.far.value = calculo;
    }
}
        
function converterFar(){
    if(verificarCampo()){
    var f = document.forms.conversao.far.value;
    var calculo = f -32 / 1.8;
    document.forms.conversao.cel.value = alterar;
    }
}

function alterar(){
    alert("oi");
    var celNovo = document.createElement("input");
    
    celNovo.value = "C";
    
    document.querySelector("#lblfar").replaceChild(celNovo, document.querySelector("#far"));
    //var cel = document.querySelector("#cel");
    
    //cel.parentNode.replaceChild(cel,far);
}

