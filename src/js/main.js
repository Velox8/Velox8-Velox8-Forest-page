document.addEventListener('DOMContentLoaded', function () {
	const burgerBtn = document.querySelector('.burger');
	const navBar = document.querySelector('.nav-mobile');
	const footerYear = document.querySelector('.footer-year');
	const navItem = document.querySelectorAll('.a');
	const menuItems = document.querySelectorAll('.nav-item')
	const scrollSpySections = document.querySelectorAll('.section')


	const handleScrollSpy = () => {
		
	
			const sections = []
	
			scrollSpySections.forEach(section => {
			

				
	
				if(window.scrollY <= section.offsetTop + section.offsetHeight -100) {
					sections.push(section)
				   
					const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)
					
					menuItems.forEach(item => item.classList.remove('active'))
	
					activeSection.classList.add('active')
				}
	
				if ( window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
					const lastSection = document.querySelector('a:last-of-type')
	
					menuItems.forEach(item => item.classList.remove('active'))
	
					lastSection.classList.add('active')
				}
	
			})
		
	}
	
	
	window.addEventListener('scroll', handleScrollSpy)
	

	const addActive = () => {
		navBar.classList.toggle('nav-mobile-active');
	};

	const removeA = () => {
		navBar.classList.remove('nav-mobile-active');
	};
	const handleCurrentYear = () => {
		const year = new Date().getFullYear();
		footerYear.innerText = year;
	};

	handleCurrentYear();

	burgerBtn.addEventListener('click', addActive);
	navItem.forEach((item) => {
		item.addEventListener('click', removeA);
	});
});
