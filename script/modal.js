const newSalesBtn = document.getElementById("newSalesBtn");
const newProductBtn = document.getElementById("newProductBtn");
const newClientBtn = document.getElementById("newClientBtn");

const clientModalCancel = document.getElementById("clientModalCancel");
const salesModalCancel = document.getElementById("salesModalCancel");
const productModalCancel = document.getElementById("productModalCancel");

const clientModalForm = document.getElementById("clientModalForm");

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
  closeCancelModal();
});

function closeCancelModal() {
  const insertedInputList = [];

  for (let i = 1; i < clickCount; i++) {
    const insertedInput = document.getElementById(`insertedInput${i}`);
    insertedInputList.push(insertedInput);
  }
  clickCount = 0;

  try {
    insertedInput1.remove();
    insertedInput2.remove();
    insertedInput3.remove();
    insertedInput4.remove();
    insertedInput5.remove();
    insertedInput6.remove();
    insertedInput7.remove();
    insertedInput8.remove();
  } catch (err) {
    salesPagemodalMask.style.display = "none";
    salesModalContainer.style.height = "350px";
  }
}

productModalCancel.addEventListener("click", function () {
  productPagemodalMask.style.display = "none";
  salesModalContainer.style.height = "350px";
});
