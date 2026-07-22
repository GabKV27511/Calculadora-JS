//parte de colocar os numeros

let visor = document.querySelector("#visorResultados");
let botoes = document.querySelectorAll(".numeros");


botoes.forEach(function(numero){
    numero.addEventListener("click", function(){
        if (visor.innerText === "0") {
            visor.innerText = numero.innerText;
        } else {
            visor.innerText += numero.innerText;
        };
    });
});

// parte dos operadores

operadores = document.querySelectorAll(".operadores");

operadores.forEach(function(operador){
    

    operador.addEventListener("click", function(){
        let listaDeSinais = "+-";
        let ultimoCaractere = visor.innerText.slice(-1);

        if (visor.innerText !== "" && !listaDeSinais.includes(ultimoCaractere)){
            visor.innerText += operador.innerText;
        }
    });
});
