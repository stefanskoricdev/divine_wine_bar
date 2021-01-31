const header = document.querySelector("header");
const mql = window.matchMedia("(min-width: 768px)");

const screenSizeMatch = () => {
  if (mql.matches) {
    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset;
      if (scrollTop === 0) {
        header.classList.remove("active");
        header.style.animation = "header-animation 200ms linear";
      } else if (scrollTop > 400) {
        header.classList.add("active");
        header.style.animation = "sticky-header-animation 500ms linear";
      }
    }); //Event changes header element appearance based on scroll position!
  } else {
    return;
  }
};
screenSizeMatch();
window.addEventListener("resize", screenSizeMatch);
