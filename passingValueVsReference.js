function sum(a, b) {
  a = a + b;
  return a;
}

// Stack - Dados do tipo valor (Gera uma cópia), endereço da variável

let parcel1 = 2;
let parcel2 = 3;

// console.log(sum(parcel1, parcel2));
// console.log(parcel2);

function sum2(obj1, obj2) {
  obj1.value = obj1.value + obj2.value;
  return obj1.value;
}

// Heap - Dados do tipo referência

let obj1 = {
  value: 2,
};
let obj2 = {
  value: 3,
};

console.log(sum2(obj1, obj2));
console.log(obj1.value);
