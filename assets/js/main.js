const skillsSpans = document.querySelectorAll('.skill > span span')
if(skillsSpans.length > 0){
	skillsSpans.forEach((skill)=>{
		const spanWidth = skill.getAttribute('data-w')
		skill.style.width = `${spanWidth}%`
	})
}

// open aside 
const openEle = document.querySelector('.open-aside')
openEle.addEventListener('click', function(){
	document.querySelector('.aside-section').classList.add('show')
})

// clode aside 
const closeEle = document.querySelector('.close-aside')
closeEle.addEventListener('click', function(){
	document.querySelector('.aside-section').classList.remove('show')
})

// projects info 
const allProjects = [
	{
		id: 0,
		title: 'Simple Landing Page',
		body: `A clean and responsive one-page website built using HTML and CSS. This project was created on **October 31, 2023** as my first hands-on experience in front-end development. It features four essential sections: Services, Portfolio, About, and Contact `,
		category: 1,
		mainImageSrc: 'leon.jpg',
		gallery: ['leon-1.jpg', 'leon-2.jpg', 'leon-3.jpg'],
		repoLink: 'https://github.com/abddalrahman/Simple-Landing-Page',
		liveLink: 'https://abddalrahman.github.io/Simple-Landing-Page/',
		langs: ['HTML', 'CSS']
	},
	{
		id: 1,
		title: 'Kasper Landing Page',
		body: `A detailed and responsive one-page website built using HTML and CSS. This project was created on **November 3, 2023** as a follow-up to my first UI experiment, with a stronger focus on layout structure, content hierarchy, and visual clarity. `,
		category: 1,
		mainImageSrc: 'Kasper.jpg',
		gallery: ['Kasper-1.jpg', 'Kasper-2.jpg'],
		repoLink: 'https://github.com/abddalrahman/Kasper-Landing-Page',
		liveLink: 'https://abddalrahman.github.io/Kasper-Landing-Page/',
		langs: ['HTML', 'CSS']
	},
	{
		id: 2,
		title: 'Basic Landing',
		body: `A single-page static website built using pure HTML and CSS, created on **April 9, 2025** as part of a front-end training assignment at **Al-Mubarmijoon Company**. The page includes five core sections commonly used in personal or business websites. `,
		category: 1,
		mainImageSrc: 'Basic-Landing.jpg',
		gallery: ['Basic-Landing-1.jpg', 'Basic-Landing-2.jpg'],
		repoLink: 'https://github.com/abddalrahman/Basic-Landing',
		liveLink: 'https://abddalrahman.github.io/Basic-Landing/',
		langs: ['HTML', 'CSS']
	},
	{
		id: 3,
		title: 'Extended Landing Page',
		body: `A visually rich and interactive one-page website built using HTML and CSS. Created on **November 3, 2023**, this project explores advanced UI techniques such as creative hover effects, smooth animations, and structured content flow — all crafted without JavaScript. `,
		category: 1,
		mainImageSrc: 'Extended-Landing-Page.jpg',
		gallery: ['Extended-Landing-Page-1.jpg', 'Extended-Landing-Page-2.jpg', 'Extended-Landing-Page-3.jpg'],
		repoLink: 'https://github.com/abddalrahman/Extended-Landing-Page',
		liveLink: 'https://abddalrahman.github.io/Extended-Landing-Page/',
		langs: ['HTML', 'CSS']
	},
	{
		id: 4,
		title: 'Company Hub Platform',
		body: `A multi-page static website built using pure HTML and CSS, designed to simulate an internal platform for managing a company or organization. Created on **November 13, 2023**, this project includes 8 interconnected pages, each representing a core function within a business environment. `,
		category: 1,
		mainImageSrc: 'Company-Hub-Platform.jpg',
		gallery: ['Company-Hub-Platform1.jpg', 'Company-Hub-Platform2.jpg', 'Company-Hub-Platform3.jpg', 'Company-Hub-Platform4.jpg'],
		repoLink: 'https://github.com/abddalrahman/Company-Hub-Platform',
		liveLink: 'https://abddalrahman.github.io/Company-Hub-Platform/',
		langs: ['HTML', 'CSS']
	},
	{
		id: 5,
		title: 'Furniture Landing Page',
		body: `A single-page static website built using pure HTML and CSS, created on **April 19, 2025** as part of a front-end training assignment at **Al-Mubarmijoon Company**. This landing page is designed to showcase furniture products in a clean and visually appealing layout.`,
		category: 1,
		mainImageSrc: 'Furniture-Landing-Page.jpg',
		gallery: ['Furniture-Landing-Page-1.jpg', 'Furniture-Landing-Page-2.jpg', 'Furniture-Landing-Page-3.jpg'],
		repoLink: 'https://github.com/abddalrahman/Furniture-Landing-Page',
		liveLink: 'https://abddalrahman.github.io/Furniture-Landing-Page/',
		langs: ['HTML', 'CSS']
	},
	{
		id: 6,
		title: 'JS First Steps',
		body: `A single-page static website built using pure HTML, CSS, and JavaScript, created on **January 18, 2024** by following a YouTube tutorial. `,
		category: 2,
		mainImageSrc: 'JS-First-Steps.jpg',
		gallery: ['JS-First-Steps-1.jpg', 'JS-First-Steps-2.jpg', 'JS-First-Steps-3.jpg'],
		repoLink: 'https://github.com/abddalrahman/JS-First-Steps',
		liveLink: 'https://abddalrahman.github.io/JS-First-Steps/',
		langs: ['HTML', 'CSS', 'js']
	},
	{
		id: 7,
		title: 'Hosting Landing Page',
		body: `A single-page static website built using HTML, CSS, and JavaScript, created on **May 4, 2025** as part of a front-end training assignment at **Al-Mubarmijoon Company**. This landing page simulates a hosting service website, with a focus on layout structure, interactive behavior, and visual effects. `,
		category: 2,
		mainImageSrc: 'Hosting-Landing-Page.jpg',
		gallery: ['Hosting-Landing-Page-1.jpg', 'Hosting-Landing-Page-2.jpg', 'Hosting-Landing-Page-3.jpg'],
		repoLink: 'https://github.com/abddalrahman/Hosting-Landing-Page',
		liveLink: 'https://abddalrahman.github.io/Hosting-Landing-Page/',
		langs: ['HTML', 'CSS', 'js', 'Swiper.js']
	},
	{
		id: 8,
		title: 'Swiper Examples Page',
		body: `A single-page static website built using pure HTML and CSS, created on **April 23, 2025** as part of a front-end training assignment at **Al-Mubarmijoon Company**. This project focuses on demonstrating multiple configurations and styles of the **Swiper.js** library, rather than on visual design or branding. `,
		category: 2,
		mainImageSrc: 'Swiper-Examples-Page.jpg',
		gallery: ['Swiper-Examples-Page-1.jpg', 'Swiper-Examples-Page-1.jpg'],
		repoLink: 'https://github.com/abddalrahman/Swiper-Examples-Page',
		liveLink: 'https://abddalrahman.github.io/Swiper-Examples-Page/',
		langs: ['HTML', 'CSS', 'js', 'Swiper.js']
	},
	{
		id: 9,
		title: 'Bootstrap Layout Demo',
		body: `A two-page static website built using HTML, CSS, and Bootstrap 5, created on **May 14, 2025** as part of a front-end training assignment at **Al-Mubarmijoon Company**. The site includes a **Home** page and a **Contact Us** page, with a focus on layout structure and component integration rather than specific content. `,
		category: 2,
		mainImageSrc: 'Bootstrap-Layout-Demo.jpg',
		gallery: ['Bootstrap-Layout-Demo.-1.jpg', 'Bootstrap-Layout-Demo.-2.jpg', 'Bootstrap-Layout-Demo.-3.jpg'],
		repoLink: 'https://github.com/abddalrahman/Bootstrap-Layout-Demo',
		liveLink: 'https://abddalrahman.github.io/Bootstrap-Layout-Demo/',
		langs: ['HTML', 'CSS', 'js', 'BootStrap 5']
	},
	{
		id: 10,
		title: 'Tourism Website',
		body: `A two-page static website built using HTML, CSS, Bootstrap 5, and a small amount of JavaScript, created on **May 24, 2025** as part of a front-end training assignment at **Al-Mubarmijoon Company**. The site includes a **Home** page and a **Tours** page, designed to simulate a tourism platform with clean layout and basic interactivity. `,
		category: 2,
		mainImageSrc: 'Tourism-Website.jpg',
		gallery: ['Tourism-Website-1.jpg', 'Tourism-Website-2.jpg', 'Tourism-Website-3.jpg'],
		repoLink: 'https://github.com/abddalrahman/Tourism-Website',
		liveLink: 'https://abddalrahman.github.io/Tourism-Website/',
		langs: ['HTML', 'CSS', 'js', 'BootStrap 5', 'Swiper.js']
	},
	{
		id: 11,
		title: 'Furniture Store',
		body: `A multi-page static website built using HTML, CSS, Bootstrap 5, JavaScript, and local JSON, created on **June 8, 2025** as part of a front-end training assignment at **Al-Mubarmijoon Company**. This project simulates a furniture e-commerce platform with dynamic content rendering, user interaction, and cart management logic. `,
		category: 2,
		mainImageSrc: 'Furniture-Store.jpg',
		gallery: ['Furniture-Store-1.jpg', 'Furniture-Store-2.jpg', 'Furniture-Store-3.jpg', 'Furniture-Store-4.jpg', 'Furniture-Store-5.jpg'],
		repoLink: 'https://github.com/abddalrahman/Furniture-Store',
		liveLink: 'https://abddalrahman.github.io/Furniture-Store/',
		langs: ['HTML', 'CSS', 'js', 'BootStrap 5', 'Swiper.js']
	},
	{
		id: 12,
		title: 'Hangman Game',
		body: `A small-scale web application built using HTML, CSS, and JavaScript, created on August 21, 2024 as part of a personal training exercise. The project implements the classic Hangman game logic, where the player must guess the correct word within a limited number of attempts. `,
		category: 3,
		mainImageSrc: 'Hangman-Game.jpg',
		gallery: ['Hangman-Game-1.jpg', 'Hangman-Game-2.jpg'],
		repoLink: 'https://github.com/abddalrahman/Hangman-Game',
		liveLink: 'https://abddalrahman.github.io/Hangman-Game/',
		langs: ['HTML', 'CSS', 'js']
	},
	{
		id: 13,
		title: 'JavaScript Practice Pack',
		body: `A small-scale web application built using HTML, CSS, and JavaScript, created on **April 13, 2024** as part of a personal training exercise. The project consists of three simple tools designed to strengthen JavaScript fundamentals through practical, real-world scenarios. `,
		category: 3,
		mainImageSrc: 'JavaScript-Practice-Pack.jpg',
		gallery: ['JavaScript-Practice-Pack-1.jpg', 'JavaScript-Practice-Pack-2.jpg'],
		repoLink: 'https://github.com/abddalrahman/JavaScript-Practice-Pack',
		liveLink: 'https://abddalrahman.github.io/JavaScript-Practice-Pack/',
		langs: ['HTML', 'CSS', 'js']
	},
	{
		id: 14,
		title: 'Typing Speed Test',
		body: `A small-scale web application built using HTML, CSS, and JavaScript, created on **April 20, 2024** as part of a personal training exercise. The project simulates a typing speed test with three difficulty levels, where the user must type displayed words correctly within a limited time. `,
		category: 3,
		mainImageSrc: 'Typing-Speed-Test.jpg',
		gallery: ['Typing-Speed-Test-1.jpg', 'Typing-Speed-Test-2.jpg'],
		repoLink: 'https://github.com/abddalrahman/Typing-Speed-Test',
		liveLink: 'https://abddalrahman.github.io/Typing-Speed-Test/',
		langs: ['HTML', 'CSS', 'js']
	},
	{
		id: 15,
		title: 'Quiz App',
		body: `A small-scale web application built using HTML, CSS, and JavaScript, created on **January 25, 2023** as part of a personal training exercise. The project presents a timed multiple-choice quiz focused on HTML fundamentals, with questions and answers loaded dynamically from a separate JSON file. `,
		category: 3,
		mainImageSrc: 'Quiz-App.jpg',
		gallery: ['Quiz-App-1.jpg', 'Quiz-App-2.jpg'],
		repoLink: 'https://github.com/abddalrahman/Quiz-App',
		liveLink: 'https://abddalrahman.github.io/Quiz-App/',
		langs: ['HTML', 'CSS', 'js']
	},
	{
		id: 16,
		title: 'Memory Game',
		body: `A simple web application built using HTML, CSS, and JavaScript, created on **April 13, 2024** as part of a personal training exercise. The project implements the classic **Memory Matching Game**, where the player flips two cards at a time to find matching pairs. The goal is to discover all matching pairs with the fewest possible incorrect attempts.`,
		category: 3,
		mainImageSrc: 'Memory-Game.jpg',
		gallery: ['Memory-Game-1.jpg', 'Memory-Game-2.jpg'],
		repoLink: 'https://github.com/abddalrahman/Memory-Game',
		liveLink: 'https://abddalrahman.github.io/Memory-Game/',
		langs: ['HTML', 'CSS', 'js']
	},
	{
		id: 17,
		title: 'Fetch API',
		body: `A two-page web app built with HTML, CSS, Bootstrap 5, and JavaScript on June 28, 2025. It simulates real API use by fetching articles and usernames from live APIs, then rendering and managing content dynamically across a Home page and an Article Details page.  `,
		category: 3,
		mainImageSrc: 'Fetch-API.jpg',
		gallery: ['Fetch-API-1.jpg', 'Fetch-API-2.jpg', 'Fetch-API-3.jpg'],
		repoLink: 'https://github.com/abddalrahman/Fetch-API',
		liveLink: 'https://abddalrahman.github.io/Fetch-API/',
		langs: ['HTML', 'CSS', 'js', 'BootStrap 5']
	},
	{
		id: 18,
		title: 'React Landing Page',
		body: `A single-page landing website built using React, HTML, CSS, Bootstrap 5 (via React), and Swiper (via React), created on **July 5, 2025** as part of a front-end training assignment at Al-Mubarmijoon Company. The project marks the first practical use of React in a real layout, based on a Figma design. `,
		category: 4,
		mainImageSrc: 'React-Landing-Page.jpg',
		gallery: ['React-Landing-Page-1.jpg', 'React-Landing-Page-2.jpg'],
		repoLink: 'https://github.com/abddalrahman/React-Landing-Page',
		liveLink: 'https://abddalrahman.github.io/React-Landing-Page/',
		langs: ['HTML', 'CSS', 'js', 'Bootstrap React', 'React.js', 'Swiper React']
	},
	{
		id: 19,
		title: 'Articula',
		body: `A full-featured single-page application built using React and supporting libraries, created on **July 15, 2025** as the final project in the **Frontend Development Course by Al-Mubarmijoon Company**. The site allows authenticated users to create, edit, and publish articles, with multiple dynamic pages and routing logic.`,
		category: 4,
		mainImageSrc: 'Articula.jpg',
		gallery: ['Articula-1.jpg', 'Articula-2.jpg', 'Articula-3.jpg', 'Articula-4.jpg', 'Articula-5.jpg', 'Articula-6.jpg', 'Articula-7.jpg', 'Articula-8.jpg', 'Articula-9.jpg', 'Articula-10.jpg', 'Articula-11.jpg'],
		repoLink: 'https://github.com/abddalrahman/Articula',
		liveLink: '',
		langs: ['HTML', 'CSS', 'js', 'Bootstrap React', 'React.js', 'Swiper React', 'Real backend APIs', 'React Router']
	},
]

