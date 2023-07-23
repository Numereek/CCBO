const productList = [];
const transactionList = [];

/*--------------Client--------------*/
const clientModalConfirm = document.getElementById("clientModalConfirm");
const clientTable = document.getElementById("clientTable");
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

  let row = clientTable.insertRow(-1);

  let clientNameCell = row.insertCell(0);
  let cardReceivalCell = row.insertCell(1);
  let clientModalphoneCell = row.insertCell(2);
  let clientModalemailCell = row.insertCell(2);
  let clientModalTransaction = row.insertCell(2);
  let clientModalNetPurchase = row.insertCell(2);

  c1.innerText = "Elon";
  c2.innerText = 45;
  c3.innerText = "Houston";

  console.log(clientList[0]);
});
