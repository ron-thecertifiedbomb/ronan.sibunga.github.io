
var psImages = ["./img/cards/ps4.png", "./img/cards/ps2.png", "./img/cards/ps3.png", "./img/cards/ps1.png"]
var psPrice = [ 15000, 20000, 10000, 50000 ]
var psItem = [ 'PLAYSTATION 5 CONSOLES', 'ACCESSORIES', 'PS5 CONTROLLERS', 'MEMBERSHIP' ]
var  nintendoImages = [ './img/cardtwo/Nintendo.png' , './img/cardtwo/NintendoSwtich.png.png'];
var xboxImages = [ "./img/cards/xb1.png", "./img/cards/xb2.png", "./img/cards/xb3.png","./img/cards/xb4.png", ];
let cardContainer = document.getElementById('modal');


let items = [

     { 
      id: 0,
      image: "./img/cards/ps1.png",
      price: 15000,
      catergory: console,
      button: "ButtonOne",
    },

    { 
      id: 1,
      image: "./img/cards/ps2.png",
      price: 15000,
      catergory: console,
      button: "ButtonTwo",
    },

    { 
      id: 2,
      image: "./img/cards/ps3.png",
      price: 15000,
      catergory: console, 
      button: "ButtonThree",
    },
    { 
      id: 3,
      image: "./img/cards/ps4.png",
      price: 15000,
      catergory: console,
      button: "ButtonFour",
    }


]









// function createNewItemXbox() {

//   for (let i = 0; i < items.length; i++) {    
//   const list =  '<div class="list">' + '<img src="' + `${items[i].image}` + '" width=100px >' + '<p class="card-heading-two">' + `${items[i].price}` + '</p>' + '<div class="button" id="' + `${items[i].id}` + '" >' + '<p class="card-price">' + `${items[i].id}` + '</p>' + '</div>' + '</div>' 
//   listContainer.innerHTML +=  list;
// }
// }


// createNewItemXbox()

for (let i = 0; i < items.length; i++) {               
    const cards =  '<div class="jsgenerated-cards">' + '<img src="' + `${items[i].image}` + '">' + '<p class="card-heading">' + `${items[i].price}` + '</p>' +  '<div class="button" id="' + `${items[i].id}` + '" onclick="createNewItem(this.id)">' + '<p class="card-heading-one">Buttons</p>' + '</div>' + '</div>' 
    cardContainer.innerHTML +=  cards;
}

const buttons = document.getElementsByClassName('button');
let listContainer = document.getElementById('list')


function createNewItemXbox() {
  
  const list =  '<div class="list">' + '<img src="' + `${items[0].image}` + '" width=100px >' + '<p class="card-heading-two">' + `${items[0].price}` + '</p>' + '<div class="button">' + '<p class="card-price">Button</p>' + '</div>' + '</div>' 
  listContainer.innerHTML +=  list;
 
}


const cards = document.getElementsByClassName('card-heading-two');
const remove = document.getElementsByClassName('button');

function createNewItem(clicked_id) {
  const list =  '<div class="list">' + '<img src="' + `${items[clicked_id].image}` + '" width=100px >' + '<p class="card-heading-two">' + `${items[clicked_id].price}` + '</p>' + '<div class="button" id="' + `${items[clicked_id].id}` + '" + onclick="removeItem(this.id)">' + '<p class="card-price">Remove</p>' + '</div>' + '</div>' 
  listContainer.innerHTML +=  list;
  console.log(clicked_id)
}


function removeItem(clicked_id) {
  
  const items = document.getElementsByClassName("list");
  items[clicked_id].remove();
  console.log(clicked_id)
}






























// function createNewItemXbox() {
  
//   var image = document.createElement("IMG");
//   image.setAttribute("width", "100");
//   image.setAttribute("src", xboxImages[1]);
//   image.setAttribute("alt", "ps5");
//   document.getElementById('item-one-ps4').appendChild(image);
//   var p = document.createElement("span")
//   var priceTwo = psPrice[2]
//   document.getElementById('item-one-ps4').appendChild(p).innerHTML = `Price: ${priceTwo}` ;
// }










// const buttons = document.querySelectorAll('.button')
// for (let i = 0; i < buttons.length; i++) {  
//   buttons.style.backgroundColor = "red";
// }











// var newImage = document.createElement("IMG");
// newImage.setAttribute("src", psImages[2]);
// newImage.setAttribute("alt", "xbox");
// document.getElementById('item-two').appendChild(newImage);

// var newImage = document.createElement("IMG");
// newImage.setAttribute("src", psImages[3]);
// newImage.setAttribute("alt", "nintende");
// document.getElementById('item-three').appendChild(newImage);


