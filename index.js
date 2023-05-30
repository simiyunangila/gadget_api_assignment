let productsContainer = document.getElementById('products');
const getProducts = ()=>{
    return fetch('https://dummyjson.com/products?limit=8')
    // return fetch('https://dummyjson.com/users?limit=5')
    .then(response =>response.json())
    .then(response=>response)
    .catch(error=>error.message)
    // .then(response=>console.log({response}))
    // .catch(error=>console.log(error))
};
getProducts();

const displayProducts = async()=>{
const products =await getProducts();
console.log(products.products);
products.products.map(item=>{
    let div = document.createElement('div');
    div.className = 'items';
    let img = document.createElement('img');
    let title= document.createElement('h2');
    let userName = document.createElement('p');
    let discount =document.createElement('P')
    let cost =document.createElement('p')
    let rate =document.createElement('p')
    let stoc =document.createElement('p')
    let thumb =document.createElement('p')
// ​​
// rating: 4.69
// ​​
// stock: 94
// ​​
// thumbnail

    img.src = item.images;
    title.innerHTML = item.title;
    userName.innerHTML = item.description;
    discount.innerHTML =item.discountPercentage;
    cost.innerHTML = item.price;
    rate.innerHTML = item.rating;
    stoc.innerHTML = item.stock;
    thumb.innerHTML = item.thumbnail;

    div.appendChild(img);
    div.appendChild(cost);
    div.appendChild(rate);
    div.appendChild(userName);
    div.appendChild(discount);
    div.appendChild(stoc);
    div.appendChild(thumb);
    div.appendChild(title);
    productsContainer.appendChild(div);

})
}
displayProducts();

// function generateProductCards(data) {
//     const productContainer = document.getElementById("product-container");
//     // iterate through the data and create a card for each product
//     data.forEach((product) => {
//       // create a card element
//       const card = document.createElement("div");
//       card.classList.add("product-card");
//       // Set the card content using the product data
//       card.innerHTML = `
//               <img src="${product.thumbnail}" alt="${product.name}" />
//               <h2>${product.title}</h2>
//               <div class='productPrice'>
//               <p>${product.price}</p>
//               <button>ADD TO CART</button>
//               </div>
//           `;
//       // append the card to the product container
//       productContainer.appendChild(card);
//     });
//   }
//   function fetchProducts() {
//     fetch("https://dummyjson.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         // Get the first 8 products from the data
//         const returnedData = data.products.slice(0, 8);
//         // call the function to generate cards
//         generateProductCards(returnedData);
//       });
//   }
//   fetchProducts()