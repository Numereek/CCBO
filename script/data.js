/*--------------Client--------------*/
const clientModalConfirm = document.getElementById("clientModalConfirm");
const clientTable = document.getElementById("clientTable");

clientModalConfirm.addEventListener("click", function () {
  const clientList = [];

  class client {
    constructor(clientID, name, cardReceival, phoneNumber, clientEmail) {
      this.clientID = clientID;
      this.name = name;
      this.cardReceival = cardReceival;
      this.phoneNumber = phoneNumber;
      this.clientEmail = clientEmail;
    }
  }

  let clientName = document.getElementById("clientModalName").value;
  let cardReceival = document.getElementById("clientModalcr").value;
  let clientModalphone = document.getElementById("clientModalphone").value;
  let clientModalemail = document.getElementById("clientModalemail").value;

  clientList.push(
    new client(clientName, cardReceival, clientModalphone, clientModalemail)
  );

  let row = clientTable.insertRow(-1);

  let clientIDCell = row.insertCell(0);
  let clientNameCell = row.insertCell(1);
  let cardReceivalCell = row.insertCell(2);
  let clientModalphoneCell = row.insertCell(3);
  let clientModalemailCell = row.insertCell(4);
  let clientModalTransactionCell = row.insertCell(5);
  let clientModalNetPurchassCell = row.insertCell(6);
  let clientModalCommentCell = row.insertCell(7);
  let clientModalActionCell = row.insertCell(8);

  clientIDCell.innerText = "#000000";
  clientNameCell.innerText = clientName;
  cardReceivalCell.innerText = cardReceival;
  clientModalphoneCell.innerText = clientModalphone;
  clientModalemailCell.innerText = clientModalemail;
  clientModalTransactionCell.innerText = "00";
  clientModalNetPurchassCell.innerText = "000.000 MGA";
  clientModalCommentCell.innerText = "";
  clientModalActionCell.innerText = "";

  document.getElementById("clientModalName").value = "";
  document.getElementById("clientModalcr").value = "";
  document.getElementById("clientModalphone").value = "";
  document.getElementById("clientModalemail").value = "";

  clientPagemodalMask.style.display = "none";
});

/*----------------------------*/

/*--------------Product--------------*/
const productModalConfirm = document.getElementById("productModalConfirm");
const productTable = document.getElementById("productTable");

productModalConfirm.addEventListener("click", function () {
  const productList = [];

  class product {
    constructor(
      productID,
      productNname,
      description,
      category,
      supplier,
      unitPrice,
      salesPrice
    ) {
      this.productID = productID;
      this.productNname = productNname;
      this.description = description;
      this.category = category;
      this.supplier = supplier;
      this.unitPrice = unitPrice;
      this.salesPrice = salesPrice;
    }
  }

  const productID = "";
  const productNname = document.getElementById("productModalName").value;
  const description = document.getElementById("productModalDescr").value;
  const category = document.getElementById("productModalCat").value;
  const supplier = document.getElementById("productModalSupp").value;
  const unitPrice = document.getElementById("productModalUnit").value;
  const salesPrice = document.getElementById("productModalPrice").value;

  productList.push(
    new product(
      productNname,
      description,
      category,
      supplier,
      unitPrice,
      salesPrice
    )
  );
  let row = productTable.insertRow(-1);

  let productIDCell = row.insertCell(0);
  let productNnameCell = row.insertCell(1);
  let descriptionCell = row.insertCell(2);
  let categoryCell = row.insertCell(3);
  let supplierCell = row.insertCell(4);
  let unitPriceCell = row.insertCell(5);
  let salesPriceCell = row.insertCell(6);
  let commentCell = row.insertCell(7);
  let actionCell = row.insertCell(8);

  productIDCell.innerText = productID;
  productNnameCell.innerText = productNname;
  descriptionCell.innerText = description;
  categoryCell.innerText = category;
  supplierCell.innerText = supplier;
  unitPriceCell.innerText = "5EUR";
  salesPriceCell.innerText = "000.000 MGA";
  commentCell.innerText = "";
  actionCell.innerText = "";

  document.getElementById("productModalName").value = "";
  document.getElementById("productModalDescr").value = "";
  document.getElementById("productModalCat").value = "";
  document.getElementById("productModalSupp").value = "";
  document.getElementById("productModalUnit").value = "";
  document.getElementById("productModalPrice").value = "";
  productPagemodalMask.style.display = "none";
});

/*----------------------------*/
/*--------------Sales--------------*/
const salesModalConfirm = document.getElementById("salesModalConfirm");
const salesTable = document.getElementById("salesTable");

