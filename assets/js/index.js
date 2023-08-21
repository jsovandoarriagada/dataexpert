const vscodeScroll = document.querySelectorAll(".vscode__scroll");

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const toggleMobileMenu = () => {
  document.querySelector(".nav__overlay").classList.toggle("active");
  document.querySelector(".burger").classList.toggle("open");
  document.querySelector(".nav__mobile").classList.toggle("active");
};

const vscodeScrollEnter = () => {
  vscodeScroll.forEach((line) => {
    line.style.color = "var(--white)";
  });
};

const vscodeScrollLeave = () => {
  vscodeScroll.forEach((line) => {
    line.style.color = "var(--gray-light)";
  });
};
