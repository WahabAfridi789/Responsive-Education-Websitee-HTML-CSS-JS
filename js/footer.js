const footerList1 = [
  {
    title: "Afridi Academy",
    link: "#",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.",
  },
];

const footer1 = document.querySelector(".footer__1");

footerList1.forEach((item) => {
  footer1.innerHTML += `
     <a href="${item.link}" class="footer__logo"> <h4>${item.title}</h4> </a>
            <p>${item.text}</p>
        </div>
    `;
});

const footerList2 = [
  {
    headerTitle: "Quick Links",
    links: [
      {
        linkTitle: "Home",
        link: "index.html",
      },
      {
        linkTitle: "About",
        link: "about.html",
      },
      {
        linkTitle: "Courses",
        link: "courses.html",
      },
      {
        linkTitle: "Contact",
        link: "contact.html",
      },
    ],
  },
];

const footer2 = document.querySelector(".footer__2");

footerList2.forEach((item) => {
  footer2.innerHTML += `
    <h4>${item.headerTitle}</h4>

    <div class="permalinks">
            <ul>
            ${item.links
              .map((link) => {
                return `
                    <li><a href="${link.link}">${link.linkTitle}</a></li>
                `;
              })
              .join("")}
            </ul>
        </div>
    `;
});

const footerList3 = [
  {
    headerTitle: "Privacy",
    links: [
      {
        linkTitle: "Terms of Use",
        link: "#",
      },
      {
        linkTitle: "Privacy Policy",
        link: "#",
      },
      {
        linkTitle: "Cookies Policy",
        link: "#",
      },
    ],
  },
];

const footer3 = document.querySelector(".footer__3");

footerList3.forEach((item) => {
  footer3.innerHTML += `
    <h4>${item.headerTitle}</h4>
            <ul class="privacy">
            ${item.links
              .map((link) => {
                return `
                    <li><a href="${link.link}">${link.linkTitle}</a></li>
                `;
              })
              .join("")}
            </ul>
    `;
});

const footerList4 = [
  {
    headerTitle: "Contact Us",
    phoneNumber: "+92 3040030331",
    email: "kwahab214@gmail.com",
    socialLinks: [
      {
        linkTitle: "Facebook",
        link: "#",
        icon: "uil uil-facebook-f",
      },
      {
        linkTitle: "Twitter",
        link: "#",
        icon: "uil uil-twitter-alt",
      },
      {
        linkTitle: "Instagram",
        link: "#",
        icon: "uil uil-instagram",
      },
      {
        linkTitle: "Youtube",
        link: "#",
        icon: "uil uil-youtube",
      },
    ],
  },
];

const footer4 = document.querySelector(".footer__4");

footerList4.forEach((item) => {
  footer4.innerHTML += `
    <h4>${item.headerTitle}</h4>
    <div>
        <p>${item.phoneNumber}</p>
        <p>${item.email}</p>
    </div>
        <ul class="footer__socials">
            ${item.socialLinks
              .map((link) => {
                return `
                <li><a href="${link.link}" class="${link.icon}"></a></li> 
                `;
              })
            .join("")}
        </ul>
    `;
});

const footerCopyRightContent = "Copyright© 2022 Afridi. All Rights Reserved.";

const footer__copyright = document.querySelector(".footer__copyright");

footer__copyright.innerHTML += `
    <small>${footerCopyRightContent}</small>
`;
