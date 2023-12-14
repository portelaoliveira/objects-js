// Object Literal

const account1 = {
  name_: "Portela",
  accountNumber: "12345678-9",
  balance: 500,
  displayBalance: function () {
    console.log(
      `Account number ${this.accountNumber} has total balance of ${this.balance}`
    );
  },
};

const account2 = {
  name_: "Danilo",
  accountNumber: "4345890-1",
  balance: 50000,
  displayBalance: function () {
    console.log(
      `Account number ${this.accountNumber} has total balance of ${this.balance}`
    );
  },
};

// console.log(account1);
account1.displayBalance();