// const buttons = document.getElementById('create');
// const demo = document.getElementById('demo')


// let newImages = []

// function createNewItem() {
  
//    newImages.push("lamborghini")
//    newImages.push("ferrari")
//    console.log(newImages.length)
// document.getElementById('demo').innerHTML = newImages[0]

// }


// function createNewItemTwo() {
//   newImages.push("lamborghini")
//   console.log(newImages.length)
//   document.getElementById('demo-two').innerHTML = newImages[0]
// }

// console.log(newImages[0])


// console.log(newImages.length)
// console.log(newImages)


//  function createNewItemPs5() {
//   var x = document.createElement("IMG");
//   x.setAttribute("width", "100");
//   x.setAttribute("src", newImages[1]);
//   x.setAttribute("alt", "ps5");
//   document.getElementById('item-one-ps5').appendChild(x);
//   var p = document.createElement("span")
//   var priceOne = psPrice[1]
//   document.getElementById('item-one-ps5').appendChild(p).innerHTML = `Price: ${priceOne}` ;
// }


//  function createNewItemXbox() {
//   var image = document.createElement("IMG");
//   image.setAttribute("width", "100");
//   image.setAttribute("src", xboxImages[1]);
//   image.setAttribute("alt", "ps5");
//   document.getElementById('item-one-ps4').appendChild(image);
//   var p = document.createElement("span")
//   var priceTwo = psPrice[2]
//   document.getElementById('item-one-ps4').appendChild(p).innerHTML = `Price: ${priceTwo}` ;
// }


//  function createNewItemSwitch() {
//   var image = document.createElement("IMG");
//   image.setAttribute("width", "100");
//   image.setAttribute("src", nintendoImages[0]);
//   image.setAttribute("alt", "ps5");
//   document.getElementById('item-one-ps3').appendChild(image);
//   var p = document.createElement("span")
//   var priceThree = psPrice[3]
//   document.getElementById('item-one-ps3').appendChild(p).innerHTML = `Price: ${priceThree}` ;
// }



// // let total = psPrice[0] + psPrice[1] + psPrice[3];
// // let totalPrice = document.getElementById('totalprice');
// // totalPrice.innerHTML = total,




















































// function imgloop()
// {
//   var ar = [];
//   ar.push("./img/cards/ps4.png");
//   ar.push("./img/cards/ps2.png");
//   ar.push("./img/cards/ps1.png");

//   for (i = 0; ar.length > i; i++)
//   {
//     var img = new Image(200, 200);
//     img.src = ar[i];
//     var src = document.getElementById("elementid");
//     // var src = document.querySelectorAll('.image-box');
//     src.appendChild(img);
//   }

// }
  
// function imgloop()
// {
//   var ar = [];
//   ar.push("./img/cards/ps4.png");
//   ar.push("./img/cards/ps2.png");
//   ar.push("./img/cards/ps1.png");

//   for (i = 0; ar.length > i; i++)
//   {
//     var img = new Image(200, 200);
//     img.src = ar[i];
//     var src = document.getElementById("elementid");
//     // var src = document.querySelectorAll('.image-box');
//     src.appendChild(img);
//   }

// }


// const boxes = document.querySelectorAll('.image-box');


// for (let i = 0; i < boxes.length; i++) {
//   // boxes[i].style.backgroundColor = "blue";
// }




// //  


// let div = document.createElement("div")
// let p = document.createElement("p")
// div.append("Some text", p)




// function myFunction() {
//   const boxes = document.querySelectorAll('image-box');

//   for (let i = 0; i < boxes.length; i++) {
//   var x = document.createElement("IMG");
//   x.setAttribute("src", images[0]);
//   x.setAttribute("alt", "ps5");
//   boxes.appendChild(x);
//   }
//  }


// // function myFunction() {

// //   var x = document.createElement("IMG");
// //    x.setAttribute("src", images[0]);
// //    x.setAttribute("alt", "ps5");
// //    document.getElementById('box').appendChild(x);
// // }



// myFunction()






// // function createImage () {
// //   var img = document.createElement('img');
// //   img.src = images[0]
// //   document.getElementById('box-one').appendChild(img);
// //   down.innerHTML = "Image Element Added.";
// // }
// // createImage()


// // // let imageHolder = document.getElementsByClassName(".image-box").document.body.appendChild(x);


// // function myFunction() {
// //   var x = document.createElement("IMG");
// //   // let imageHolder = document.getElementsById("ronan")
// //   x.setAttribute("src", images[0]);
// //   // x.setAttribute("width", "304");
// //   // x.setAttribute("height", "228");
// //    x.setAttribute("alt", "ps5");
// //   //  document.body.appendChild(x);
// //    document.getElementById('ronan').appendChild(x);
// // }
