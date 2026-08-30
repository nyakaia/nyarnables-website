const images = document.querySelectorAll(".zoom-img");

images.forEach(img => {

  img.addEventListener("mousemove", (e) => {

    const rect = img.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(2)";

  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
    img.style.transformOrigin = "center";
  });

});