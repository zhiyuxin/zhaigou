window.onload = function () {
	
	var begindel = document.getElementById('begindel');
	var mask1 = document.getElementById('mask1');
	var close = document.getElementById('close');
	var btn = document.getElementById('btn');
	var listdet = document.getElementById('listdet');
	
	begindel.onclick = function(){
		mask1.style.display = 'block';
	};
	close.onclick = function(){
		mask1.style.display = 'none';
	};
	btn.onclick = function () {
		listdet.remove();
		location.href = 'handlist.html';
	}
}