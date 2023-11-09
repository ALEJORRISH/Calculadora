var operandor1;
var operandor2;
var operacion;

function Calc(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
  }


//clicks
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}

reset.onclick = function(e){
    resetear();
}

//operador1
suma.onclick = function(e){
    operandor1 = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandor1 = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandor1 = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandor1 = resultado.textContent;
    operacion = "/";
    limpiar();
}

//operador2
igual.onclick = function(e){
    operandor2 = resultado.textContent;
    resolver();
}

function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    operandor1 = 0;
    operandor2 = 0;
    operacion = "";
  }

//Resolver (nueva estructura de switch)
  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandor1) + parseFloat(operandor2);
        break;
  
      case "-":
          res = parseFloat(operandor1) - parseFloat(operandor2);
          break;
  
      case "*":
        res = parseFloat(operandor1) * parseFloat(operandor2);
        break;
  
      case "/":
        res = parseFloat(operandor1) / parseFloat(operandor2);
        break;
    }

    resetear();
    resultado.textContent = res;
  }