let productsContainer = document.getElementById('products');
const getProducts = ()=>{
    return fetch('https://dummyjson.com/products?limit=8')
    .then(response =>response.json())
    .then(response=>response)
    .catch(error=>error.message)
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
    let cost =document.createElement('p')
    
    img.src = item.thumbnail;
    title.innerHTML = item.title;
    userName.innerHTML = item.description;
    cost.innerHTML = item.price;
  

    div.appendChild(img);
    div.appendChild(cost);
    div.appendChild(userName);;
    div.appendChild(title);
    productsContainer.appendChild(div);

})
}
displayProducts();
