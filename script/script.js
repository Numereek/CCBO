const searchPage = document.getElementById("searchPage");
const clientPage = document.getElementById("clientPage");
const salesPage = document.getElementById("salesPage");
const productPage = document.getElementById("productPage");

/*--------------------Nav links variables--------------------*/
const searchPageSearch = document.getElementById("searchPageSearch");
const productPageSearch = document.getElementById("productPageSearch");
const clientPageSearch = document.getElementById("clientPageSearch");
const salesPageSearch = document.getElementById("salesPageSearch");

const searchPageSales = document.getElementById("searchPageSales");
const productPageSales = document.getElementById("productPageSales");
const clientPageSales = document.getElementById("clientPageSales");
const salesPageSales = document.getElementById("salesPageSales");

const searchPageProduct = document.getElementById("searchPageProduct");
const productPageProduct = document.getElementById("productPageProduct");
const clientPageProduct = document.getElementById("clientPageProduct");
const salesPageProduct = document.getElementById("salesPageProduct");

const searchPageClient = document.getElementById("searchPageClient");
const productPageClient = document.getElementById("productPageClient");
const clientPageClient = document.getElementById("clientPageClient");
const salesPageClient = document.getElementById("salesPageClient");

/*--------------------Search Page Nav--------------------*/

searchPageSearch.addEventListener("click", function () {
  searchPage.style.display = "none";
  clientPage.style.display = "none";
  productPage.style.display = "none";
  salesPage.style.display = "grid";
  console.log("searchPageSearch cliqué");
});

searchPageSales.addEventListener("click", function () {
  searchPage.style.display = "none";
  clientPage.style.display = "none";
  productPage.style.display = "none";
  salesPage.style.display = "grid";
  console.log("searchPageSales cliqué");
});
searchPageProduct.addEventListener("click", function () {
  searchPage.style.display = "none";
  clientPage.style.display = "none";
  productPage.style.display = "grid";
  salesPage.style.display = "none";
  console.log("searchPageProduct cliqué");
});
searchPageClient.addEventListener("click", function () {
  searchPage.style.display = "none";
  clientPage.style.display = "grid";
  productPage.style.display = "none";
  salesPage.style.display = "none";
  console.log("searchPageClient cliqué");
});

function navigatePage() {}
