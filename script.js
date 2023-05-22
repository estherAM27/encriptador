function encriptarTexto(){
    var areaTexto = document.getElementById("txtArea1");
    var text = areaTexto.value;
    var ara = document.getElementById("txtArea2");
    

    let arreglo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    for(let i = 0; i < arreglo.length; i++){
        if(text.includes(arreglo[i][0]))
            text = text.replaceAll(arreglo[i][0],arreglo[i][1]);
    }
    ara.value=text;

}
function desencriptarTexto(){
    const areaTexto = document.getElementById("txtArea1");
    var text = areaTexto.value; 
    const area = document.getElementById("txtArea2");

    let arreglo = [["ai","a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]];

    for(let i = 0; i < arreglo.length; i++){
        if(text.includes(arreglo[i][0]))
        text=text.replaceAll(arreglo[i][0],arreglo[i][1]);

    }
    area.value=text;

}
function copiarTexto(){
    const areaTexto = document.getElementById("txtArea1");
    
    const area = document.getElementById("txtArea2");

    var text = area.value;
    areaTexto.value=text;
    area.value="";

}
function remplazar(){
    // se obtiene el valor del area de te texto 1 por su id y se le asigna a la variable elemento
    const elemento = document.getElementById("txtArea1");
    // se asigna el valor del text area a la variable texto
    let texto =elemento.value;
    // se evalua el valor del area de texto con la expresion /^[a-z ]*$/, para que acepte solo letras minusculas
    let validar = texto.match(/^[a-z ]*$/);

    // si no es valido se muestra un mensaje de error
    if(!validar){

        alert("Letra no valida");
    }
}