salesModalConfirm.addEventListener("click", function () {
  const transactionList = [];

  class transaction {
    constructor(
      transactionID,
      transactionDate,
      products,
      totalAmount,
      deliveryService,
      deliveryAddress,
      salesChannel
    ) {
      this.transactionID = transactionID;
      this.transactionDate = transactionDate;
      this.products = products;
      this.totalAmount = totalAmount;
      this.deliveryService = deliveryService;
      this.deliveryAddress = deliveryAddress;
      this.salesModalChannel = salesChannel;
    }
  }

  const transactionDate = document.getElementById("salesModalDate").value;
  const products = document.getElementById("salesModalProduct").value;
  const qt = document.getElementById("salesModalQty").value;
  const productsQts = [];
  productsQts.push(products + " x" + qt);
  console.log(productsQts);

  try {
    var product1 = document.getElementById("salesModalProduct1").value;
    var qt1 = document.getElementById("salesModalQty1").value;
    productsQts.push(product1 + " x" + qt1);

    var product2 = document.getElementById("salesModalProduct2").value;
    var qt2 = document.getElementById("salesModalQty2").value;
    productsQts.push(product2 + " x" + qt2);

    var product3 = document.getElementById("salesModalProduct3").value;
    var qt3 = document.getElementById("salesModalQty3").value;
    productsQts.push(product3 + " x" + qt3);

    var product4 = document.getElementById("salesModalProduct4").value;
    var qt4 = document.getElementById("salesModalQty4").value;
    productsQts.push(product4 + " x" + qt4);

    var product5 = document.getElementById("salesModalProduct5").value;
    var qt5 = document.getElementById("salesModalQty5").value;
    productsQts.push(product5 + " x" + qt5);

    var product6 = document.getElementById("salesModalProduct6").value;
    var qt6 = document.getElementById("salesModalQty6").value;
    productsQts.push(product6 + " x" + qt6);

    var product7 = document.getElementById("salesModalProduct7").value;
    var qt7 = document.getElementById("salesModalQty7").value;
    productsQts.push(product7 + " x" + qt7);

    var product8 = document.getElementById("salesModalProduct8").value;
    var qt8 = document.getElementById("salesModalQty8").value;
    productsQts.push(product8 + " x" + qt8);
  } catch (e) {}

  const totalAmount = document.getElementById("productModalCat").value;
  const deliveryService = document.getElementById("salesModalDlv").value;
  const deliveryAddress = document.getElementById("salesModalAddress").value;
  const salesChannel = document.getElementById("salesModalChannel").value;

  transactionList.push(
    new transaction(
      transactionDate,
      products,
      deliveryService,
      deliveryAddress,
      salesChannel
    )
  );

  let row = salesTable.insertRow(-1);

  let salesIDCell = row.insertCell(0);
  let salesTransactionDateCell = row.insertCell(1);
  let productsCell = row.insertCell(2);
  let salesTotalAmountCell = row.insertCell(3);
  let deliveryServiceCell = row.insertCell(4);
  let deliveryAddressCell = row.insertCell(5);
  let salesChannelCell = row.insertCell(6);
  let salesCommentCell = row.insertCell(7);
  let salesActionCell = row.insertCell(8);

  salesIDCell.innerText = "#000000";
  salesTransactionDateCell.innerText = transactionDate;
  productsCell.innerText = productsQts;
  salesTotalAmountCell.innerText = totalAmount;
  deliveryServiceCell.innerText = deliveryService;
  deliveryAddressCell.innerText = deliveryAddress;
  salesChannelCell.innerText = salesChannel;
  salesCommentCell.innerText = "";
  salesActionCell.innerText = "";

  document.getElementById("salesModalDate").value = "";
  document.getElementById("salesModalProduct").value = "";
  document.getElementById("salesModalQty").value = "";
  document.getElementById("salesModalTotal").value = "";
  document.getElementById("salesModalDlv").value = "";
  document.getElementById("salesModalAddress").value = "";
  document.getElementById("salesModalChannel").value = "";
  closeCancelModal();
});

/*----------------------------*/
/*------------add another product----------------*/
const addAnotherProduct = document.getElementById("addAnotherProduct");
const insertInputPosition = document.getElementById("insertInputPosition");
const salesModalContainer = document.getElementById("salesModalContainer");

let clickCount = 0;
let containerOverflow = 42.5;

function addProductInput() {
  let productInput = ` 
    <div id="insertedInput${clickCount}"> 
            <input type="text" name="salesModalProduct" class="insertedInput" class="salesModalProduct" id="salesModalProduct${clickCount}" placeholder="Product" style="width: 120px">
            <input type="text" name="salesModalQty" class="insertedInput" class="salesModalQty" id="salesModalQty${clickCount}" placeholder="Quantity" style="width: 20px">
    </div>`;
  insertInputPosition.insertAdjacentHTML("afterend", productInput);
}

addAnotherProduct.addEventListener("click", function () {
  clickCount++;
  salesModalContainer.style.height =
    350 + containerOverflow * clickCount + "px";
  addProductInput();
});
