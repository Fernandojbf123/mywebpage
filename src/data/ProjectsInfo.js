const projectName = [
    "Condo Manager",
    "Crypto Quoter",
    "Web design",
    "Budget App",
    "Clients Manager",
    "Vet's Appointment",
    "Memorama",
    "To do list",
    "Guitar LA",
    "Random Projects",
  ]

  const techs = [
    "HTML, CSS, JS, Vite, React, Tailwind CSS, Stripe, React-Router-DOM, Hooks (useEffect, useState, useParams, useNavigate)",
    "HTML, CSS, JS, Vite, React, Styled Components, CryptoCompare API, , States, Props",
    "HTML, CSS, JS, Vite, React, States, Props",
    "HTML, CSS, JS, Vite, React, States, Props",
    "HTML, CSS, JS, Vite, React, Tailwind CSS, JSON Server, Hooks, React-Router-DOM, , States, Props",
    "HTML, CSS, JS, Vite, React, States, Props",
    "HTML, CSS, JS",
    "HTML, CSS, JS",
    "Remix-run,CSS,TailwindCSS, Strapi, PostgreSQL, Cloudinary",
    "HTML, CSS, JS, React, HighCharts, etc",
    ]

  const details = [
    "The Condo Manager is an APP made on demmand for a condo manager. The main idea of the project was to issue condo's monthly fee automatically and to receive payments from condo owners. On the Client's side, the condo owners should be able to pay their maintenance fee using debt or credit cards. While on the admin's side the condo admin shall be able to check which house owner hasn't paid the monthly fee. Also the admin is able to upload houses to the system and to assign a house to a new owner (similar to a cable company monthly billing and payment).",
    "The Crypto quoter APP connects to Crypto Compare API and gets the value of a selected crypto, including its logo image, and other information",
    "Web Design, I've worked as freelancer making web design for GeoMaya, Mi Casa Mi Terreno, and a Local Dentist",
    "This Project lets you handle a budget. Once the budget is set, you can add expenses and the app will compute the available and the total used. This app was made using React with Vite, modals, and LocalStorage. I added a swipe effect with react-swipeable-list. And a progress bar using react-circular-progressbar. These elements were downloaded from www.npmjs.com",
    "This app stores and displays data of clients. This app was made using React with Vite, Tailwind CSS and it uses JSON server as database. It was built using react-router-dom (Outlet, Link, useLocation, useParams), hooks (useState, useEffect) and a Spinner effect when waiting for DB connection.",
    "This Project is an appointment app for a vet. It has a form where you upload the data of the owner and the pet, also the pet’s symptoms. This app was made using React with Vite, Tailwind CSS and LocalStorage. This project is simple and useful for patient control.",
    "Improve your memory by playing some 'MEMORAMA'. This app was made using HTML, CSS and JS. It uses all the basis of DOM manipulation and Event Handlers. It includes a timer and a score system.",
    "A simple but useful app to remind you your pending task.",
    "GuitarLA is a webstore",
    "These are some random projects where I tested: 1- Animations: dinno runner and beating hearth. 2- API connections: Starwars characters listing. 3- Data analysis: Charts."
  ]

  const linktodemo = [
    "",
    "https://graceful-mandazi-ffe61f.netlify.app/",
    "https://melodious-beignet-17ef4d.netlify.app/",
    "https://bellodev.com/details/projects",
    "https://effulgent-puffpuff-0708f4.netlify.app",
    "https://prismatic-sawine-066f99.netlify.app/",   
    "/memorama",
    "https://coruscating-cajeta-1bb9f9.netlify.app/",
    "https://guitar-la-remix-two.vercel.app/",
    "/details/projects",
  ]

import ImgCondo from "/Condo.png"
import ImgCrypto from "/Crypto.png"
import ImgWeb from "/webstyle1.png"
import ImgBudget from "/Budget.png"
import ImgCRM from "/CRM.png"
import ImgVet from "/Vet.png"
import ImgMemo from "/Memory.png"
import ImgTodo from "/Todoapp.png"
import ImgGuitarLA from "/GuitarLA.png"
import ImgRandomProjects from "/RandomProjects.png"


const imgs = [ImgCondo,ImgCrypto,ImgWeb,ImgBudget,ImgCRM,ImgVet,ImgMemo,ImgTodo,ImgGuitarLA, ImgRandomProjects];

export {projectName, techs, details, linktodemo, imgs };
