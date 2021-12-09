var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});


var input= document.getElementsByClassName('f-i');
for (var i=0; i<input.length; i++) {
	input[i].addEventListener('keyup', function(){
		if(this.value.length>=1){
			this.nextElementSibling.classList.add('fijar')
		}
		else{
			this.nextElementSibling.classList.remove('fijar')
		}
	})
}

let items = document.querySelectorAll('.carousel .carousel-item')
items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})