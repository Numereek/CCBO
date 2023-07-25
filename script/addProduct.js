const addAnotherProduct = document.getElementById("addAnotherProduct");
const insertInputPosition = document.getElementById("insertInputPosition");
const salesModalContainer = document.getElementById("salesModalContainer");

let clickCount = 0;

function resizeContainer() {
  salesModalContainer.style.height = 350 + 35 * clickCount + "px";
}

function addProductInput() {
  let inputHMTL = `<div id="insertInputPosition">
    <input type="text" name="salesModalProduct" class="salesModalProduct" id="salesModalProduct" placeholder="Product" style="width: 120px">
    <input type="text" name="salesModalQty" class="salesModalQty" id="salesModalQty" placeholder="Quantity" style="width: 20px">
    </div>`;
  if (clickCount < 9) {
    clickCount++;
    insertInputPosition.insertAdjacentHTML("afterend", inputHMTL);
    resizeContainer();
  } else {
    addAnotherProduct.innerText = "⚠ max input number";
    addAnotherProduct.style.color = "red";
    addAnotherProduct.style.textDecoration = "none";
  }
}

addAnotherProduct.addEventListener("click", function () {
  addProductInput();
  console.log(clickCount);
});
