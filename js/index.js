// // Your code goes here

/* target elements */
const nav = document.querySelectorAll('.nav-link')
const images = document.querySelectorAll('img');
const p = document.querySelectorAll('p');

nav.forEach((navItem) => {
    navItem.addEventListener('click', function() {
        if (navItem.style.background === 'red') {
            navItem.style.background = 'blue';
        } else {
            navItem.style.background = 'red';
        }
    });
})




images.forEach((img) => {
    img.addEventListener('mouseover', function() {
        if (img.style.boxShadow != '0 4px 8px 0') {
            img.style.boxShadow = '0 4px 8px 0';
        } 
    })
    img.addEventListener('mouseout', function() {
        img.style.boxShadow = 'none'
    })
})

p.forEach((text) => {
    text.addEventListener('click', function() {
        text.style.fontSize = '16pt';
    })
})



// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`