window.addEventListener("load", () => {

  window.scrollTo(0,0);

  const homeLink = document.querySelector('a[href="#inicio"]');
  navlinks.forEach(link => link.classList.remove("ativo"));
  if (homeLink) homeLink.classList.add("ativo");
});