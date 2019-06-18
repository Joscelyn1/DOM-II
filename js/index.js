// // Your code goes here

/* target elements */
const nav = document.querySelectorAll('.nav-link')
const images = document.querySelectorAll('img');
const p = document.querySelectorAll('p');
const body = document.querySelector('body');

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
        if (img.style.boxShadow !== '0px 4px 8px 0px') {
            img.style.boxShadow = '0px 4px 8px 0px';
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

    text.add
})

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

body.addEventListener('dblclick', (event) => {
    body.style.background = 'pink';
})

// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`