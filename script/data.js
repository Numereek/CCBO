const productList = [];
const transactionList = [];

/*--------------Client--------------*/
const clientModalConfirm = document.getElementById("clientModalConfirm");
const clientTable = document.getElementById("clientTable");

clientModalConfirm.addEventListener("click", function () {
  const clientList = [];

  class client {
    constructor(name, cardReceival, phoneNumber, clientEmail) {
      this.name = name;
      this.cardReceival = cardReceival;
      this.phoneNumber = phoneNumber;
      this.clientEmail = clientEmail;
    }
  }

  const clientName = document.getElementById("clientModalName").value;
  const cardReceival = document.getElementById("clientModalcr").value;
  const clientModalphone = document.getElementById("clientModalphone").value;
  const clientModalemail = document.getElementById("clientModalemail").value;

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
});

/*----------------------------*/

/*--------------Product--------------*/
const productModalConfirm = document.getElementById("productModalConfirm");
const productTable = document.getElementById("productTable");

productModalConfirm.addEventListener("click", function () {
  const productList = [];

  class product {
    constructor(
      productNname,
      description,
      category,
      supplier,
      unitPrice,
      salesPrice
    ) {
      this.productNname = productNname;
      this.description = description;
      this.category = category;
      this.supplier = supplier;
      this.unitPrice = unitPrice;
      this.salesPrice = salesPrice;
    }
  }

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
  console.log(productList[0]);
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

  productIDCell.innerText = "#000000";
  productNnameCell.innerText = productNname;
  descriptionCell.innerText = description;
  categoryCell.innerText = category;
  supplierCell.innerText = supplier;
  unitPriceCell.innerText = "5EUR";
  salesPriceCell.innerText = "000.000 MGA";
  commentCell.innerText = "";
  actionCell.innerText = "";
});

/*----------------------------*/
/*--------------Sales--------------*/
/*const productModalConfirm = document.getElementById("productModalConfirm");
const productTable = document.getElementById("productTable");

productModalConfirm.addEventListener("click", function () {
  const productList = [];

  class product {
    constructor(
      productNname,
      description,
      category,
      supplier,
      unitPrice,
      salesPrice
    ) {
      this.productNname = productNname;
      this.description = description;
      this.category = category;
      this.supplier = supplier;
      this.unitPrice = unitPrice;
      this.salesPrice = salesPrice;
    }
  }

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
  console.log(productList[0]);
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

  productIDCell.innerText = "#000000";
  productNnameCell.innerText = productNname;
  descriptionCell.innerText = description;
  categoryCell.innerText = category;
  supplierCell.innerText = supplier;
  unitPriceCell.innerText = "5EUR";
  salesPriceCell.innerText = "000.000 MGA";
  commentCell.innerText = "";
  actionCell.innerText = "";
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
    <div>
            <input type="text" name="salesModalProduct" class="salesModalProduct" id="salesModalProduct" placeholder="Product" style="width: 120px">
            <input type="text" name="salesModalQty" class="salesModalQty" id="salesModalQty" placeholder="Quantity" style="width: 20px">
    </div>`;
  insertInputPosition.insertAdjacentHTML("afterend", productInput);
}

addAnotherProduct.addEventListener("click", function () {
  clickCount++;
  salesModalContainer.style.height =
    300 + containerOverflow * clickCount + "px";
  addProductInput();
});
