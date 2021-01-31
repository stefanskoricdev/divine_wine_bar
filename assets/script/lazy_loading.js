const mainWrapper = document.querySelector(".main-wrapper");
const homePage = document.getElementById("home-page-wrapper");
const aboutUsPage = document.getElementById("about-us-page-wrapper");
const AboutUsPageContainers = aboutUsPage.querySelectorAll(".container");

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
