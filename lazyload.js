var ticking = false;
function lazyLoad() {
	var images = document.querySelectorAll('.lazyload');
	if (!images.length) return;
	for (var i=0, nb=images.length ; i <nb ; i++) {
		var img = images[i]
		var rect = img.getBoundingClientRect();
		var isVisible = ((rect.top - window.innerHeight) < 500 && (rect.bottom) > -50 ) ? true : false ;

		if (isVisible) {
			if (!img.src) {
				img.src = img.dataset.src;
				img.classList.remove('lazyload');
			}
		}
	}
}

function scrollHandler() {
	if (ticking) return;
	window.requestAnimationFrame(function() {
		lazyLoad();
		ticking = false
	});
	ticking = true;
}

window.addEventListener("DOMContentLoaded", function() { lazyLoad() });
window.addEventListener("scroll", scrollHandler);