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

  let clientIDCell = row.insertCell(0);
  let clientNameCell = row.insertCell(1);
  let cardReceivalCell = row.insertCell(2);
  let clientModalphoneCell = row.insertCell(3);
  let clientModalemailCell = row.insertCell(4);
  let clientModalTransactionCell = row.insertCell(5);
  let clientModalNetPurchassCell = row.insertCell(6);
  let clientModalCommentCell = row.insertCell(7);
  let clientModalActionCell = row.insertCell(8);

  clientIDCell.innerText = "#8916512";
  clientNameCell.innerText = clientName;
  cardReceivalCell.innerText = cardReceival;
  clientModalphoneCell.innerText = clientModalphone;
  clientModalemailCell.innerText = clientModalemail;
  clientModalTransactionCell.innerText = 12;
  clientModalNetPurchassCell.innerText = "200.000 MGA";
  clientModalCommentCell.innerText = "";
  clientModalActionCell.innerText = "";

  console.log(cardReceival);
});
/*----------------------------*/
