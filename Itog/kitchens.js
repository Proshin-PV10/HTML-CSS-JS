document.addEventListener('DOMContentLoaded', function() {
    var gallery = document.querySelector('.kitchen-gallery');
    var scrollLeftBtn = document.getElementById('scrollLeft');
    var scrollRightBtn = document.getElementById('scrollRight');

    scrollLeftBtn.addEventListener('click', function() {
        gallery.scrollBy({
            top: 0,
            left: -300, 
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', function() {
        gallery.scrollBy({
            top: 0,
            left: 300, 
            behavior: 'smooth'
        });
    });
});
