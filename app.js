// Hamburger
const toggleBtn = document.getElementsByClassName('toggle')[0];
const fourMenu = document.getElementsByClassName('four-menu')[0];
toggleBtn.addEventListener('click', () => {
  fourMenu.classList.toggle('active');
});
const crossBtn = document.getElementsByClassName('cross')[0];
crossBtn.addEventListener('click', () => {
  fourMenu.classList.remove('active');
});
fourMenu.addEventListener('click', () => {
  fourMenu.classList.remove('active');
});

// Window popup
const cards = [
  {
    name: 'To Do List App',
    description: "This 'To-do list' app has been thoughtfully designed to cater to your needs.",
    description2: 'It allows you to effortlessly add your daily tasks, conveniently edit them, and easily delete those tasks that you have completed.',
    image: './images/todolist.png',
    languages: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    seeLive: 'https://mryeminthu.github.io/To-Do-list/dist/',
    seeSource: 'https://github.com/mryeminthu/To-Do-list',
  },
  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'images/art.png',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    seeLive: 'https://mryeminthu.github.io/Portfolio/',
    seeSource: 'https://github.com/mryeminthu/Portfolio',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'images/art2.png',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    seeLive: 'https://mryeminthu.github.io/Portfolio/',
    seeSource: 'https://github.com/mryeminthu/Portfolio',
  },
  {
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'images/art1.png',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    seeLive: 'https://mryeminthu.github.io/Portfolio/',
    seeSource: 'https://github.com/mryeminthu/Portfolio',
  },
  {
    name: 'Profesional Art Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'images/art3.png',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    seeLive: 'https://mryeminthu.github.io/Portfolio/',
    seeSource: 'https://github.com/mryeminthu/Portfolio',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'images/art2.png',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    seeLive: 'https://mryeminthu.github.io/Portfolio/',
    seeSource: 'https://github.com/mryeminthu/Portfolio',
  },
  {
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'images/art1.png',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    seeLive: 'https://mryeminthu.github.io/Portfolio/',
    seeSource: 'https://github.com/mryeminthu/Portfolio',
  },
];

const popupContainer = document.querySelector('.popup-container');
const plusBtn = popupContainer.querySelector('.plus');
const popup = (card) => {
  const popupContain = document.querySelector('.popup-contain');
  popupContain.querySelector('.popup-title').textContent = card.name;
  popupContain.querySelector('.popup-description').textContent = card.description;
  popupContain.querySelector('.popup-description2').textContent = card.description2;
  const popupBtns = popupContain.querySelector('.popup-btns');
  popupBtns.innerHTML = '';
  for (let i = 0; i < card.languages.length; i += 1) {
    const language = card.languages[i];
    const list = document.createElement('li');
    list.className = 'popup-btn';
    list.textContent = language;
    popupBtns.appendChild(list);
  }
  popupContain.querySelector('.see-source').href = card.seeSource;
  popupContain.querySelector('.see-live').href = card.seeLive;
  popupContain.querySelector('.popup-image').src = card.image;
};

const plusSign = () => {
  popupContainer.style.display = 'none';
};

plusBtn.addEventListener('click', plusSign);
window.addEventListener('click', (listen2) => {
  if (listen2.target === popupContainer) {
    plusSign();
  }
});

const clickPopups = document.querySelectorAll('.click-popup');
for (let i = 0; i < clickPopups.length; i += 1) {
  clickPopups[i].addEventListener('click', (event) => {
    popupContainer.style.display = 'block';
    popupContainer.style.position = 'fixed';
    const respectiveContent = cards[event.currentTarget.dataset.position];
    popup(respectiveContent);
    window.scrollTo(0, 0);
  });
}

// Validate
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const emailInput = document.getElementById('email');
  const errMsg = document.getElementById('err-msg');
  const sentMsg = document.getElementById('sent-msg');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const isUpperCase = email.toLowerCase() !== email;
    if (isUpperCase) {
      errMsg.classList.remove('hidden-msg');
      sentMsg.classList.add('sent-msg');
      emailInput.style.border = '3px solid red';
    } else {
      errMsg.classList.add('hidden-msg');
      sentMsg.classList.remove('sent-msg');
      emailInput.style.border = '3px solid green';
      form.submit();
      form.reset();
    }
  });
});
