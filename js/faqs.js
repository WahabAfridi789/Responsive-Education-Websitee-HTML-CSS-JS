const faqsList = [
  {
    icon: "uil uil-plus",
    question: "Can I access Udemy courses on my mobile device?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },
  {
    icon: "uil uil-plus",
    question: "What is the difference between free and paid account?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },
  {
    icon: "uil uil-plus",
    question: "What is the difference between a free and paid account?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },

  {
    icon: "uil uil-plus",
    question: "Can I get a refund if I'm not satisfied with a course?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },
  {
    icon: "uil uil-plus",
    question: " Can I download course materials to access offline?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },
  {
    icon: "uil uil-plus",
    question: "How do i know the right course for me?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },
  {
    icon: "uil uil-plus",
    question: "What is the difference between a free and paid account?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },
  {
    icon: "uil uil-plus",
    question: "Can I get a refund if I'm not satisfied with a course?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },

  {
    icon: "uil uil-plus",
    question: "Can I get a refund if I'm not satisfied with a course?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },

  {
    icon: "uil uil-plus",
    question: "What is the difference between a free and paid account?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },
];

document.getElementById("faqss").innerHTML = faqsList
  .map((item) => {
    var { icon, question, answer } = item;
    return `
    <article class="faq ">
        <div class="faq__icon"><i class="uil uil-plus"></i> </div>
        <div class="question__answer">
        <h4>${question}</h4>
        <p>${answer}</p>
        </div>
    </article>`;
  })
  .join("");


  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      console.log("clicked");
      faq.classList.toggle("open");

      const icon = faq.querySelector(".faq__icon i");
      if (icon.className === "uil uil-plus") {
        icon.className = "uil uil-minus";
      } else {
        icon.className = "uil uil-plus";
      }
    });
  });
