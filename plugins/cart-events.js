function cartEvent() {
  var buttonReset = document.getElementsByClassName("btn-danger");
  console.log(buttonReset);
  for (var i = 0; i < buttonReset.length; i++) {
    var btn = buttonReset[i];
    btn.addEventListener("click", remove);
  }

  var quantityInput = document.getElementsByClassName("cart-quantity-input");
  for (let index = 0; index < quantityInput.length; index++) {
    var input = quantityInput[index];
    input.addEventListener("change", quantityChange);
  }

  var addToBasket = document.getElementsByClassName("shop-item-button");
  for (let index = 0; index < addToBasket.length; index++) {
    var addButton = addToBasket[index];
    addButton.addEventListener("click", selectElementToAdd);
  }

  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", buttonBuyClicked);
}

function selectElementToAdd(event) {
  var addButton = event.target;
  var shopItem = addButton.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem
    .getElementsByClassName("shop-item-price")[0]
    .innerText.replace("Price: ", "");
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  console.log(title, price, imageSrc);
  addToCartMethod(title, price, imageSrc);
}

function addToCartMethod(title, price, imageSrc) {
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var shopItemsTitles = cartItems.getElementsByClassName("shop-item-title");
  for (let index = 0; index < shopItemsTitles.length; index++) {
    if (shopItemsTitles[index].innerText == title) {
      alert("You already have this image in your basket");
      return;
    }
  }
  var newCartRaw = document.createElement("div");
  newCartRaw.classList.add("cart-row");
  var newCartRawContent = `
          <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" />
          <span class = "shop-item-title" >${title}</span>
          </div>
        
          <span class="cart-price cart-column">${price}</span>
        
          <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1" />
          <button class="btn btn-danger" type="button">reset</button>
          </div>
        </div>`;
  newCartRaw.innerHTML = newCartRawContent;
  //var cartItems = document.getElementsByClassName("cart-items")[0];
  cartItems.append(newCartRaw);
  document.getElementsByClassName("cart-total-price")[0].innerText =
    total() + "€";
  newCartRaw
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", remove);

  newCartRaw
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChange);
}

function quantityChange(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value >= 0) {
    document.getElementsByClassName("cart-total-price")[0].innerText =
      total() + "€";
  } else {
    alert("The quantity should be a positiv integer number!");
    //input.value = 1# always set to 1
  }
}

function remove(event) {
  var butClicked = event.target;
  removeRaw(butClicked)
    .then(() => {
      document.getElementsByClassName("cart-total-price")[0].innerText =
        total() + "€";
      alert("The product will be removed from the busket !");
    })
    .catch(() => {
      console.log("Failed");
    });
}

function removeRaw(butClicked) {
  const promise = new Promise((resolve, reject) => {
    butClicked.parentElement.parentElement.remove();
    resolve();
    setTimeout(() => {
      reject("No response");
    }, 1000);
  });
  return promise;
}

/*function removeRaw(butClicked) {
      return new Promise((resolve, reject) => {
        butClicked.parentElement.parentElement.remove();
        resolve();
      });
    }*/

const total = () => {
  var totalPrice = 0;
  var cartContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartContainer.getElementsByClassName("cart-row");

  for (let i = 1; i < cartRows.length; i++) {
    var priceText = cartRows[i].getElementsByClassName("cart-price")[0]
      .innerText;
    var price = parseFloat(priceText.replace("€", ""));
    var quantity = cartRows[i].getElementsByClassName("cart-quantity-input")[0]
      .value;
    var totalPrice = totalPrice + price * quantity;
  }
  console.log(totalPrice);
  return Math.round(totalPrice * 100) / 100;
};

function buttonBuyClicked() {
  alert("Thanks!!!");
  var cartElements = document.getElementsByClassName("cart-items")[0].children;
  Array.from(cartElements).forEach((element) => {
    element.remove();
  });
  document.getElementsByClassName("cart-total-price")[0].innerText = 0 + "€";
}

export { cartEvent };
