var iteration = document.querySelectorAll('.drum').length;

for (let i = 0; i < iteration; i++) {
	document.querySelectorAll('.drum')[i].addEventListener('click', function () {
		drumKit(this.innerHTML);
	});
}

document.addEventListener('keypress', function (event) {
	drumKit(event.key);
});

function drumKit(key) {
	switch (key) {
		case 'w':
			var tom1 = new Audio('sounds/tom-1.mp3');
			tom1.play();
			break;
		case 'a':
			var tom2 = new Audio('sounds/tom-2.mp3');
			tom2.play();
			break;
		case 's':
			var tom3 = new Audio('sounds/tom-3.mp3');
			tom3.play();
			break;
		case 'd':
			var tom4 = new Audio('sounds/tom-4.mp3');
			tom4.play();
			break;
		case 'j':
			var crash = new Audio('sounds/crash.mp3');
			crash.play();
			break;
		case 'k':
			var kick_bass = new Audio('sounds/kick-bass.mp3');
			kick_bass.play();
			break;
		case 'l':
			var snare = new Audio('sounds/snare.mp3');
			snare.play();
			break;

		default:
			console.log(InnerHtml);
	}
}
