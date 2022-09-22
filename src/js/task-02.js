const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const allEl = ingredients.map (ingredient => {

  const addStringEl = document.createElement('li');
  addStringEl.classList.add('item');
  addStringEl.textContent = ingredient;
  return addStringEl;
  //console.log(addStringEl);
});
const listEl = document.querySelector('#ingredients');
listEl.append(...allEl);