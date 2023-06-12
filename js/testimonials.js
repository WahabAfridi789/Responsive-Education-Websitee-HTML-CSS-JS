// Testimonials

const testimonials = [
  {
    avatar: "images/avatar1.jpg",
    name: "Abdul Wahab",
    profession: "Student",
    testimonialsDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, quae.",
  },
  {
    avatar: "images/avatar2.jpg",
    name: "Maouz Anwar",
    profession: "Student",
    testimonialsDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, quae.",
  },
  {
    avatar: "images/avatar3.jpg",
    name: "Abdul Rehman",
    profession: "Student",
    testimonialsDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, quae.",
  },
  {
    avatar: "images/avatar4.jpg",
    name: "Abdul Aziz",
    profession: "Student",
    testimonialsDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, quae.",
  },
  {
    avatar: "images/avatar5.jpg",
    name: "Abdul Qadir",
    profession: "Student",
    testimonialsDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, quae.",
  },
];

document.getElementById("testimonialsList").innerHTML = testimonials
  .map((item) => {
    var { avatar, name, profession, testimonialsDescription } = item;
    return `
    <article class="testimonial swiper-slide">
    <div class="avatar">
        <img src="${avatar}" alt="avatar"/>
    </div>
    <div class="testimonial__info">
        <h3>${name}</h3>
        <small>${profession}</small>
        </div>
        <div class="testimonail__body">
        <p>${testimonialsDescription}</p>
    </div>
    </article>
  `;
  })
  .join("");
