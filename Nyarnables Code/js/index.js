const berries = document.querySelectorAll(".berry");
const slides = document.querySelectorAll(".slide");

berries.forEach((berry, index) => {

  berry.addEventListener("mouseenter", () => {
    berry.src = "images/strawberry-bite.png";
  });

  berry.addEventListener("mouseleave", () => {
    if (!berry.classList.contains("active")) {
      berry.src = "images/strawberry.png";
    }
  });

  berry.addEventListener("click", () => {

    berries.forEach(b => {
      b.src = "images/strawberry.png";
      b.classList.remove("active");
    });

    slides.forEach(s => s.classList.remove("active"));

    berry.src = "images/strawberry-bite.png";
    berry.classList.add("active");

    slides[index].classList.add("active");

  });

});

/* ========================= */
/* SUBSLIDE ARROWS */
/* ========================= */

function changePage(direction, section){

  const pages = document.querySelectorAll("." + section + " .subslide");

  let activeIndex = 0;

  pages.forEach((page, i) => {
    if(page.classList.contains("active")){
      activeIndex = i;
    }
  });

  pages[activeIndex].classList.remove("active");

  activeIndex += direction;

  if(activeIndex < 0){
    activeIndex = pages.length - 1;
  }

  if(activeIndex >= pages.length){
    activeIndex = 0;
  }

  pages[activeIndex].classList.add("active");

}