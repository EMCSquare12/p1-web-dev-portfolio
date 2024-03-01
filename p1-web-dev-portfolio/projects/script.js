document.addEventListener("DOMContentLoaded", function () {
  const ul__list = document.getElementById("ul__list");
  const button__toggle = document.getElementById("nav__burger-menu");
  const btn__list = document.querySelectorAll("#btn__list");
  const download__cv__btn = document.getElementById("btn__download-cv");
  const currentYear = new Date().getFullYear();

  let isOpen = false;

  document.getElementById("currentYear").textContent = currentYear;
  const updateSize = () => {
    if (window.innerWidth <= 768) {
      ul__list.style.display = "none";
    } else {
      ul__list.style.display = "flex";
    }
  };

  button__toggle.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      ul__list.style.display = "flex";
    } else {
      ul__list.style.display = "none";
    }
  });
  btn__list.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      const sections = [
        "section__banner",
        "section__about-me",
        "section__skills",
        "section__project",
        "contacts",
      ];

      if (sections[i]) {
        const targetSection = document.getElementById(sections[i]);
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  download__cv__btn.addEventListener("click", () => {
    const pdfFilePath = "./images/Erniel Caalim Resume.pdf";

    fetch(pdfFilePath)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");

        link.download = "Erniel Caalim Resume.pdf";
        link.href = URL.createObjectURL(blob);

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
      })
      .catch((error) => console.error("Error fetching the PDF file:", error));
  });

  window.addEventListener("resize", updateSize);
  
});
