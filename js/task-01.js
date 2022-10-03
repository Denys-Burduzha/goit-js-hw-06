


// const listEl = document.querySelector('ul#categories');




// const litotal = document.querySelectorAll('.items');
// console.log('Number of categories:', litotal.length);
// // console.log('Number of categories:', litotal.children);



// const title = document.querySelectorAll('h2');
// title.forEach(title => {
//     console.log('Category:', title.textContent);
//     console.log('Elements:',document.querySelector('.items') );
// });


// items.forEach(item => {
//     console.log('Category:',item);
// });


// =====================================================

const counter = parent => { return parent.childElementCount };
const message = elements => {
    elements.forEach(element => {
        const firstElem = element.firstElementChild;
        const secondElem = firstElem.nextElementSibling
        console.log(`Category: ${firstElem.textContent}`);
        console.log(`Elements: ${counter(secondElem)}`);
    });
};
const categories = document.querySelector('#categories');
const subCategories = categories.querySelectorAll('.item');
console.log(`Number of categories: ${counter(categories)}`);
message(subCategories);