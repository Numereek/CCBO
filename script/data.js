const productTable = document.getElementById("productTable");
const clientTable = document.getElementById("clientTable");
const salesTable = document.getElementById("salesTable");

const productModalConfirm = document.getElementById("productModalConfirm");
const productInput = document.querySelectorAll(
  ".productModalForm input, textarea"
);

let productList = [];

productModalConfirm.addEventListener("click", function () {
  let row = productTable.insertRow(-1);
  row.insertCell().innerText = "";

  productInput.forEach(function (item) {
    row.insertCell().innerText = item.value;
    productList.push(item.value);
  });
  row.insertCell().innerText = "";
  row.insertCell().innerText = "";
});
