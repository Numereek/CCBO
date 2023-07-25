const modalMask = document.getElementById("modalMask");
const modalActivator = document.querySelectorAll(".modalActivator");

modalActivator.forEach(function (item) {
  item.addEventListener("click", function () {
    modalMask.style.display = "block";
  });
});

const modalCancel = document.querySelectorAll(".modalCancel");

modalCancel.forEach(function (item) {
  item.addEventListener("click", function () {
    modalMask.style.display = "none";
  });
});
