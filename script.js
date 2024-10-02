const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

//laver variabler for at få fat elementer i HTML
const breadcrumbNav = document.getElementById("breadcrumb-list");
const generateButton = document.getElementById("generate-breadcrumb");

// function som skal genere brødkrummesti
function generateBreadcrumbNavigation(breadcrumbArray) {
  breadcrumbNav.innerHTML = ""; //tømmer indholdet i HTML - gør at stien ikke bliver genereret flere gange, efter at man har klikket på knappen

  breadcrumbArray.forEach((item, index) => {
    //jeg tager fat i hvert element i mit array og dets placering
    const listItem = document.createElement("li");

    if (index === breadcrumbArray.length - 1) {
      // Hvis det er det sidste element, skal der ikke være et link
      listItem.textContent = item.name; // Sidste element skal IKKE være et link (name refererer til info i array)
    } else {
      //Hvis det ikke er det sidste element, skal det være et link
      const link = document.createElement("a");
      link.href = item.link;
      link.textContent = item.name;
      listItem.appendChild(link);
    }

    //Hvis det ikke er det sidste element, skal der tilføjes separator (/)
    if (index < breadcrumbArray.length - 1) {
      const separator = document.createElement("span");
      separator.classList.add("separator");
      separator.textContent = "/";
      listItem.appendChild(separator);
    }

    breadcrumbNav.appendChild(listItem);
  });
}

// Event listener til knappen, der genererer brødkrummestien
generateButton.addEventListener("click", () => {
  generateBreadcrumbNavigation(bc);
});
