const API_URL = "http://localhost:5000/api/products";

async function loadProducts() {

    const response = await fetch(API_URL);
    const products = await response.json();

    const productList = document.getElementById("product-list");

    if(!productList) return;

    productList.innerHTML = "";

    products.forEach((product,index)=>{

        let image="images/laptop.jpg";

        if(index==1) image="images/headphones.jpg";
        if(index==2) image="images/watch.jpg";

        productList.innerHTML+=`

        <div class="card">

        <img src="${image}">

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <h2>₹${product.price}</h2>

        <button onclick="addCart('${product.name}',${product.price})">
        Add To Cart
        </button>

        </div>

        `;

    });

}

function addCart(name,price){

let cart=JSON.parse(localStorage.getItem("cart"))||[];

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Product Added Successfully");

}

loadProducts();