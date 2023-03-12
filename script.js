// Get the button element
var btn = document.querySelector('.btn');

// Attach an event listener to the button element
btn.addEventListener('click', function(event) {
	// Prevent the default action of the button
	event.preventDefault();
	
	// Scroll to the products section
	document.querySelector('.products').scrollIntoView({ 
		behavior: 'smooth' 
	});
});
