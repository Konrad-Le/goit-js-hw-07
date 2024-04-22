const categories = document.querySelector("#categories");
const menuItems = categories.querySelectorAll('.item')
console.log("Number of categories:", menuItems.length)


menuItems.forEach((category) => {
    const categoriesList = category.querySelector('h2').textContent; 
    const elements = category.querySelectorAll('li').length;
    console.log(`Category: ${categoriesList}`);
    console.log(`Elements: ${elements}`);
      });