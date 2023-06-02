function calculate(operation) {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var result;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
  }

  document.getElementById('result').innerHTML = "<h3>Resultado: " + result + "</h3>";
}

function calculateTabuada() {
  var num = parseInt(document.getElementById('tabNum').value);
  var tabuada = "";

  for (var i = 1; i <= 10; i++) {
    var result = num * i;
    tabuada += num + " x " + i + " = " + result + "<br>";
  }

  document.getElementById('tabResult').innerHTML = "<h3>Tabuada:</h3>" + tabuada;
}
