const menuEmail = document.querySelector (".navbar-email");
const desktopMenu = document.querySelector (".desktop-menu");
const menuHambIcon = document.querySelector (".menu");
const mobileMenu = document.querySelector (".mobile-menu");
const menuCarritoIcon = document.querySelector (".navbar-shopping-cart");
const aside = document.querySelector (".product-detail");
const cardsContainer = document.querySelector (".cards-container");

menuEmail.addEventListener ("click", toogleDesktopMenu);
menuHambIcon.addEventListener ("click", toogleMobileMenu);
menuCarritoIcon.addEventListener ("click", tooglecarritoaside);


function toogleDesktopMenu () {

    const isCarritoAsideclosed = aside.classList.contains ("inactive");

    if (!isCarritoAsideclosed) {

        aside.classList.add ("inactive");
    }   


    desktopMenu.classList.toggle ("inactive"); //inactive es para que el menu aparezca y desaparezca solo cuando le doy click. hay que ponerlo en el JS y en el html donde corresponde dentro de las comillas 

}

function toogleMobileMenu () {

    const isCarritoAsideclosed = aside.classList.contains ("inactive");

    if (!isCarritoAsideclosed ){

        aside.classList.add ("inactive");

    }

    mobileMenu.classList.toggle ("inactive");

}

function tooglecarritoaside () {

    const ismobileMenuclosed = mobileMenu.classList.contains ("inactive")


    if (!ismobileMenuclosed){

        mobileMenu.classList.add ("inactive");

    }

    aside.classList.toggle ("inactive");

}   

const productList = [];

productList.push ({
    
    name: "Bike",
    price: 120,
    image : "https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push ({
    
        name: "Screen",
        price: 220,
        image : "https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        

})

productList.push ({
    
    name: "Laptop",
    price: 500,
    image : "https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

})


for (product of productList) {

   const productCard = document.createElement ("div");
   productCard.classList.add ("product-card")

   const productImg = document.createElement ("img");
   productImg.setAttribute ("src", product.image);

   const productInfo = document.createElement ("div");
   productInfo.classList.add ("product-info");

   const productInfoDiv = document.createElement ("div");
   

   const productPrice = document.createElement ("p");
   productPrice.innerText = "$" + product.price;
   const productName = document.createElement ("p");
   productName.innerText = product.name;

   productInfoDiv.appendChild (productPrice);
   productInfoDiv.appendChild (productName);

   const productInfoFigure = document.createElement ("figure");
   const productImgCart = document.createElement ("img");
   productImgCart.setAttribute ("src", "./icons/bt_add_to_cart.svg");

   productInfoFigure.appendChild (productImgCart);

   productInfo.appendChild (productInfoDiv);
   productInfo.appendChild (productInfoFigure);

   productCard.appendChild (productImg);
   productCard.appendChild (productInfo);

   cardsContainer.appendChild (productCard);















}