const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstEl = document.createElement('li');
  firstEl.classList.add('item')
  firstEl.textContent = ingredients[0];

  const secEl = document.createElement('li');
  secEl.classList.add('item')
  secEl.textContent = ingredients[1];
  
const trEl = document.createElement('li');
  trEl.classList.add('item')
  trEl.textContent = ingredients[2];
  
const fourEl = document.createElement('li');
  fourEl.classList.add('item')
  fourEl.textContent = ingredients[3];
  
const fivEl = document.createElement('li');
  fivEl.classList.add('item')
  fivEl.textContent = ingredients[4];

  const sixEl = document.createElement('li');
  sixEl.classList.add('item')
  sixEl.textContent = ingredients[5];
  
const listEl = document.querySelector('#ingredients');

listEl.append(firstEl, secEl, trEl, fourEl, fivEl, sixEl);



//ingredients.forEach(ingredient => {

  //const addStringEl = document.createElement('li')
  //addStringEl.classList.add('item')
  //addStringEl.textContent = ingredient;
  
  //list.append(addStringEl);
  //console.log(addStringEl);
//})

//const list = document.querySelector('#ingredients');
//list.append()