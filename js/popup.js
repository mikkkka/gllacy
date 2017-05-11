var open = document.querySelector('.open');
var popup = document.querySelector('.subscription_dialog');
var close = popup.querySelector('.close');
var overlay = document.querySelector('.subscription_dialog_overlay'); 

open.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.remove('closed');
	overlay.classList.remove('closed');
	popup.classList.add('summon');
})

close.addEventListener('click', function() {
	popup.classList.add('closed');
	overlay.classList.add('closed');
	popup.classList.remove('summon');
})