// display projects
function displayProjects(){

	const cat1ProjContainer = document.querySelector('.category-1')
	const cat2ProjContainer = document.querySelector('.category-2')
	const cat3ProjContainer = document.querySelector('.category-3')
	const cat4ProjContainer = document.querySelector('.category-4')
	
	let allCat1 = ''
	let allCat2 = ''
	let allCat3 = ''
	let allCat4 = ''
	
	allProjects.forEach((project)=>{
		let projDOM = `
		<div class="proj-card overflow-hidden position-relative" data-id=${project.id}>
		<span class="overflow-hidden" >
		<img src="assets/images/${project.mainImageSrc}" alt="${project.title}" loading="lazy">
		</span>	
		<h5 class="position-absolute f-roboto d-flex align-items-center justify-content-center"><span>${project.title}</span></h5>
		</div>
		`
		if(project.category == 1){
			allCat1 += projDOM
		}else if(project.category == 2){
			allCat2 += projDOM
		}else if(project.category == 3){
			allCat3 += projDOM
		}else if(project.category == 4){
			allCat4 += projDOM
		}
	})

	cat1ProjContainer.innerHTML = allCat1;
	cat2ProjContainer.innerHTML = allCat2;
	cat3ProjContainer.innerHTML = allCat3;
	cat4ProjContainer.innerHTML = allCat4;

	scrollToShowImage()
	showDetails()
}

