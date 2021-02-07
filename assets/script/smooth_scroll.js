const navigation = document.querySelector("nav");
const navUl = navigation.querySelector("ul");
navUlLi = navUl.querySelectorAll("li");
const gallery = document.getElementById("gallery-wrapper");

navUlLi.forEach((list) => {
  if (list.hasAttribute("data-handler")) {
    const listDataValue = list.getAttribute("data-handler");
    const element = document.querySelector(listDataValue);
    console.log(element);
    list.addEventListener("click", () => {
      element.scrollIntoView({ behavior: "smooth" });
    });
  } else {
    return;
  }
});
