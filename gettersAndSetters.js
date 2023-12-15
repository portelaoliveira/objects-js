class BankAcount {
  _balance = 0;
  constructor(personName, initialBalance, address) {
    this.personName = personName;
    (this._balance = initialBalance), (this.address = address);
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (Math.abs(this._balance - value) > 2000) {
      console.error(
        "Não permitimos saques ou depósitos maiores que 2000.00 reais."
      );
    } else {
      this._balance = value;
    }
  }

  printInfo() {
    console.log(
      `Essa conta pertence a ${this.personName}, residente no endereço ${
        this.address
      } e possui um saldo atual de ${Number(this._balance).toFixed(2)} reais.`
    );
  }
}

const ba1 = new BankAcount("Portela", 2000, "Rua A");
console.log((ba1.balance -= 1990));
console.log(ba1);
