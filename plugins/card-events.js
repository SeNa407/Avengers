var buttonReset = document.getElementsByClassName("btn-danger");
console.log(buttonReset);

for (var i = 0; i < buttonReset.length; i++) {
  var btn = buttonReset[i];
  btn.addEventListener("click", function (event) {
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
  return totalPrice;
};

function failureCallback(error) {
  console.log("Fehlerhafte Generierung der Audio-Datei: " + error);
}
