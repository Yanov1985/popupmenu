
const allTours  = document.querySelector('.service-menu_header-link')
const popUp  = document.querySelector('.sr-portal-container')
const cross = document.querySelector('.cross')
const frog = document.querySelector('body')

allTours.addEventListener('click', function() {

	popUp.classList.add('visibility-on')
	frog.classList.add('frog')
	
});

cross.addEventListener('click', function() {

	popUp.classList.remove('visibility-on')
	frog.classList.remove('frog')

});