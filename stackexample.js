// Stack e Heap

function comportamentoA() {
  console.log("Estou executando o comportamento A");
  comportamentoB();
  console.log("Finalizei a execução do comportamento A");
}
function comportamentoB() {
  console.log("Estou executando o comportamento B");
  comportamentoC();
  console.log("Finalizei a execução do comportamento B");
}
function comportamentoC() {
  console.log("Estou executando o comportamento C");
  console.log("Finalizei a execução do comportamento C");
}

comportamentoA();
