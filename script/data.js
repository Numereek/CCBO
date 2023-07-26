const productTable = document.getElementById("productTable");
const clientTable = document.getElementById("clientTable");
const salesTable = document.getElementById("salesTable");

const productModalConfirm = document.getElementById("productModalConfirm");
const clientModalConfirm = document.getElementById("clientModalConfirm");
const salesModalConfirm = document.getElementById("salesModalConfirm");

const productInput = document.querySelectorAll(
  ".productModalForm input, textarea"
);
const clientInput = document.querySelectorAll(
  ".clientModalForm input, .clientModalForm textarea"
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

salesModalConfirm.addEventListener("click", function () {
  const salesInput = document.querySelectorAll(".toPick");

  let date = new Date().toJSON();
  let transacInitStartString = transacInitStart.toString();
  let transacReference =
    date
      .split("T")
      .join("")
      .split(".")
      .join("")
      .split("-")
      .join("")
      .split(":")
      .join("")
      .substring(0, 12) + transacInitStartString.padStart(3, "0");
  transacInitStart++;

  let row = salesTable.insertRow(-1);
  row.insertCell().innerText = "#C" + transacReference;

  salesInput.forEach(function (item) {
    row.insertCell().innerText = item.value;
    transacList.push(item.value);
  });
  row.insertCell().innerText = "n/a";
  row.insertCell().innerText = "n/a";

  const productQty = [];
  const products = document.querySelectorAll(".salesModalProduct");
  const qty = document.querySelectorAll(".salesModalQty");

  for (i = 0; i < products.length; i++) {
    productQty.push(products[i].value);
    productQty.push(" x" + qty[i].value + ", ");
  }
  let productQtyText = productQty.join("");
  let productQtyTextLength = productQtyText.length;

  let productQtyTransac = productQtyText.slice(0, productQtyTextLength - 1);

  row.insertCell(2).innerText = productQtyTransac;
});
