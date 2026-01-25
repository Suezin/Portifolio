const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let sectionAtual = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight; 

        if(window.scrollY >= sectionTop - 140){
            sectionAtual = section.getAttribute("id")
        }
    });
    navlinks.forEach(link => {
        link.classList.remove("ativo");

        if(link.getAttribute("href") === `#${sectionAtual}`){
            link.classList.add("ativo");
        }
    });
});
