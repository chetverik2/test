
const scrollArrowClass = document.getElementsByClassName('header-arrow')[0];

scrollArrowClass.addEventListener('click', function (element) {
   console.log(element)
    window.scrollBy({
        top: 700, 
        left: 0,   
        behavior: 'smooth' 
    });
});


