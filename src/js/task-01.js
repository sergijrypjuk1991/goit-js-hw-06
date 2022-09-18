const allCategory = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategory.length}`);

allCategory.forEach(item => {
    const titleEl = item.querySelector('h2');
    const allLi = item.querySelectorAll('li');
    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${ allLi.length }`);
});



