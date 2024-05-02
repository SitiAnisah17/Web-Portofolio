const header-nav = document.getElementById('header'); 
const menu = document.querySelector('.menu'); 

header-nav.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.header-nav-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});
