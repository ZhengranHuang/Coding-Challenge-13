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
listItem.textContent = `${product.fields} - $${product.company}`;
productList.appendChild(listItem);
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});