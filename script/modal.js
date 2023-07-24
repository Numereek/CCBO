const newSalesBtn = document.getElementById("newSalesBtn");
const newProductBtn = document.getElementById("newProductBtn");
const newClientBtn = document.getElementById("newClientBtn");

const clientModalCancel = document.getElementById("clientModalCancel");
const salesModalCancel = document.getElementById("salesModalCancel");
const productModalCancel = document.getElementById("productModalCancel");

newSalesBtn.addEventListener("click", function () {
  salesPagemodalMask.style.display = "block";
});

newProductBtn.addEventListener("click", function () {
  productPagemodalMask.style.display = "block";
});

newClientBtn.addEventListener("click", function () {
  clientPagemodalMask.style.display = "block";
});

clientModalCancel.addEventListener("click", function () {
  clientPagemodalMask.style.display = "none";
});

salesModalCancel.addEventListener("click", function () {
  const insertedInputList = [];

  addAnotherProduct.addEventListener("click", function () {
    clickCount++;
  });

  for (let i = 0; i < clickCount; i++) {
    const insertedInput = document.getElementById(`insertedInput${i}`);
    insertedInputList.push(insertedInput);
  }

  insertedInput1.remove();
  insertedInput2.remove();
  insertedInput3.remove();
  insertedInput4.remove();

  salesPagemodalMask.style.display = "none";
});

productModalCancel.addEventListener("click", function () {
  productPagemodalMask.style.display = "none";
});