window.addEventListener('load', displayProjects())

// projects cards transition
function scrollToShowImage(){
	const allCardsImages = document.querySelectorAll('.projects .proj-cards .proj-card > span img')
	if(allCardsImages && allCardsImages.length > 0){
		allCardsImages.forEach((image)=>{
			image.addEventListener('load', ()=>{
				let imageHeight = image.offsetHeight;
				image.style.setProperty("transition-duration", `${Math.round(imageHeight/300)}s`);
			})
		})
	}
}

// close cover btn 
function closeCover (){
	document.querySelector('.cover').classList.remove('show')
	setTimeout(()=>{
		document.querySelector('.cover').classList.add('d-none')
	},200)
}

// show project details

function showDetails (){
	const allProjectsInPage = document.querySelectorAll('.proj-card')

	let tec_used = ''
	let gallerySwip = ''
	
	allProjectsInPage.forEach((proj)=>{
		proj.addEventListener('click', function(){
			const prodID = this.getAttribute('data-id')
			const projObject = allProjects[prodID]
			
			document.querySelector('.proj-text-info h2').textContent = projObject.title
			document.querySelector('.proj-text-info p').textContent = projObject.body
			tec_used = ''
			projObject.langs.forEach((lang)=>{
				tec_used += `<li class="py-md-2 px-md-3 py-1 px-2 rounded-1">${lang}</li>`
			})
			document.querySelector('.proj-text-info ul').innerHTML = tec_used
			
			gallerySwip = ''
			projObject.gallery.forEach((image)=>{
				gallerySwip += `
				<div class="swiper-slide">
				<img src="assets/images/${image}" alt="${projObject.title}">
				</div>
				`
			})
			document.querySelector('.proj-imgs .swiper-wrapper').innerHTML = gallerySwip

			document.querySelector('.proj-imgs .btns-container div a:first-of-type').setAttribute('href', projObject.repoLink)
			if(projObject.liveLink != ''){
				document.querySelector('.proj-imgs .btns-container div a:last-of-type').setAttribute('href', projObject.liveLink)
				document.querySelector('.proj-imgs .btns-container div a:last-of-type').classList.remove('no-live')
				document.querySelector('.proj-imgs .btns-container div a:last-of-type').textContent = 'Live Preview'
			}else{
				document.querySelector('.proj-imgs .btns-container div a:last-of-type').removeAttribute('href')
				document.querySelector('.proj-imgs .btns-container div a:last-of-type').classList.add('no-live')
				document.querySelector('.proj-imgs .btns-container div a:last-of-type').textContent = 'No Live Preview Available'
			}
			
			document.querySelector('.cover').classList.remove('d-none')
			
			setTimeout(()=>{
				document.querySelector('.cover').classList.add('show')
			}, 100)
		})
	})
}