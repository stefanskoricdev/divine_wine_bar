const header = document.querySelector("header");
const mainWrapper = document.querySelector(".main-wrapper");
const homePage = document.getElementById("home-page-wrapper");
const aboutUsPage = document.getElementById("about-us-page-wrapper");
const AboutUsPageContainers = aboutUsPage.querySelectorAll(".container");

const mql = window.matchMedia("(min-width: 768px)");

const hpOptions = {
  threshold: 0,
  rootMargin: "0px",
};
const options = {
  threshold: 0,
  rootMargin: "0% 0% -60% 0%",
};

const homePageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      homePage.classList.add("active");
    }
  });
}, hpOptions);

const aboutUsPageContainerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, options);

homePageObserver.observe(homePage);
AboutUsPageContainers.forEach((container) => {
  aboutUsPageContainerObserver.observe(container);
});

const screenSizeMatch = () => {
  if (mql.matches) {
    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset;
      if (scrollTop === 0) {
        header.classList.remove("active");
        header.style.animation = "header-animation 500ms linear";
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
