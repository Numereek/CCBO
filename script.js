const searchPage = document.getElementById("searchPage");
const clientPage = document.getElementById("clientPage");
const productPage = document.getElementById("productPage");
const salesPage = document.getElementById("salesPage");

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
});
navProduct.addEventListener("click", () => {
  searchPage.style.display = "none";
  clientPage.style.display = "none";
  productPage.style.display = "block";
  salesPage.style.display = "none";
});
navClient.addEventListener("click", () => {
  searchPage.style.display = "none";
  clientPage.style.display = "block";
  productPage.style.display = "none";
  salesPage.style.display = "none";
});
