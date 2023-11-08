document.addEventListener("click", function(e) {
	let m = document.getElementById('menu');
	if (e.target.id != 'test' && e.target.id != 'menu') {
		m.style.display = 'none';
	}
	else if (e.target.id == 'test') {
		m.style.display = (m.style.display != 'block') ? 'block' : 'none';
	}
});