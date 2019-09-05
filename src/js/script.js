var asideStep1 = document.querySelector('.header__home-page__aside-step-1');
var asideStep2 = document.querySelector('.header__home-page__aside-step-2');
var asideStep3 = document.querySelector('.header__home-page__aside-step-3');
var workspace = document.querySelector('.header__home-page__aside-step-2__workspace');
var options = document.querySelector('.header__home-page__aside-step-2__workspace__options');

var arrowYellow = document.querySelector('.aside-step-2__arrow-yellow');
var arrowBlue = document.querySelector('.aside-step-3__arrow-blue');


var gradienAsideStep1 = document.querySelector('.header__home-page__image__gradient-step-1');
var gradienAsideStep2 = document.querySelector('.header__home-page__image__gradient-step-2');
var gradienAsideStep3 = document.querySelector('.header__home-page__image__gradient-step-3');

var footerAsideStep1 = document.querySelector('.header__home-page__image__footer');

var userManWhite = document.querySelector('.header__home-page__aside-step-2__workspace__options__user-man-white');
var userManBlack = document.querySelector('.header__home-page__aside-step-2__workspace__options__user-man-black');
var userWomanWhite = document.querySelector('.header__home-page__aside-step-2__workspace__options__user-woman-white');
var userWomanBlack = document.querySelector('.header__home-page__aside-step-2__workspace__options__user-woman-black');

var buttonOptionsAsideStep2OptionA = document.querySelector('.header__home-page__aside-step-2__workspace__options__option-A');
var buttonOptionsAsideStep2OptionB = document.querySelector('.header__home-page__aside-step-2__workspace__options__option-B');

var buttonAsideStep1 = document.querySelector('.header__home-page__aside-step-1__workspace__button');
var buttonAsideStep2 = document.querySelector('.header__home-page__aside-step-2__workspace__button');

var percentOptionA = document.querySelector('.header__home-page__aside-step-2_percent-option-A');
var percentOptionB = document.querySelector('.header__home-page__aside-step-2_percent-option-B');

var genderManInput = document.getElementById('user-man');
var genderWomanInput = document.getElementById('user-woman');
var nameInput = document.getElementById('user-name');
var mailInput = document.getElementById('user-mail');
var passwordInput = document.getElementById('user-password');







buttonAsideStep1.addEventListener('click', function(evt) {
	asideStep1.classList.add('hidden');
	asideStep2.classList.remove('hidden');

	userManBlack.classList.remove('hidden');
	userWomanBlack.classList.remove('hidden');
	userManWhite.classList.add('hidden');
	userWomanWhite.classList.add('hidden');

	gradienAsideStep1.classList.add('hidden');
	gradienAsideStep2.classList.remove('hidden');

	footerAsideStep1.classList.add('footer-step-2');
});


buttonOptionsAsideStep2OptionA.addEventListener('click', function(evt) {
	userManBlack.classList.add('hidden');
	userManWhite.classList.remove('hidden');
	userWomanWhite.classList.add('hidden');
	userWomanBlack.classList.remove('hidden');

	percentOptionA.classList.remove('hidden');
	percentOptionB.classList.add('hidden');

	buttonAsideStep2.classList.remove('hidden');

	genderManInput.click();
});


buttonOptionsAsideStep2OptionB.addEventListener('click', function(evt) {
	userManBlack.classList.remove('hidden');
	userManWhite.classList.add('hidden');
	userWomanWhite.classList.remove('hidden');
	userWomanBlack.classList.add('hidden');

	percentOptionB.classList.remove('hidden');
	percentOptionA.classList.add('hidden');

	buttonAsideStep2.classList.remove('hidden');

	genderWomanInput.click();
});


workspace.addEventListener('click', function(evt) {
	if (evt.target == workspace) {
		userManBlack.classList.remove('hidden');
		userWomanBlack.classList.remove('hidden');
		userManWhite.classList.add('hidden');
		userWomanWhite.classList.add('hidden');
		buttonAsideStep2.classList.add('hidden');
		percentOptionA.classList.add('hidden');
		percentOptionB.classList.add('hidden');
	} else if (evt.target == options) {
		userManBlack.classList.remove('hidden');
		userWomanBlack.classList.remove('hidden');
		userManWhite.classList.add('hidden');
		userWomanWhite.classList.add('hidden');
		buttonAsideStep2.classList.add('hidden');
		percentOptionA.classList.add('hidden');
		percentOptionB.classList.add('hidden');
	}
});



buttonAsideStep2.addEventListener('click', function(evt) {
	asideStep2.classList.add('hidden');
	asideStep3.classList.remove('hidden');

	gradienAsideStep2.classList.add('hidden');
	gradienAsideStep3.classList.remove('hidden');

	footerAsideStep1.classList.add('footer-step-2');

	percentOptionA.classList.add('hidden');
	percentOptionB.classList.add('hidden');
});


asideStep2.addEventListener('click', function(evt) {
	if (evt.target == arrowYellow) {
		asideStep1.classList.remove('hidden');
		asideStep2.classList.add('hidden');
		gradienAsideStep1.classList.remove('hidden');
		gradienAsideStep2.classList.add('hidden');
		footerAsideStep1.classList.remove('footer-step-2');
		percentOptionA.classList.add('hidden');
		percentOptionB.classList.add('hidden');
	}
});

asideStep3.addEventListener('click', function(evt) {
	if (evt.target == arrowBlue) {
		asideStep2.classList.remove('hidden');
		asideStep3.classList.add('hidden');
		gradienAsideStep2.classList.remove('hidden');
		gradienAsideStep3.classList.add('hidden');
		footerAsideStep1.classList.remove('footer-step-2');
		percentOptionA.classList.add('hidden');
		percentOptionB.classList.add('hidden');
		userManBlack.classList.remove('hidden');
		userWomanBlack.classList.remove('hidden');
		userManWhite.classList.add('hidden');
		userWomanWhite.classList.add('hidden');
		buttonAsideStep2.classList.add('hidden');
	}
});





nameInput.addEventListener('invalid', function (evt) {
	if (nameInput.validity.tooShort) {
		nameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
		nameInput.setAttribute('style', 'border: 1px solid red');
	} else if (nameInput.validity.tooLong) {
		nameInput.setCustomValidity('Имя не должно превышать 25-ть символов');
		nameInput.setAttribute('style', 'border: 1px solid red');
	} else if (nameInput.validity.valueMissing) {
		nameInput.setCustomValidity('Обязательное поле');
		nameInput.setAttribute('style', 'border: 1px solid red');
		nameInput.setAttribute('placeholder', 'Введите свое имя');
	} else {
		nameInput.setCustomValidity('');
		nameInput.setAttribute('style', 'border: 1px solid #e9e9e9');
	}
});


mailInput.addEventListener('invalid', function (evt) {
	if (mailInput.validity.valueMissing) {
		mailInput.setCustomValidity('Обязательное поле');
		mailInput.setAttribute('style', 'border: 1px solid red');
		mailInput.setAttribute('placeholder', 'Неверный формат email');
	} else {
		mailInput.setCustomValidity('');
		mailInput.setAttribute('style', 'border: 1px solid #e9e9e9');
	}
});


passwordInput.addEventListener('invalid', function (evt) {
	if (passwordInput.validity.valueMissing) {
		passwordInput.setCustomValidity('Обязательное поле');
		passwordInput.setAttribute('style', 'border: 1px solid red');
		passwordInput.setAttribute('placeholder', 'Придумайте новый пароль');
	} else {
		passwordInput.setCustomValidity('');
		passwordInput.setAttribute('style', 'border: 1px solid #e9e9e9');
	}
});