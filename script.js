function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


//   Slider
const bg = [
    'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  ]
  
  const slides = document.querySelectorAll(".slide");
  
  slides.forEach((slide, idx) => {
    slide.style.backgroundImage = `url("${bg[idx]}")`;
  
    slide.addEventListener("click", (e) => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    });
  });
  



  