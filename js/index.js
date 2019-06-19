// // Your code goes here

/* target elements */
const nav = document.querySelectorAll('.nav-link')
const images = document.querySelectorAll('img');
const p = document.querySelectorAll('p');
const body = document.querySelector('body');
const h1 = document.querySelectorAll('h1');
const header = document.querySelector('header');

nav.forEach((navItem) => {
    navItem.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (navItem.style.background === 'red') {
            navItem.style.background = 'blue';
        } else {
            navItem.style.background = 'red';
        }
    });
})

header.addEventListener('click', function(event) {
    header.style.background = 'purple';
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
        alert('are your investments secure? Buy gold! It\'s the safest investment there is! Buy it at the lowest possible price! https://www.bullionvault.com/')
    })

    text.add
})

window.addEventListener('load', (event) => {
    alert('welcome to my page!')
});

body.addEventListener('dblclick', (event) => {
    body.style.background = 'pink';
})

window.addEventListener('scroll', (event) => {
    console.log('the user is scrolling');
});

body.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        console.log('you clicked a');
    }
})

body.addEventListener('keyup', (event) => {
    if (event.key === 'a') {
        console.log('you unclicked a');
    }
})


body.addEventListener('copy', (event) => {

    console.log('you cheated!');

})

body.addEventListener('cut', (event) => {

    console.log("don't cut me");

})
