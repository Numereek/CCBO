const productTable = document.getElementById("productTable");
const clientTable = document.getElementById("clientTable");
const salesTable = document.getElementById("salesTable");

const productModalConfirm = document.getElementById("productModalConfirm");
const clientModalConfirm = document.getElementById("clientModalConfirm");
const salesModalConfirm = document.getElementById("clientModalConfirm");

const productInput = document.querySelectorAll(
  ".productModalForm input, textarea"
);
const clientInput = document.querySelectorAll(
  ".clientModalForm input, .clientModalForm textarea"
);
const salesInput = document.querySelectorAll(
  ".salesModalForm input, .salesModalForm textarea"
);

let productList = [];
let clientList = [];
let transacList = [];
let productInitStart = 0;
let clientInitStart = 0;
let transacInitStart = 0;

productModalConfirm.addEventListener("click", function () {
  let date = new Date().toJSON();
  let productInitStartString = productInitStart.toString();
  let productReference =
    date
      .split("T")
      .join("")
      .split(".")
      .join("")
      .split("-")
      .join("")
      .split(":")
      .join("")
      .substring(0, 12) + productInitStartString.padStart(3, "0");
  productInitStart++;

  let row = productTable.insertRow(-1);
  row.insertCell().innerText = "#P" + productReference;

  productInput.forEach(function (item) {
    row.insertCell().innerText = item.value;
    productList.push(item.value);
  });
  row.insertCell().innerText = "n/a";
  row.insertCell().innerText = "n/a";
});

clientModalConfirm.addEventListener("click", function () {
  let date = new Date().toJSON();
  let clientInitStartString = clientInitStart.toString();
  let clientReference =
    date
      .split("T")
      .join("")
      .split(".")
      .join("")
      .split("-")
      .join("")
      .split(":")
      .join("")
      .substring(0, 12) + clientInitStartString.padStart(3, "0");
  clientInitStart++;

  let row = clientTable.insertRow(-1);
  row.insertCell().innerText = "#C" + clientReference;

  clientInput.forEach(function (item) {
    row.insertCell().innerText = item.value;
    clientList.push(item.value);
  });
  row.insertCell().innerText = "n/a";
  row.insertCell().innerText = "n/a";
  row.insertCell().innerText = "n/a";
  row.insertCell().innerText = "n/a";
});
