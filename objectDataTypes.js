function BankAcount(personName, initialBalance, address) {
  this.personName = personName;
  (this.initialBalance = initialBalance), (this.address = address);
}

const acc1 = new BankAcount("portela", 5000, "Rua A");

console.log(acc1);
console.log(typeof acc1);
