const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 600,
    spaceBetween: 100,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});