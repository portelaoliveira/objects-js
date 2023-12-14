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
// account1.displayBalance();

// Função Fábrica - Factory Function

function createAccount(userName, accountNumber, initialBalance) {
  return {
    name_: userName,
    accountNumber,
    balance: initialBalance,
    displayBalance: function () {
      console.log(
        `Account number ${this.accountNumber} has total balance of ${this.balance}`
      );
    },
  };
}

const accountFunction = createAccount("Portela", "4345890-1", 500);

console.log(accountFunction);
accountFunction.displayBalance();
