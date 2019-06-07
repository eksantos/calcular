function enviarComentario(){

    if(document.querySelector("textarea").value != ""){
        
        var num = document.getElementsByTagName("p").length;
        
       var p = document.createElement("p");
       p.setAttribute("id", "p"+ (num + 1));
       p.innerHTML = document.querySelector("textarea").value + "<br>";
       document.querySelector("#comentarios").appendChild(p);
       
        var sup = document.createElement("sup");
       sup.innerHTML = document.querySelector("input").value;
       document.querySelector("#p" + (num+1)).appendChild(sup);
       
       document.querySelector("textarea").value = "";
       document.querySelector("input").value = "";
    }
}