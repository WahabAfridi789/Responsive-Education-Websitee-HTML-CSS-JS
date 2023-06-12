
// Categories

const categories = [
  {
    icon: "uil uil-desktop-alt",
    title: "Human Computer Interaction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },
  {
    icon: "uil uil-globe",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },
  {
    icon: "uil uil-atom",
    title: "Data Science",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },
  {
    icon: "uil uil-shield-check",
    title: "Cyber Security",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },
  {
    icon: "uil uil-brain",
    title: "Artificial Intelligence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.  ",
  },
  {
    icon: "uil uil-robot",
    title: "Machine Learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },
];

document.getElementById("categoriesList").innerHTML = categories
  .map((item) => {
    var { icon, title, description } = item;
    return `
    <article class="category">
        <span class="category__icon">
            <i class="${icon}"></i>
        </span>
            <h5 class="course__title">${title}</h5>
            <p class="course__description">${description}</p>
    </article>
    `;
  })
  .join("");
