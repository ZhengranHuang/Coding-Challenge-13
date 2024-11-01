//Task2:Fetch Products from the API Using Fetch and Promises
const productList = document.getElementById('productList');
fetch('https://www.course-api.com/javascript-store-products')
.then(response=>{
    if(!response.ok){
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(products => {
products.forEach(product => {
const listItem = document.createElement('li');
//Task3:Display Product Details Dynamically
listItem.innerHTML = `<h1>${product.fields.name}</h2>
<img src="${product.fields.image[0].url}" alt="${product.fields.name}">
<p>Company: ${product.fields.company}</p>
<p>Price: $${product.fields.price}</p>
`;

productList.appendChild(listItem);
});
})
//Task4:Handle Errors Gracefully
.catch(error => {
console.error('Failed to load products. Please try again later.', error);
});
