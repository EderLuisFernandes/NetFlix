const btnInfo = document.querySelector("#link-info")
const modal = document.querySelector('#modal')
const close =  document.querySelector(".close")
const btnSonModal =document.querySelector('.botao-som-modal')
const videoModal = document.querySelector('#video-modal')

const btnSon = document.querySelector('.botao-som');
let video = document.querySelector("#video");

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
   
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
  btnSon.addEventListener("click", ()=>{

    if(video.muted == true ){
       video.muted = false
       btnSon.querySelector(".ph-speaker-x").style.display = "none" 
       btnSon.querySelector(".ph-speaker-high").style.display = "inline" 
    }else{
      video.muted = true
        btnSon.querySelector(".ph-speaker-x").style.display = "inline" 
       btnSon.querySelector(".ph-speaker-high").style.display = "none" 
     
    }
    
  })

  btnSonModal.addEventListener('click' ,()=>{
    if(videoModal.muted == true){
      videoModal.muted = false
      btnSonModal.querySelector('.ph-speaker-x').style.display = 'none'
      btnSonModal.querySelector('.ph-speaker-high').style.display = 'inline'
    }else{
      videoModal.muted = true
      btnSonModal.querySelector('.ph-speaker-x').style.display = 'inline'
      btnSonModal.querySelector('.ph-speaker-high').style.display = 'none'
    }
  })
  btnInfo.addEventListener('click',()=>{
    modal.style.display = 'block'
    video.currentTime = 0
    video.pause()
    
  })

  close.addEventListener('click', ()=>{
    modal.style.display = 'none'
    video.currentTime = 0
    video.play()
  })
  
  window.onload  = ()=>{
    setTimeout(()=>{
      const audio = document.querySelector('#audio')
      audio.play()
    }, 4000)
  }