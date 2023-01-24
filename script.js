if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
var counterBox =document.getElementById("counter-wrapper")
var itemsOnCart = document.getElementsByClassName('cart-item-title')
var items = itemsOnCart.length
let heading;

if (items === 0) {
    heading = "No item/s added to cart yet!";
    counterBox.style.display = "none";
} else {
    heading = "Checkout";
    counterBox.style.display = "block";
}
document.getElementById("cart-heading").innerHTML = heading;
console.log(items)


function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-dark')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }


    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

}

function purchaseClicked() {

    var totalCount = document.getElementById("counter").innerHTML = '0'
    var totalCounter = document.getElementById("nav-counter").innerHTML = '0'
    document.getElementById("cart-heading").innerHTML = "Thank You!";

    var resetCounterBox =document.getElementById("counter-wrapper")
    if (totalCount || totalCounter === 0) {
        resetCounterBox.style.display = "none";
     
    } else {
        resetCounterBox.style.display = "block";
    }
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()    
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
    var removeItemNames = document.getElementsByClassName('cart-item-title')
    var removeNumberItemNames = removeItemNames.length
    console.log(removeNumberItemNames)
    document.getElementById("counter").innerHTML = removeNumberItemNames
    document.getElementById("nav-counter").innerHTML = removeNumberItemNames

    var counterContainer = document.getElementById('counter-wrapper')
    var itemsOnCart = document.getElementsByClassName('cart-item-title')
    var items = itemsOnCart.length
    let heading;

    if (items === 0) {
        heading = "No item/s added to cart yet!";
        counterContainer.style.display= 'none'
    } else {
        heading = "Checkout";
        counterContainer.style.display= 'block'
    }
    document.getElementById("cart-heading").innerHTML = heading;
    console.log(items)

}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()

}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }

    function cartNumberofItems() {
        var cartNumberofItems = cartItemNames.length
        console.log(cartNumberofItems)
        document.getElementById("counter").innerHTML = cartNumberofItems
        document.getElementById("nav-counter").innerHTML = cartNumberofItems
    }
    
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-dark" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-dark')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
   
    cartNumberofItems();
    var counterWrapper = document.getElementById('counter-wrapper')
    var itemsOnCart = document.getElementsByClassName('cart-item-title')
    var items = itemsOnCart.length
    let heading;

    if (items === 0) {
        heading = "No item/s added to cart yet!";
        counterWrapper.style.display = "none";
    } else {
        heading = "Checkout";
    }
    document.getElementById("cart-heading").innerHTML = heading;
    counterWrapper.style.display = "block";
    console.log(items)
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('₱', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '₱' + total

}


// Modal Function

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var icon = document.getElementById("icon");
var span = document.getElementById("addtocartclose");


btn.onclick = function () {
    modal.style.display = "block";
    
    var counterContainer = document.getElementById('counter-wrapper')
    var itemsOnCart = document.getElementsByClassName('cart-item-title')
    var items = itemsOnCart.length
    let heading;

    if (items === 0) {
        heading = "No item/s added to cart yet!";
        counterContainer.style.display= 'none'
    } else {
        heading = "Checkout";
        counterContainer.style.display= 'block'
    }
    document.getElementById("cart-heading").innerHTML = heading;
    console.log(items)
}

icon.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



