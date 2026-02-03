const PRODUCT_URL = "https://dummyjson.com/products";

// function getProducts(url) {
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
    
// }

const getProducts = async(url) => {
    try{
    const response = await fetch(url);
    const data = await response.json();
    displayProducts(data.products);
    }catch(error){
        console.log(error);
    }
}
getProducts(PRODUCT_URL);

const allProducts = document.querySelector(".products")
console.log(productsContainer)

function displayProducts(products){
    console.log(products);
    products.forEach(product => {
        console.log(product);
        const {title, description, price, images}= product;
        const productContainer = document.createElement("div");
        productContainer.innerHTML = `
            <img src="${images}" alt="Tanjiro">
            <p> Product Title: ${title}</p>
            <p> Description: ${description}</p>
            <p> Price: ${price}</p>
            
            `
        allProducts.appendChild(productContainer)
    });
}