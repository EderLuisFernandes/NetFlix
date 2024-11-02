const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
  
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable:true,
    //   dynamicBullets: true
    // },
  
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
      917:{
        slidesPerview:3
      },
      688:{
        slidesPerview:2
      },
      677:{
        slidesPerview:1
      }
    }
   
  });