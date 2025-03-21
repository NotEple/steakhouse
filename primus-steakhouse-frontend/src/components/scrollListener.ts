export const handleNavbarScroll = () => {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
      navbar?.classList.add("navbar-scrolled");
      navbar?.classList.remove("navbar-default");
    } else {
      navbar?.classList.add("navbar-default");
      navbar?.classList.remove("navbar-scrolled");
    }
  });
};
