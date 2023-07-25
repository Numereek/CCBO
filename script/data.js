const productTable = document.getElementById("productTable");
const clientTable = document.getElementById("clientTable");
const salesTable = document.getElementById("salesTable");

const productModalConfirm = document.getElementById("productModalConfirm");
const productInput = document.querySelectorAll(
  ".productModalForm input, textarea"
);

let productList = [];
let productInitStart = 0;

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

  console.log(productReference);
  console.log(productInitStart);

  let row = productTable.insertRow(-1);
  row.insertCell().innerText = "#" + productReference;

  productInput.forEach(function (item) {
    row.insertCell().innerText = item.value;
    productList.push(item.value);
  });
  row.insertCell().innerText = "";
  row.insertCell().innerText = "";
});
