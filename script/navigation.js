const searchPage = document.getElementById("searchPage");
const clientPage = document.getElementById("clientPage");
const productPage = document.getElementById("productPage");
const salesPage = document.getElementById("salesPage");

const clientModal = document.getElementById("clientModal");
const salesModal = document.getElementById("salesModal");
const productModal = document.getElementById("productModal");

const navSearch = document.getElementById("navSearch");
const navSales = document.getElementById("navSales");
const navProduct = document.getElementById("navProduct");
const navClient = document.getElementById("navClient");

navSearch.addEventListener("click", () => {
  searchPage.style.display = "block";
  clientPage.style.display = "none";
  productPage.style.display = "none";
  salesPage.style.display = "none";
});

navSales.addEventListener("click", () => {
  searchPage.style.display = "none";
  clientPage.style.display = "none";
  productPage.style.display = "none";
  salesPage.style.display = "block";

  clientModal.style.display = "none";
  salesModal.style.display = "inline-block";
  productModal.style.display = "none";
});
navProduct.addEventListener("click", () => {
  searchPage.style.display = "none";
  clientPage.style.display = "none";
  productPage.style.display = "block";
  salesPage.style.display = "none";

  clientModal.style.display = "none";
  salesModal.style.display = "none";
  productModal.style.display = "inline-block";
});

navClient.addEventListener("click", () => {
  searchPage.style.display = "none";
  clientPage.style.display = "block";
  productPage.style.display = "none";
  salesPage.style.display = "none";

  clientModal.style.display = "inline-block";
  salesModal.style.display = "none";
  productModal.style.display = "none";
});
