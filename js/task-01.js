const listCategores = document.querySelectorAll('.item');
console.log(`Number of categories:`, listCategores.length);

listCategores.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
});

