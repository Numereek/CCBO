const newSalesBtn = document.getElementById("newSalesBtn");
const newProductBtn = document.getElementById("newProductBtn");
const newClientBtn = document.getElementById("newClientBtn");

newSalesBtn.addEventListener("click", function () {
  salesPagemodalMask.style.display = "block";
  console.log("newSalesBtn cliqué");
});

newProductBtn.addEventListener("click", function () {
  productPagemodalMask.style.display = "block";
  console.log("newSalesBtn cliqué");
});

newClientBtn.addEventListener("click", function () {
  clientPagemodalMask.style.display = "block";
  console.log("newSalesBtn cliqué");
});
