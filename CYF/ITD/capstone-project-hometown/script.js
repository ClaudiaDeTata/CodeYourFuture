// image carousel
var pictures;

pictures = [
    '/images/ultima-spiaggia-alb.jpg',
    '/images/celle-lig.jpg',
    '/images/varazze.jpg',
    '/images/vado-lig.jpg',
    '/images/bergeggi2.jpg',
    '/images/noli.jpg',
    '/images/varigotti.jpg',
    '/images/finale-lig.jpg',
    '/images/pietra-lig.jpg'
];

let element_carousel = document.getElementById('carousel-pics');
element_carousel.setAttribute("src", pictures[0]);


document.getElementById('button-next').addEventListener('click', (event) => {
  let element_carousel2 = document.getElementById('carousel-pics');
  pictures.push(pictures.shift());
  element_carousel2.setAttribute("src", pictures[0]);

});

document.getElementById('button-prev').addEventListener('click', (event) => {
  let element_carousel3 = document.getElementById('carousel-pics');
  element_carousel3.setAttribute("src", pictures.slice(-1)[0]);
  pictures.unshift(pictures.pop());

});


// click counter
var click_count;

click_count = 0;

document.getElementById('appreciation-button').addEventListener('click', (event) => {
  click_count = (typeof click_count === 'number' ? click_count : 0) + 1;
  event.target.innerText = `${click_count} of you showed their love 😍`;

});