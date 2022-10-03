const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientEl = document.querySelector('#ingredients')

const newIngredient = ingredient => {

  return ingredient.map(ingredient => {

    const newItemEl = document.createElement('li');
    newItemEl.textContent = ingredient;
    newItemEl.classList.add('item');
    return newItemEl;

  })

}

const element = newIngredient(ingredients)

ingredientEl.append(... element)

console.log(ingredientEl)
