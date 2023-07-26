const modalMask = document.getElementById("modalMask");
const modalActivator = document.querySelectorAll(".modalActivator");

modalActivator.forEach(function (item) {
  item.addEventListener("click", function () {
    modalMask.style.display = "block";
  });
});

const modalCancel = document.querySelectorAll(".modalCancel");
const formElement = document.querySelectorAll(".formElement");

modalCancel.forEach(function (item) {
  item.addEventListener("click", function () {
    modalMask.style.display = "none";
    formElement.forEach(function (item) {
      item.reset();
    });
  });
});

const salesModalCancel = document.getElementById("salesModalCancel");

salesModalCancel.addEventListener("click", () => {
  for (i = 0; i < clickCount; i++) {
    document.getElementById(`insertedInput${i}`).remove();
  }
  clickCount = 0;
  salesModalContainer.style.height = "350px";
});
