const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient => {

  const addStringEl = document.createElement('li')
  addStringEl.classList.add('item')
  addStringEl.textContent = ingredient;
  const list = document.querySelector('#ingredients');
  list.append(addStringEl);
  console.log(addStringEl);
})

