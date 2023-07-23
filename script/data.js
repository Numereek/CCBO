const productList = [];
const transactionList = [];

/*--------------Client--------------*/
const clientModalConfirm = document.getElementById("clientModalConfirm");
const clientName = "";

clientModalConfirm.addEventListener("click", function () {
  const clientList = [];
  class client {
    constructor(name, cardReceival, phoneNumber, clientEmail) {
      this.name = name;
      this.cardReceival = cardReceival;
      this.phoneNumber = phoneNumber;
      this.clientEmail = clientEmail;
    }
  }

  const clientName = document.getElementById("clientModalName").value;
  const cardReceival = document.getElementById("clientModalcr").value;
  const clientModalphone = document.getElementById("clientModalphone").value;
  const clientModalemail = document.getElementById("clientModalemail").value;

  clientList.push(
    new client(clientName, cardReceival, clientModalphone, clientModalemail)
  );

  console.log(clientList[0]);
});
