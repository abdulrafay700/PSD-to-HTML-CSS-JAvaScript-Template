
var navbar = document.querySelector("nav")
document.addEventListener('scroll', () =>{
    if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20 ) {
        navbar.classList.add('newNav'); // adds "blue" class when page is scrolled 20px down
    } 
    else {
        navbar.classList.remove('newNav'); // removes class when page is scrolled back to top
    }
});


// for counter purposes

let animationStarted = false; // Flag to ensure the animation starts only once

document.addEventListener('scroll', () => {
    if (!animationStarted && document.documentElement.scrollTop >= 250) {
        animationStarted = true;
        console.log(document.documentElement.scrollTop);
        let counts = document.querySelectorAll("#number-counter");

        counts.forEach(element => {
            let upto = 0;
            let endValue = parseInt(element.getAttribute("data-target"));
            let time = Math.round(4000 / endValue);

            function updated() {
                upto += 50;
                if (upto >= endValue) {
                    clearInterval(interval);
                    element.innerHTML = endValue; // Set the final value
                } else {
                    element.innerHTML = upto;
                }
            }

            let interval = setInterval(updated, time);
        });
    }
});

// for owl carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 3, //how many cards show per slide
        margin: 20,
        nav:true, 
        navText : ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});



document.querySelector('.menu-icon').addEventListener('click', function () {
    const nav = document.querySelector('nav ul');
    this.classList.toggle('active');
    nav.classList.toggle('active');
});
