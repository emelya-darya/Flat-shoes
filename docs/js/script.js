const wishlistHeaderTable = document.querySelector('.wishlist-header__table');
const cartHeaderTable = document.querySelector('.cart-header__table');
const headerWishlist = document.querySelector('.header__wishlist');
const headerCart = document.querySelector('.header__cart');


wishlistHeaderTable.addEventListener('click', () => {
	headerWishlist.classList.add('_active')
	headerCart.classList.remove('_active')
});

cartHeaderTable.addEventListener('click', () => {
	headerWishlist.classList.remove('_active')
	headerCart.classList.add('_active')
})

const wishlistHeaderItem = document.querySelectorAll('.wishlist-header__item');
const cartHeaderItem = document.querySelectorAll('.cart-header__item');
const headerEmptySlot = document.querySelectorAll('.header__empty-slot')

wishlistHeaderItem.forEach((el) => {
	if (!el.querySelector('a')) { 
		el.querySelector('.header__empty-slot').classList.add('_active')
	}
});

cartHeaderItem.forEach((el) => {
	if (!el.querySelector('a')) {
		el.querySelector('.header__empty-slot').classList.add('_active')
	}
});


const headerService = document.querySelector('.header__service');
const headerLoginRegister = document.querySelector('.header__login-register');
console.log(window.innerWidth)
if (window.innerWidth <= 530) {
	headerService.innerHTML = '';
	headerLoginRegister.innerHTML = '';
};


// Slider featured-arrivals



//Начнем с конца - делегируем событие

const faItems = document.querySelector('.featured-arrivals__items');

faItems.addEventListener('click', (event) => {
	if (event.target.closest('.featured-arrivals__item-btn-prev')){
		const fotosSet = event.target.nextElementSibling.children //получен тот самый контейнер с фотками в виде коллекции
		const fotos = Array.from(fotosSet)
		
		const startFoto = fotos[0].parentElement.querySelector('._visible')
		const prevFoto = startFoto.previousElementSibling

		if (!prevFoto) {
			startFoto.classList.remove('_visible')
			startFoto.parentElement.lastElementChild.classList.add('_visible')
		} else {
			startFoto.classList.remove('_visible')
			prevFoto.classList.add('_visible')
		}
	}

	if (event.target.closest('.featured-arrivals__item-btn-next')) {
		const fotosSet = event.target.previousElementSibling.children //получен тот самый контейнер с фотками в виде коллекции
		const fotos = Array.from(fotosSet) // коллекция превращена в массив

		const startFoto = fotos[0].parentElement.querySelector('._visible') // получен тег с изображением, которое сейчас показывается
		const nextFoto = startFoto.nextElementSibling

		if (!nextFoto) {
			startFoto.classList.remove('_visible')
			startFoto.parentElement.firstElementChild.classList.add('_visible')
		} else {
			startFoto.classList.remove('_visible')
			nextFoto.classList.add('_visible')
		}
	}

})


