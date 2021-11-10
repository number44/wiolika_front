import './style.scss';

let ticking = false;
let height =
	document.documentElement.scrollHeight - document.documentElement.clientHeight;
const indicator = document.querySelector('.indicator') as HTMLDivElement;
function doSomething() {
	// Do something with the scroll position
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	const scrolled = (winScroll / height) * 100;

	console.log('scrolled :', scrolled);
	indicator.style.width = `${scrolled}vw`;
}

window.addEventListener('scroll', function () {
	if (!ticking) {
		window.requestAnimationFrame(function () {
			doSomething();
			ticking = false;
		});

		ticking = true;
	}
});

/**
 * navigation
 */

// const hamburger = document.querySelector('#hamburger') as HTMLDivElement;
// const sidenav = document.querySelector('#sidenav') as HTMLDivElement;

// hamburger?.addEventListener('click', () => {
// 	sidenav.classList.toggle('hides');
// });
