window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show/hide FAQ answer on click
// const test = document.getElementsByClassName("faq");
// console.log(test);

// show navbar on click
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

const closeMenu = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeMenu);

// store an icon in a variable

// Courses

const allCourses = [
  {
    courseImg: "images/course1.jpg",
    title: "Responsive Social media Website Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    link: "#",
  },
  {
    courseImg: "images/course2.jpg",
    title: "Responsive SmartHome Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    link: "#",
  },

  {
    courseImg: "images/course3.jpg",
    title: "Responsive DashBoard Website Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    link: "#",
  },
  {
    courseImg: "images/course4.jpg",
    title: "Responsive Ecommerce Website Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    link: "#",
  },
  {
    courseImg: "images/course5.jpg",
    title: "Responsive Portfolio Website Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    link: "#",
  },
  {
    courseImg: "images/course6.jpg",
    title: "Responsive Landing Page Website Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    link: "#",
  },
  {
    courseImg: "images/course7.jpg",
    title: "Responsive UI/UX and Fullstack Website Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    link: "#",
  },
  {
    courseImg: "images/course8.jpg",
    title: "Responsive Fastfood Website Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    link: "#",
  },
  {
    courseImg: "images/course9.jpg",
    title: "Responsive Netflix Clone Website Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    link: "#",
  },
  {
    courseImg: "images/course10.jpg",
    title: "Responsive Social media Website Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    link: "#",
  },
  {
    courseImg: "images/course11.jpg",
    title: "Responsive Social media Website Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    link: "#",
  },
  {
    courseImg: "images/course12.jpg",
    title: "Responsive Social media Website Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
    link: "#",
  },
];

const popularCourses = [allCourses[0], allCourses[1], allCourses[2]];

function showCourses(courseType, courseList) {
  document.getElementById(courseType).innerHTML = courseList
    .map((item) => {
      var { courseImg, title, description, link } = item;
      return `
    <article class="course">
    <div class="course__image">
    <img src="${courseImg}" alt="course"/>
    </div>
    <div class="course__info">
        <h4>${title}</h4>
        <p>${description}</p>
        <a href="${link}" class="btn btn-primary">Learn More</a>
    </div>
    </article>
    `;
    })
    .join("");
}

console.log(document.title);
if (document.title === "Home") {
  showCourses("popularCourses", popularCourses);
} else if (document.title === "Courses") {
  showCourses("allCourses", allCourses);
}
