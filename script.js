//parte de colocar os numeros no visor

let visor = document.querySelector("#visorResultados");
let botoes = document.querySelectorAll(".numeros");

botoes.forEach(function(numero){
    numero.addEventListener("click", function(){
        if ( visor.innerText.length >= 19) {
        return;
    }
        if (visor.innerText === "0") {
            visor.innerText = numero.innerText;
        } else {
            visor.innerText += numero.innerText;
        };
    });
});

// parte dos operadores (colocar na tela e outros bugs)

operadores = document.querySelectorAll(".operadores");

operadores.forEach(function(operador){
    operador.addEventListener("click", function(){
        
        let listaDeSinais = "+-*/";
        let ultimoCaractere = visor.innerText.slice(-1);

        if (visor.innerText !== "" && !listaDeSinais.includes(ultimoCaractere)){
            visor.innerText += operador.innerText;
        }
    });
});

//parte de deletar

let deletar = document.querySelector("#deletarCaractere");

deletar.addEventListener("click", function(){
    visor.innerText = visor.innerText.slice(0, -1);
});

//parte de zerar o visor

let zerar = document.querySelector("#zerarVisor");

zerar.addEventListener("click", function(){
    visor.innerText = "";
});

//parte do botao de igual

let igual = document.querySelector("#igual");

igual.addEventListener("click", function(){
    let expressao = visor.innerText;
    if (expressao !== ""){
        visor.innerText = eval(expressao);
    };
});