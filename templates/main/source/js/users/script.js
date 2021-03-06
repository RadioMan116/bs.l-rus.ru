//Доступный hamburger https://foxland.fi/simple-accessible-svg-menu-hamburger-animation
$(document).ready(function () {
	// function hamburger(element, menu) {
	// 	var button = document.getElementById(element),
	// 		menu = document.getElementById(menu),
	// 		menuList = document.querySelector('.menu')
	// 	menuBottom = document.getElementById('js-header__block_bottom');
	// 	button.onclick = function () {
	// 		// Toggle class "opened". Set also aria-expanded to true or false.
	// 		if (-1 !== button.className.indexOf("opened")) {
	// 			button.parentNode.parentNode.classList.remove("active");
	// 			button.className = button.className.replace(" opened", "");
	// 			button.setAttribute("aria-expanded", "false");
	// 			menuBottom.classList.remove("active");
	// 			menuList.classList.remove("active");
	// 			$("body").removeClass("fixed");
	// 			$("html").removeClass("js-height");
	// 			$(".header__overlay").hide();
	// 		} else {
	// 			button.parentNode.parentNode.classList.add("active");
	// 			button.className += " opened";
	// 			button.setAttribute("aria-expanded", "true");
	// 			menuBottom.classList.add("active");
	// 			menuList.classList.add("active");
	// 			$("body").addClass("fixed");
	// 			$("html").addClass("js-height");
	// 		}
	// 	};
	// }
	function hamburger(element, menu, favorite, compare) {
		var button = document.getElementById(element),
			menu = document.getElementById(menu),
			menuList = document.querySelector(".menu"),
			menuBottom = document.getElementById("js-header__block_bottom"),
			favorite = document.querySelector(".header__favorite"),
			compare = document.querySelector(".header__compare"),
			menuParent = document.querySelector(".header__blocks");
		button.onclick = function () {
			// Toggle class "opened". Set also aria-expanded to true or false.
			if (-1 !== button.className.indexOf("opened")) {
				button.parentNode.parentNode.classList.remove("active");
				button.className = button.className.replace(" opened", "");
				button.setAttribute("aria-expanded", "false");
				menuBottom.classList.remove("active");
				menuList.classList.remove("active");
				menuParent.classList.remove("active");
				$("body").removeClass("fixed");
				$("html").removeClass("js-height");
				$(".header__overlay").hide();
				menuBottom.classList.remove("padding");
				button.parentNode.parentNode.classList.remove("padding");
			} else {
				button.parentNode.parentNode.classList.add("active");
				button.className += " opened";
				button.setAttribute("aria-expanded", "true");
				menuBottom.classList.add("active");
				menuList.classList.add("active");
				menuParent.classList.add("active");
				$("body").addClass("fixed");
				$("html").addClass("js-height");
				if ((favorite.classList.contains("active")) || (compare.classList.contains("active"))) {
					menuBottom.classList.add("padding");
					button.parentNode.parentNode.classList.add("padding");
				}
			}
		};
	}
	(function () {
		let bgAttr = document.querySelectorAll(".dropdown-menu__item");
		if (bgAttr) {
			bgAttr.forEach(element => {
				let url = element.getAttribute("data-webp") ? element.getAttribute("data-webp") : element.getAttribute("data-bg");
				element.style.background = `url('${url}')`;
			});
		}
	})();
	var windowWidth2 = $(window).width();
	// NEW SCRIPT
	(function () {
		let mainCollection = document.querySelectorAll(".special-offers .container");
		let catalog = document.querySelector(".special-offers.catalog");
		$(".special-offers .container").each(function (index, element) {
			var $this = $(this);
			$this.find("[class ^=swiper-pagination]").addClass("instance-pagination-" + index);
		});
		if (catalog) {
			mainCollection.forEach(function (element, index) {
				let $this = $(this);
				element.querySelector(".swiper-container").classList.add("instance-" + index);
				element.querySelector(".swiper-button-next").classList.add("instance-next-" + index);
				element.querySelector(".swiper-button-prev").classList.add("instance-prev-" + index);
				var mySwiper33 = new Swiper(".instance-" + index, {
					slidesPerView: 3,
					spaceBetween: 25,
					slidesPerGroup: 4,
					allowTouchMove: false,
					// loop: true,
					// loopFillGroupWithBlank: true,
					pagination: {
						el: ".instance-pagination-" + index,
						clickable: true
					},
					scrollbar: {
						el: ".swiper-scrollbar",
						hide: false,
						draggable: true
					},
					navigation: {
						nextEl: ".instance-next-" + index,
						prevEl: ".instance-prev-" + index
					},
					breakpoints: {
						// when window width is <= 320px
						767: {
							allowTouchMove: true,
							slidesPerGroup: 1,
							spaceBetween: 22,
							slidesPerView: 2
						},
						600: {
							allowTouchMove: true,
							slidesPerGroup: 1,
							slidesPerView: 1,
							spaceBetween: 10
						}
					}
				});
				if (windowWidth2 > 767) {
					if (element.querySelectorAll(".swiper-slide").length > 4) {
						element.querySelector(".swiper-button-next").style.display = "block";
						element.querySelector(".swiper-button-prev").style.display = "block";
						element.querySelector(".instance-pagination-" + index).style.display = "flex";
					} else {
						element.querySelector(".swiper-button-next").style.display = "none";
						element.querySelector(".swiper-button-prev").style.display = "none";
						element.querySelector(".instance-pagination-" + index).style.display = "none";
					}
				}
			});
		} else {
			mainCollection.forEach(function (element, index) {
				let $this = $(this);
				element.querySelector(".swiper-container").classList.add("instance-" + index);
				element.querySelector(".swiper-button-next").classList.add("instance-next-" + index);
				element.querySelector(".swiper-button-prev").classList.add("instance-prev-" + index);
				var mySwiper33 = new Swiper(".instance-" + index, {
					slidesPerView: 4,
					spaceBetween: 25,
					slidesPerGroup: 4,
					allowTouchMove: false,
					// loop: true,
					// loopFillGroupWithBlank: true,
					pagination: {
						el: ".instance-pagination-" + index,
						clickable: true
					},
					scrollbar: {
						el: ".swiper-scrollbar",
						hide: false,
						draggable: true
					},
					navigation: {
						nextEl: ".instance-next-" + index,
						prevEl: ".instance-prev-" + index
					},
					breakpoints: {
						// when window width is <= 320px
						767: {
							allowTouchMove: true,
							slidesPerGroup: 1,
							spaceBetween: 22,
							slidesPerView: 2
						},
						600: {
							allowTouchMove: true,
							slidesPerGroup: 1,
							slidesPerView: 1,
							spaceBetween: 10
						}
					}
				});
				if (windowWidth2 > 767) {
					if (element.querySelectorAll(".swiper-slide").length > 4) {
						element.querySelector(".swiper-button-next").style.display = "block";
						element.querySelector(".swiper-button-prev").style.display = "block";
						element.querySelector(".instance-pagination-" + index).style.display = "flex";
					} else {
						element.querySelector(".swiper-button-next").style.display = "none";
						element.querySelector(".swiper-button-prev").style.display = "none";
						element.querySelector(".instance-pagination-" + index).style.display = "none";
					}
				}
			});
		}
	})();
	if ($(".js-recently-watched").length) {
		let productCard = document.querySelector(".product-card");
		let newCatalog = document.querySelector(".special-offers.catalog");
		if (productCard) {
			var mySwiper13 = new Swiper(".js-recently-watched .swiper-container", {
				slidesPerView: 6,
				slidesPerGroup: 1,
				spaceBetween: 25,
				touchRatio: 1,
				navigation: {
					nextEl: ".recently-watched__next",
					prevEl: ".recently-watched__prev"
				},
				breakpoints: {
					480: {
						slidesPerView: 2.3,
						slidesPerGroup: 1,
						spaceBetween: 8,
					},
					767: {
						allowTouchMove: true,
						slidesPerView: 3.3,
						slidesPerGroup: 1,
						spaceBetween: 14,
					},
				},
				pagination: {
					el: ".swiper-pagination-recently-watched",
					clickable: true
				}
			});
			if ($(".js-recently-watched .swiper-slide").length > 5) {
				$(".recently-watched__prev").show();
				$(".recently-watched__next").show();
			} else {
				$(".recently-watched__prev").hide();
				$(".recently-watched__next").hide();
			}
		} else {
			var mySwiper13 = new Swiper(".js-recently-watched .swiper-container", {
				slidesPerView: 6,
				slidesPerGroup: 1,
				spaceBetween: 25,
				touchRatio: 1,
				navigation: {
					nextEl: ".recently-watched__next",
					prevEl: ".recently-watched__prev"
				},
				breakpoints: {
					480: {
						slidesPerView: 2.3,
						slidesPerGroup: 1,
						spaceBetween: 8,
					},
					767: {
						slidesPerView: 3.3,
						slidesPerGroup: 1,
						spaceBetween: 12
					},
				},
				pagination: {
					el: ".swiper-pagination-recently-watched",
					clickable: true
				}
			});
			if ($(".js-recently-watched .swiper-slide").length > 5) {
				$(".recently-watched__prev").show();
				$(".recently-watched__next").show();
			} else {
				$(".recently-watched__prev").hide();
				$(".recently-watched__next").hide();
			}
		}
	}
	var mySwiper9 = new Swiper(".js-product-card__rel", {
		slidesPerView: 3,
		slidesPerGroup: 1,
		// spaceBetween: 27,
		touchRatio: 1,
		allowTouchMove: false,
		navigation: {
			nextEl: ".rel__next",
			prevEl: ".rel__prev"
		},
		pagination: {
			el: ".rel__pagination",
			clickable: true
		},
		breakpoints: {
			767: {
				allowTouchMove: true,
				slidesPerView: 2,
				// slidesPerGroup: 1,
				spaceBetween: 18
			},
		},
	});
	var mySwiper6 = new Swiper(".js-gallery__item", {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 0,
		lazy: true,
		effect: "fade"
	});
	var mySwiper10 = new Swiper(".js-download-catalogs", {
		// Optional parameters
		// slidesPerGroup: 1,
		slidesPerView: 1,
		slidesPerColumn: 3,
		spaceBetween: 24,
		allowTouchMove: false,
		// direction: "horizontal",
		// loop: true,
		// If we need pagination
		navigation: {
			nextEl: ".download-catalogs__next",
			prevEl: ".download-catalogs__prev"
		},
		pagination: {
			el: ".swiper-pagination-download-catalogs",
			clickable: true
		},
		breakpoints: {
			// when window width is <= 320px
			767: {
				allowTouchMove: true,
			}
		}
		// Navigation arrows
		// navigation: {
		// 	nextEl: ".main_next",
		// 	prevEl: ".main_prev"
		// },
		// And if we need scrollbar
		// scrollbar: {
		// 	el: ".swiper-scrollbar"
		// }
	});
	var mySwiper11 = new Swiper(".js-practical-features .swiper-container", {
		// Optional parameters
		// slidesPerGroup: 1,
		slidesPerView: 1,
		spaceBetween: 16,
		allowTouchMove: false,
		// direction: "horizontal",
		// loop: true,
		// If we need pagination
		navigation: {
			nextEl: ".practical-features__next",
			prevEl: ".practical-features__prev"
		},
		pagination: {
			el: ".swiper-pagination-practical-features",
			clickable: true
		},
		breakpoints: {
			// when window width is <= 320px
			767: {
				allowTouchMove: true,
			}
		}
	});
	var mySwiper34 = new Swiper(".js-reviews-main .swiper-container", {
		// Optional parameters
		// slidesPerGroup: 1,
		slidesPerView: 1,
		spaceBetween: 0,
		// direction: "horizontal",
		// loop: true,
		// If we need pagination
		navigation: {
			nextEl: ".reviews-main__next",
			prevEl: ".reviews-main__prev"
		},
		pagination: {
			el: ".swiper-pagination-reviews-main",
			clickable: true
		},
		breakpoints: {
			767: {
				spaceBetween: 16
			},
		},
	});
	var mySwiper45 = new Swiper(".product-card .js-container-upsale", {
		// Optional parameters
		// slidesPerGroup: 1,
		slidesPerView: 1,
		slidesPerColumn: 2,
		spaceBetween: 25,
		allowTouchMove: false,
		// direction: "horizontal",
		// loop: true,
		// If we need pagination
		navigation: {
			nextEl: ".upsale__next",
			prevEl: ".upsale__prev"
		},
		pagination: {
			el: ".swiper-pagination-upsale",
			clickable: true
		},
		breakpoints: {
			// when window width is <= 320px
			767: {
				allowTouchMove: true,
				slidesPerView: 1,
				slidesPerColumn: 2,
			}
		}
	});
	if ($(".product-card .js-diagram__slider").length) {
		var $slides = $(".product-card .js-diagram__slider").find(".swiper-slide");
		var $first = $slides.eq(0);
		var mySwiper12 = new Swiper(".product-card .js-diagram__slider .swiper-container", {
			slidesPerView: 4,
			slidesPerGroup: 1,
			spaceBetween: 12,
			touchRatio: 1,
			allowTouchMove: false,
			navigation: {
				nextEl: ".diagram__next",
				prevEl: ".diagram__prev"
			},
			breakpoints: {
				600: {
					allowTouchMove: true,
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 16,
				},
				767: {
					allowTouchMove: true,
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 24
				},
			},
			pagination: {
				el: ".diagram__pagination",
				clickable: true
			},
			// other parameters
			on: {
				init: function () {
					$first.clone().appendTo(".product-card .js-diagram__slider .swiper-container").addClass("swiper-transform");
					// $first.addClass('swiper-transform');
					// mySwiper12.prependSlide('<div class="swiper-slide-virtual">Slide 0"</div>');
				},
			},
		});
		if ($(".product-card .diagram .swiper-slide").length > 4) {
			$(".diagram__next").show();
			$(".diagram__prev").show();
		} else {
			$(".diagram__next").hide();
			$(".diagram__prev").hide();
		}
	}
	if ($(".catalog .js-advantages").length) {
		if ($(".advantages .swiper-slide").length < 6) {
			var mySwiper20 = new Swiper(".catalog .advantages__container", {
				slidesPerView: 3,
				// slidesPerColumn: 2,
				spaceBetween: 9,
				touchRatio: 1,
				allowTouchMove: false,
				navigation: {
					nextEl: ".advantages__next",
					prevEl: ".advantages__prev"
				},
				pagination: {
					el: ".swiper-pagination-advantages",
					clickable: true
				},
				breakpoints: {
					767: {
						allowTouchMove: true,
						slidesPerView: 3,
						slidesPerColumn: 1,
						spaceBetween: 9,
					},
					450: {
						allowTouchMove: true,
						slidesPerView: 1,
						slidesPerColumn: 1,
					},
					660: {
						allowTouchMove: true,
						slidesPerView: 2,
						slidesPerGroup: 1,
						slidesPerColumn: 1,
					}
				}
			});
			if ($(".advantages .swiper-slide").length > 3) {
				$(".advantages__prev").show();
				$(".advantages__next").show();
				$(".swiper-pagination-advantages").show();
			} else {
				$(".advantages__prev").hide();
				$(".advantages__next").hide();
				$(".swiper-pagination-advantages").hide();
			}
		} else {
			var mySwiper20 = new Swiper(".catalog .advantages__container", {
				slidesPerView: 3,
				slidesPerColumn: 2,
				spaceBetween: 9,
				touchRatio: 1,
				allowTouchMove: false,
				navigation: {
					nextEl: ".advantages__next",
					prevEl: ".advantages__prev"
				},
				pagination: {
					el: ".swiper-pagination-advantages",
					clickable: true
				},
				breakpoints: {
					767: {
						allowTouchMove: true,
						slidesPerView: 3,
						slidesPerColumn: 1,
						spaceBetween: 9,
					},
					450: {
						allowTouchMove: true,
						slidesPerView: 1,
						slidesPerColumn: 1,
					},
					660: {
						allowTouchMove: true,
						slidesPerView: 2,
						slidesPerGroup: 1,
						slidesPerColumn: 1,
					}
				}
			});
			if ($(".advantages .swiper-slide").length > 6) {
				$(".advantages__prev").show();
				$(".advantages__next").show();
				$(".swiper-pagination-advantages").show();
			} else {
				$(".advantages__prev").hide();
				$(".advantages__next").hide();
				$(".swiper-pagination-advantages").hide();
			}
		}
		$(this).on("click", "a.advantages__link", function (e) {
			window.location = $(this).attr("href");
			return true;
		});
	}
	$(".js-product-card__buy,.product-day__buy,.special-offers__buy").click(function () {
		$(document).ajaxSuccess(function () {
			if ($(".basket__item").length > 3) {
				$(".added-cart__items .basket__prev").show();
				$(".added-cart__items .basket__next").show();
				var mySwiper14 = new Swiper(".added-cart__items .swiper-container", {
					slidesPerView: 3,
					slidesPerGroup: 1,
					spaceBetween: 25,
					touchRatio: 1,
					navigation: {
						nextEl: ".added-cart__items .basket__next",
						prevEl: ".added-cart__items .basket__prev"
					},
					breakpoints: {
						550: {
							slidesPerView: 1,
							slidesPerGroup: 1,
							spaceBetween: 16,
						},
						767: {
							slidesPerView: 2,
						},
					}
				});
			}
		});
	});
	if ($(".gallery__item").length) {
		$(".js-button__open").click(function (e) {
			if (!$(this).hasClass("active")) {
				e.preventDefault();
				$(this).addClass("active");
				mySwiper6.slideNext(500);
			} else
				if ($(this).hasClass("active")) {
					$(this).removeClass("active");
					mySwiper6.slidePrev(500);
				}
		});
		setInterval(function () {
			$(".js-button__open").addClass("blink_on");
			setTimeout(function () {
				$(".js-button__open").removeClass("blink_on");
			}, 1500);
		}, 3000);
	}
	$(".js-header__search").click(function () {
		if ($(".search__popup").hasClass("search__popup-open") == false) {
			$(".header .search__popup").addClass("search__popup-open");
			$(".header__search").addClass("header__search-open");
			$(".header__overlay").addClass("header__overlay-open");
			$("html").addClass("fixed");
		} else {
			$(".header .search__popup").removeClass("search__popup-open");
			$(".header__search").removeClass("header__search-open");
			$(".header__overlay").removeClass("header__overlay-open");
			$("html").removeClass("fixed");
		}
	});
	$(".js-search-header__input").on("input", function () {
		if ($(this).val()) {
			$(".js-header__button,.js-header__submit").show();
		} else {
			$(".js-header__button,.js-header__submit").hide();
		}
	});
	$(".js-header__button").click(function () {
		$(".header__input").val("");
		$(this).hide();
		$(".js-header__submit").hide();
	});
	$(document).on("click", "[data-ajax]", function (e) {
		e.stopPropagation();
		e.preventDefault();
		$.get(this.getAttribute("data-url"), function (response) {
			globalPopup.append(response).show();
		});
		// $("html").addClass("fixed");
	});
	$(".js-dropdown-menu__title").click(function (event) {
		if ($(this).parent().hasClass("active") == false) {
			$(".dropdown-menu").removeClass("active");
			$(this).parent().addClass("active");
			$("#js-header__block_bottom").scrollTop(0);
		} else {
			$(this).parent().removeClass("active");
		}
		$(".dropdown-menu.active ul.dropdown-menu__list").on("mouseover", function (event) {
			// $('body').css('overflow','hidden');
			// $('body').addClass('fixed');
		});
		$(".dropdown-menu.active ul.dropdown-menu__list").on("mouseout", function (event) {
			// $('body').css('overflow','visible');
			// $('body').removeClass('fixed');
		});
		// document.querySelectorAll('.dropdown-menu__item').forEach(element => {
		// 	let url = element.getAttribute('data-bg');
		// 	element.style.background = `url('${url}')`;
		// });
	});
	$(".js-menu-footer__title").click(function (event) {
		if ($(this).parent().parent().hasClass("active") == false) {
			$(".menu-footer").removeClass("active");
			$(this).parent().parent().addClass("active");
		} else {
			$(this).parent().parent().removeClass("active");
		}
	});
	$(".js-delete__table").click(function () {
		$(this).parent().remove();
	});
	$(".js-filter__title").click(function (e) {
		if ($(this).parent().hasClass("filter__close") == false) {
			$(this).parent().addClass("filter__close");
		} else {
			$(this).parent().removeClass("filter__close");
		}
	});
	$(".js-item__close").click(function () {
		if ($(".filter__form").hasClass("closed") == false) {
			$(".filter__form").addClass("closed");
		} else {
			$(".filter__form").removeClass("closed");
		}
	});
	$(".js-share").click(function (e) {
		e.preventDefault();
		var buttonClose = document.createElement("div");
		buttonClose.className = ("button-close");
		if ($(".share__items").is(":visible")) {
			$(".share__items").hide();
		} else {
			$(".share__items").append(buttonClose);
			$(".share__items").css("display", "flex");
		}
		// $('.share__items').
	});
	$(".labels__sale").hover(function () {
		$(this).toggleClass("active");
	});
	$(".labels__item").hover(function () {
		$(this).toggleClass("active");
	});
	// (function () {
	// 	let point = document.querySelectorAll('.gallery__point');
	// 	let buttonNext = document.querySelector('.gallery__next');
	// 	let buttonPrev = document.querySelector('.gallery__prev');
	// 	let firstAllParent = document.querySelectorAll('.new-gallery .swiper-slide');
	// 	let gallery = document.querySelector('.new-gallery');
	// 	let num = 0;
	// 	if (gallery) {
	// 		firstAllParent.forEach(point => {
	// 			let firstParent = point.querySelectorAll('.gallery__parent');
	// 			firstParent[0].classList.add('active');
	// 		})
	// 		point.forEach((el) => {
	// 			el.addEventListener('mouseover', function (e) {
	// 				e.stopPropagation();
	// 				// e.preventDefault();
	// 				point.forEach((element) => {
	// 					element.parentNode.classList.remove('active');
	// 				})
	// 				this.parentNode.classList.add('active');
	// 			}, true);
	// 		})
	// 		let slideIndex = 1;
	// 		showSlides(slideIndex);
	// 		/* Функция увеличивает индекс на 1, показывает следующй слайд*/
	// 		function plusSlide() {
	// 			showSlides(slideIndex += 1);
	// 		}
	// 		/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
	// 		function minusSlide() {
	// 			showSlides(slideIndex -= 1);
	// 		}
	// 		/* Устанавливает текущий слайд */
	// 		// function currentSlide(n) {
	// 		// 	showSlides(slideIndex = n);
	// 		// }
	// 		/* Основная функция слайдера */
	// 		function showSlides(n) {
	// 			let i;
	// 			let slides = document.getElementsByClassName("gallery__parent");
	// 			// var dots = document.getElementsByClassName("slider-dots_item");
	// 			if (n > slides.length) {
	// 				slideIndex = 1
	// 			}
	// 			if (n < 1) {
	// 				slideIndex = slides.length
	// 			}
	// 			for (i = 0; i < slides.length; i++) {
	// 				slides[i].classList.remove('active');
	// 			}
	// 			// for (i = 0; i < dots.length; i++) {
	// 			//     dots[i].className = dots[i].className.replace(" active", "");
	// 			// }
	// 			slides[slideIndex - 1].classList.add('active');
	// 			// dots[slideIndex - 1].className += " active";
	// 		}
	// 		buttonNext.addEventListener('click', plusSlide)
	// 		buttonPrev.addEventListener('click', minusSlide)
	// 	}
	// })()
	$(".catalog__prop .js-link-pop-glossary").hover(function () {
		var text = $(this).find(".popup-prop__text").text();
		var handel = $(this).position().left;
		const $this = $(this);
		if ($(this).children(".popup-prop").css("display") == "none") {
			if ($(this).attr("click") == "false") {
				$(this).attr("click", "true");
				return false;
			}
			$(".popup-prop").hide();
			$(this).children(".popup-prop").show();
			$(this).find(".popup-prop__link").attr("target", "blank");
			if ($(this).find(".button-close").length < 1) {
				var buttonClose = document.createElement("div");
				buttonClose.className = ("button-close");
				$(this).find(".popup-prop").append(buttonClose);
			}
			if (text.length > 300) {
				text = text.substring(0, 300);
				var lastIndex = text.lastIndexOf(" "); // позиция последнего пробела
				text = text.substring(0, lastIndex) + "...";
				$(this).find(".popup-prop__text").text(text);
			}
		} else {
			$(this).children(".popup-prop").hide();
		}
		// $(document).mouseup(function (e) { // событие клика по веб-документу
		// 	if (!$this.is(e.target) // если клик был не по нашему блоку
		// 		&&
		// 		$this.has(e.target).length === 0) { // и не по его дочерним элементам
		// 		$('.popup-prop').hide() // скрываем его
		// 	}
		// });
	});
	$(".js-characteristic-glossary").click(function () {
		var text = $(this).find(".characteristic-glossary__text").text();
		var $this = $(this);
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(".characteristic-glossary ").removeClass("active");
			$(this).addClass("active");
			$(this).find(".characteristic-glossary__link").attr("target", "blank");
			if ($(this).find(".button-close").length < 1) {
				var buttonClose = document.createElement("div");
				buttonClose.className = ("button-close");
				$(this).find(".popup-gloss").append(buttonClose);
			}
			if (text.length > 300) {
				text = text.substring(0, 300);
				var lastIndex = text.lastIndexOf(" "); // позиция последнего пробела
				text = text.substring(0, lastIndex) + "...";
				$(this).find(".characteristic-glossary__text").text(text);
			}
			// $('body').on("click", function (event) {
			// 	// $('body').css('overflow','hidden');
			// 	$this.removeClass('active');
			// });
			$(document).mouseup(function (e) { // событие клика по веб-документу
				var div = $("#popup"); // тут указываем ID элемента
				if (!$this.is(e.target) // если клик был не по нашему блоку
					&& $this.has(e.target).length === 0) { // и не по его дочерним элементам
					$this.removeClass("active"); // скрываем его
				}
			});
			var target = $this.children(".popup-gloss");
			var targetPos = target.offset().top;
			var windowHeight = $(window).height();
			var elHeight = target.height();
			var scrollToElem = targetPos + elHeight;
			$(window).scroll(function () {
				var winScrollTop = $(this).scrollTop();
				if (winScrollTop > scrollToElem) {
					$(target).parent().removeClass("active");
				}
				if (scrollToElem - windowHeight - elHeight > winScrollTop) {
					$(target).parent().removeClass("active");
				}
			});
		}
	});
	$(".js-characteristic-glossary").hover(function () {
		var text = $(this).find(".characteristic-glossary__text").text();
		var $this = $(this);
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(".characteristic-glossary ").removeClass("active");
			$(this).addClass("active");
			$(this).find(".characteristic-glossary__link").attr("target", "blank");
			if ($(this).find(".button-close").length < 1) {
				var buttonClose = document.createElement("div");
				buttonClose.className = ("button-close");
				$(this).find(".popup-gloss").append(buttonClose);
			}
			if (text.length > 300) {
				text = text.substring(0, 300);
				var lastIndex = text.lastIndexOf(" "); // позиция последнего пробела
				text = text.substring(0, lastIndex) + "...";
				$(this).find(".characteristic-glossary__text").text(text);
			}
			// $('body').on("click", function (event) {
			// 	// $('body').css('overflow','hidden');
			// 	$this.removeClass('active');
			// });
			$(document).mouseup(function (e) { // событие клика по веб-документу
				var div = $("#popup"); // тут указываем ID элемента
				if (!$this.is(e.target) // если клик был не по нашему блоку
					&& $this.has(e.target).length === 0) { // и не по его дочерним элементам
					$this.removeClass("active"); // скрываем его
				}
			});
			var target = $this.children(".popup-gloss");
			var targetPos = target.offset().top;
			var windowHeight = $(window).height();
			var elHeight = target.height();
			var scrollToElem = targetPos + elHeight;
			$(window).scroll(function () {
				var winScrollTop = $(this).scrollTop();
				if (winScrollTop > scrollToElem) {
					$(target).parent().removeClass("active");
				}
				if (scrollToElem - windowHeight - elHeight > winScrollTop) {
					$(target).parent().removeClass("active");
				}
			});
		}
	});
	$(document).on("click", ".js-filter-glossary", function (e) {
		// e.stopPropagation();
		// e.preventDefault();
		var $this = $(this);
		if ($(this).attr("data-glossary") == "show") {
			$(this).attr("data-glossary", "hide");
		} else {
			$(".js-filter-glossary").attr("data-glossary", "hide");
			$(this).attr("data-glossary", "show");
			$(document).mouseup(function (e) { // событие клика по веб-документу
				if (!$this.is(e.target) // если клик был не по нашему блоку
					&& $this.has(e.target).length === 0) { // и не по его дочерним элементам
					$this.attr("data-glossary", "hide"); // скрываем его
				}
			});
			var target = $this;
			var targetPos = target.offset().top;
			var windowHeight = $(window).height();
			var elHeight = target.height();
			var scrollToElem = targetPos + elHeight;
			if ($(this).find(".button-close").length < 1) {
				var buttonClose = document.createElement("div");
				buttonClose.className = ("button-close");
				$(this).find(".popup-gloss").append(buttonClose);
			}
			$(window).scroll(function () {
				var winScrollTop = $(this).scrollTop();
				if (winScrollTop > scrollToElem) {
					$(target).attr("data-glossary", "hide");
				}
				if (scrollToElem - windowHeight - elHeight > winScrollTop) {
					$(target).attr("data-glossary", "hide");
				}
			});
		}
	});
	$(document).on("click", "a[href='#'].js-close", function (e) {
		e.preventDefault();
	});
	$(document).on("click", "a[href='#'].load-more", function (e) {
		e.preventDefault();
	});
	$(document).on("click", ".js-city-change", function (e) {
		$(this).toggleClass("active");
	});
	$(document).on("click", ".button-close", function (e) {
		// var shareItems = document.getElementsByClassName('share__items');
		if (this.parentElement.classList.contains("share__items")) {
			this.parentElement.style.display = ("none");
		}
		if (this.parentElement.classList.contains("popup-gloss")) {
			this.parentElement.parentElement.setAttribute("click", "false");
			this.parentElement.parentElement.removeClass = "active";
		}
		if (this.parentElement.classList.contains("popup-prop")) {
			this.parentElement.style.display = "none";
		}
		this.remove();
	});
	// (() => {
	// 	let PRE = document.querySelectorAll('.catalog__item.instructions__item.swiper-slide pre');
	// 	if (PRE.length > 0) {
	// 		PRE.forEach(el => el.remove())
	// 	}
	// })();
	if (windowWidth2 > 767) {
		if ($("h1.title:contains(\"Корзина\")")) {
			$("h1.title:contains(\"Корзина\")").css("width", "100%");
		}
		// $(window).scroll(function () {
		// 	var scroll = $(window).scrollTop();
		// 	// var asideHeightSum = asideHeight + asideOffsetTop - 600;
		// 	if (scroll > 10) {
		// 		$(".dropdown-menu").removeClass("active");
		// 		$(".header__overlay").removeClass("header__overlay-open");
		// 		$(".header .search__popup").removeClass("search__popup-open");
		// 		$(".header__search").removeClass("header__search-open");
		// 		$(".header__overlay").removeClass("header__overlay-open");
		// 	}
		// });
		$(function () {
			$(".instructions .catalog__text").matchHeight();
			$(".catalog__specification").matchHeight();
			// $('.instructions .instructions__item').matchHeight();
			let height = $(".instructions .instructions__item").height();
			$(".instructions .instructions__items").height(height + 50);
		});
		$(function () {
			// $(".articles-main__slider .catalog__text").matchHeight();
			// $(".articles-main__slider .catalog__specification").matchHeight();

			// let arrCatalogElem = document.querySelectorAll(".catalog__specification");
			// let arrHeight = [];
			// let maxHeightCatalogElem;
			// for (let prop of arrCatalogElem) {
			// 	arrHeight.push(prop.offsetHeight);
			// 	maxHeightCatalogElem = Math.max.apply(null, arrHeight);
			// 	prop.style.height = maxHeightCatalogElem + "px";
			// }
		});
		(() => {
			if ($(".catalog .js-recently-watched").length) {
				$(".col-md-3 .sidebar").css("padding-bottom", "400px");
			}
		})();
		(() => {
			let check = document.querySelector(".catalog .js-recently-watched");
			if (check) {
				$(".col-md-3 .sidebar").css("padding-bottom", "400px");
			}
		})();
	}
	if (windowWidth2 <= 767) {
		$(".logo").appendTo(".header__block_top .container");
		$(".labels").appendTo(".product-card .product__header_top");
		$(".sidebar-right").appendTo(".product-card");
		$(".reviews__main-link").appendTo(".product-card .reviews");
		$(".col-md-3 .js-container-upsale").remove();
		if (!$(".special-offers.catalog .sidebar").length) {
			console.log("юк");
			$(".sidebar").appendTo($(".special-offers.catalog"));
		}
		var mySwiper4 = new Swiper(".special-offers.catalog .js-container-upsale", {
			// Optional parameters
			// slidesPerGroup: 1,
			slidesPerView: 1,
			slidesPerColumn: 2,
			spaceBetween: 24,
			allowTouchMove: false,
			// direction: "horizontal",
			// loop: true,
			// If we need pagination
			navigation: {
				nextEl: ".upsale__next",
				prevEl: ".upsale__prev"
			},
			pagination: {
				el: ".swiper-pagination-upsale",
				clickable: true
			},
			breakpoints: {
				// when window width is <= 320px
				767: {
					allowTouchMove: true,
					slidesPerView: 1,
					slidesPerColumn: 2,
				}
			}
			// Navigation arrows
			// navigation: {
			// 	nextEl: ".main_next",
			// 	prevEl: ".main_prev"
			// },
			// And if we need scrollbar
			// scrollbar: {
			// 	el: ".swiper-scrollbar"
			// }
		});
		var mySwiper15 = new Swiper(".js-sidebar-articles", {
			// navigation: {
			// 	nextEl: ".practical-features__next",
			// 	prevEl: ".practical-features__prev"
			// },
			pagination: {
				el: ".articles__pagination",
				clickable: true
			},
			breakpoints: {
				600: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 12,
				},
				767: {
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 12,
				},
			}
		});
		var mySwiper22 = new Swiper(".js-all-video", {
			// navigation: {
			// 	nextEl: ".practical-features__next",
			// 	prevEl: ".practical-features__prev"
			// },
			pagination: {
				el: ".swiper-pagination-all-video",
				clickable: true
			},
			breakpoints: {
				767: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 12,
				},
			}
		});
		var mySwiper23 = new Swiper(".catalog .articles.swiper-container", {
			// navigation: {
			// 	nextEl: ".practical-features__next",
			// 	prevEl: ".practical-features__prev"
			// },
			pagination: {
				el: ".articles__pagination",
				clickable: true
			},
			breakpoints: {
				600: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 12,
				},
				700: {
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 12,
				},
				767: {
					slidesPerView: 3,
					slidesPerGroup: 1,
					spaceBetween: 16
				},
			}
		});
		if ($(".favorite__items").length) { }
		if ($(".js-favorite_list[data-list=\"Избранное\"]").length) {
			var favorite = $(".js-favorite_list[data-list=\"Избранное\"]");
			favorite.addClass("favorite__items");
			$(".js-favorite_filter").prependTo($(".col-md-9"));
			$(".title").prependTo($(".col-md-9"));
			$(".breadcrumbs").prependTo($(".col-md-9"));
		}
		if ($(".filter-new").length) {
			$(".filter-new ").append("<div class=\"filter-new__button js-filter-new__button\"><span>фильтр</span></div>");
			$(".filter-new").addClass("active");
			$(".js-filter-new__button").click(function () {
				// $(this).parent().toggleClass('active')
				if ($(this).parent().hasClass("active")) {
					$(this).parent().removeClass("active");
					$(".filter-new__button span").text("закрыть");
				} else {
					$(".filter-new__button span").text("фильтр");
					$(this).parent().addClass("active");
				}
			});
		}
		$(function () {
			$(".hide-tabs .js-characteristic__title").click(function (e) {
				$(this).toggleClass("active").nextUntil(".characteristic__title").toggleClass("active");
			});
		});
		if ($("h1.title:contains(\"Статьи и акции\")").length > 0) {
			$(".col-md-3").addClass("order");
		}
		(function () {
			var firstDropdownMenu = document.querySelector("nav.dropdown-menu");
			$(".header__block_top .menu").appendTo("#js-header__block_bottom .container");
			$(".js-city-change").appendTo("#js-header__block_bottom .menu");
			$("#js-menu .header__telephones").appendTo("#js-header__block_bottom .menu");
			console.log(firstDropdownMenu);
			firstDropdownMenu.classList.add("active");
		})();
		(function () {
			let catalogList = document.querySelector(".catalog__list");
			if (catalogList) {
				catalogList.parentNode.classList.add("new-catalog");
			}
		})();
		(function () {
			let catalogThumb = document.querySelector(".catalog__thumb");
			if (catalogThumb) {
				catalogThumb.parentNode.classList.add("new-catalog");
			}
		})();
		(function () {
			let productCard = document.querySelector(".product-card");
			if (productCard) {
				let favorite = productCard.querySelector(".product-card__social");
				let productHeaderBottom = productCard.querySelector(".product__header_bottom");
				productHeaderBottom.append(favorite);
			}
		})();
	}
	if ($(".js-sidebar-articles").length > 0) {
		var mySwiper15 = new Swiper(".js-sidebar-articles", {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 12,
			navigation: {
				nextEl: ".articles__next",
				prevEl: ".articles__prev"
			},
			pagination: {
				el: ".articles__pagination",
				clickable: true
			},
			breakpoints: {
				600: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 12,
				},
				767: {
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 12,
				},
			}
		});
		let articleCurretSlide = [];
		// (function () {
		// 	let articleSlide = document.querySelectorAll('.js-sidebar-articles .articles__item');
		// 	articleSlide.forEach(function (element) {
		// 		articleCurretSlide.push(element);
		// 	})
		// 	console.log(articleCurretSlide.length);
		// 	if (articleCurretSlide.length < 2) {
		// 		console.log('low')
		// 		// console.log($(".articles__item"))
		// 		$('.swiper-pagination-articles').hide();
		// 		$('.articles__next').hide();
		// 		$('.articles__prev').hide();
		// 	}
		// })();
	}
	$(".js-comparison__select").click(function () {
		if ($(this).hasClass("active") == true) {
			$(".comparison__select ").removeClass("active");
			$(this).addClass("active");
		} else {
			$(".comparison__select ").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(".js-help__row").click(function () {
		if ($(this).hasClass("help__row-open") == false) {
			$(".help__row").children(".help__info").hide();
			$(".help__row").removeClass("help__row-open");
			$(this).addClass("help__row-open");
			$(this).children(".help__info").show();
		} else {
			$(this).removeClass("help__row-open");
			$(this).children(".help__info").hide();
		}
	});
	$(".js-filter_reset").click(function () {
		document.location.href = "";
		return false;
	});
	window.globalPopup = new Popup();
	(function (footerSelector, wrapperSelector) {
		var footer = document.querySelector(footerSelector);
		var wrapper = document.querySelector(wrapperSelector);
		var height;
		var setSize;
		if (!wrapper || !footer) {
			return false;
		}
		setSize = function () {
			height = footer.offsetHeight;
			wrapper.style.paddingBottom = height + "px";
			footer.style.marginTop = height * -1 + "px";
		};
		setSize();
		window.addEventListener("resize", setSize, false);
	})("#js-footer", "#js-wrapper");
	$(".filter__form .checkbox-number").each(function () {
		if ($(this).text() === "0") {
			$(this).parent().addClass("disabled");
		}
	});
	if ($(".filter-tip").length > 0) {
		$(".filter-tip").parent().addClass("parent-tip");
	}
	$(".filter__slider").draggable();
	hamburger("js-hamburger", "js-menu");
	// $(document).on("click", function (e) {
	// 	var container = $(".js-header__search");
	// 	if (!container.is(e.target) && container.has(e.target).length === 0) {
	// 		//проверяем, чтобы клик был не на блоке и не на потомках блока
	// 		$(".header .search__popup").removeClass("search__popup-open");
	// 		$(".header__search").removeClass("header__search-open");
	// 		$(".header__overlay").removeClass("header__overlay-open");
	// 		$("html").removeClass("fixed");
	// 	}
	// });
	$(".filter__tags").click(function () {
		$(this).addClass("active");
	});
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		// var asideHeightSum = asideHeight + asideOffsetTop - 600;
		if (scroll > 10) {
			$(".dropdown-menu").removeClass("active");
			$(".header__overlay").removeClass("header__overlay-open");
			$(".header .search__popup").removeClass("search__popup-open");
			$(".header__search").removeClass("header__search-open");
		}
	});
	$(".header__overlay").click(function () {
		$(".header .search__popup").removeClass("search__popup-open");
		$(".header__search").removeClass("header__search-open");
		$(".header__overlay").removeClass("header__overlay-open");
		$("html").removeClass("fixed");
	});
	$(function () {
		$.datepicker.regional["ru"] = {
			closeText: "Закрыть",
			prevText: "&#x3c;Пред",
			nextText: "След&#x3e;",
			currentText: "Сегодня",
			monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
			monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
			dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
			dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
			dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
			dateFormat: "dd.mm.yy",
			firstDay: 1,
			isRTL: false
		};
		$.datepicker.setDefaults($.datepicker.regional["ru"]);
		$(".js-datapicker").datepicker({
			minTime: 1,
			format: "d.m.Y",
			minDate: 1,
			// onSelectDate: function(ct, $i) {
			//   this.setOptions({
			// 	minTime: ct.getTime() > new Date ? false : 0
			//   })
			// }
		});
	});
	(function () {
		var mobileDetect = /Android|iPhone|iPad|iPod|BlackBerry|WPDesktop|IEMobile|Opera Mini/i.test(navigator.userAgent);
		var event = mobileDetect ? "touchend" : "mouseup";

		function Ratings(opts) {
			var opts = this.extend({
				element: "",
				countRate: 5,
				clickFn: function () { }
			}, opts);
			this.element = opts.element;
			if (!this.element) {
				return;
			}
			this.init(opts);
			this.events(opts);
		}
		Ratings.prototype = {
			init: function (opts) {
				var obj = this;
				this.tags = {};
				this.tags.default_state = this.element.querySelector(".ratings__disable");
				this.tags.hover = this.element.querySelector(".ratings__hover");
				this.tags.click = this.element.querySelector(".ratings__click");
				this.widthElement = this.element.offsetWidth / opts.countRate;
				this.width_votes = 0;
				this.votes = 0;
			},
			events: function (opts) {
				var obj = this;
				this.element.addEventListener("mouseover", function () {
					obj.tags.default_state.style.display = "block";
					obj.tags.hover.style.display = "block";
				}, false);
				this.element.addEventListener("mouseout", function () {
					obj.tags.default_state.style.display = "none";
					obj.tags.hover.style.display = "none";
				}, false);
				this.element.addEventListener("mousemove", function (e) {
					obj.width_votes = e.clientX - obj.element.getBoundingClientRect().left;
					obj.votes = Math.ceil(obj.width_votes / obj.widthElement);
					obj.tags.hover.style.width = obj.votes * obj.widthElement + "px";
				}, false);
				this.element.addEventListener(event, function () {
					obj.tags.click.style.width = obj.votes * obj.widthElement + "px";
					opts.clickFn.call(this, obj.votes);
				}, false);
			},
			extend: function (defaults, source) {
				for (var key in source) {
					if (source.hasOwnProperty(key)) {
						defaults[key] = source[key];
					}
				}
				return defaults;
			}
		};
		window.Ratings = Ratings;
	})();
	$(".js-viewForm").click(function () {
		//upon clicking of the button do an ajax post
		$(document).ajaxSuccess(function () {
			new Ratings({
				element: document.querySelector(".js-ratings__section"), // передаем элемент
				countRate: 5, // кол-во оценок
				clickFn: function (index) {
					$(".js-review_rating").val(index);
				}
			});
			$("[title=Телефон],.js-phone_mask").attr("type", "tel");
			$("[title=Телефон],.js-phone_mask").attr("placeholder", "Телефон");
			// $("[title=Телефон],.js-phone_mask,[title=Телефон]").prop('required', true);
			Inputmask.extendAliases({
				"customAlias": {
					mask: "+7 (999) 999-99-99",
					oncomplete: function () {
						$(this).removeClass("BadPols");
					},
					onincomplete: function () {
						$(this).addClass("BadPols");
						$(this).val("");
					},
				}
			});
			Inputmask("customAlias").mask("[type=tel]");
		});
	});
	$(".js-about-store__button").click(function () {
		if ($(this).parent().hasClass("active") == false) {
			$(this).text("Свернуть");
			$(this).parent().addClass("active");
		} else {
			$(this).parent().removeClass("active");
			$(this).text("Читать подробнее");
		}
	});
	$(".js-about-brand__button").click(function () {
		if ($(this).parent().hasClass("active") == false) {
			$(this).text("Свернуть");
			$(this).parent().addClass("active");
		} else {
			$(this).parent().removeClass("active");
			$(this).text("Читать подробнее");
		}
	});
	$(function () {
		if ($("#compare_table").length > 0) {
			$(function () {
				compareArray.init({
					table: document.getElementById("compare_table"),
					button: document.getElementById("compare_table_button").getElementsByTagName("a"),
					indexCols: 0,
					indexRows: 1,
					zebra: true,
					zebraClass: "gray_row",
					hideShowRows: "DIFF",
					callback: function () { }
				});
				var butt = $("#compare_table_button"),
					ul = $(butt).next();
				butt.click(function (e) {
					e.stopPropagation();
					if ($(this).hasClass("down")) {
						// $(ul).slideUp(200);
						$(this).removeClass("down");
					} else {
						// $(ul).slideDown(200);
						$(this).addClass("down");
					}
					return false;
				});
				$(document).click(function () {
					$(butt).removeClass("down");
					// $(ul).slideUp(200);
				});
			});
			$(".js-comparison-height").parent().parent().addClass("thead__comparison");
			$(".js-comparison__link").click(function (e) {
				e.preventDefault();
			});
			$(".js-compare_block-change.active").parent().addClass("order");
			$(".comparison__list").height($(".js-compare_block-change.active").innerHeight());
			window.onload = function () {
				// $('.comparison__main .characteristic__row').each(function (index, el) {
				// 	var height = $('.swiper-container-comparison .characteristic__row').eq(index).height();
				// 	$(el).height(height);
				// });
				if (windowWidth2 > 767) {
					$(".thead__comparison").css({
						"height": ($(".products-line").outerHeight() + "px")
					});
				} else {
					$(".thead__comparison").css({
						"marginBottom": ($(".products-line").innerHeight() + "px")
					});
					$(".js-swiper-comparison").css({
						"marginTop": ($(".thead__comparison").height() - 10 + "px")
					});
					$(".comparison .js-swiper-pagination").css({
						"top": ($(".thead__comparison").height() - 47 + "px")
					});
					$(".comparison .js-swiper-prev").css({
						"top": ($(".thead__comparison").height() - 28 + "px")
					});
					$(".comparison .js-swiper-next").css({
						"top": ($(".thead__comparison").height() - 28 + "px")
					});
					$(".comparison__main .characteristic__row").each(function (index, el) {
						if ($(this).text().length > 60) {
							$(this).addClass("level");
							$(".js-swiper-comparison .characteristic__row").eq(index).addClass("level");
						}
					});
				}
			}();
			var comparison_height = $(".thead__comparison").height();
			var if_max_width = false;
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				if (scroll > comparison_height && !if_max_width) {
					if_max_width = true;
					$(".comparison").addClass("fixed");
				} else if (scroll < comparison_height && if_max_width) {
					if_max_width = false;
					$(".comparison").removeClass("fixed");
				}
			});
			$(".comparison .fixed-header").css({
				"width": ($(".comparison").width())
			});
			var mySwiper7 = new Swiper(".comparison__diagram .diagram__slider", {
				slidesPerView: 3,
				slidesPerGroup: 1,
				spaceBetween: 27,
				touchRatio: 1,
				allowTouchMove: false,
				navigation: {
					nextEl: ".special-offers_next",
					prevEl: ".special-offers_prev"
				},
				breakpoints: {
					767: {
						allowTouchMove: true,
						slidesPerView: 2,
						touchRatio: 1,
						spaceBetween: 16,
						slidesPerGroup: 1,
						// pagination: {
						// 	type: "fraction",
						// },
					},
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true
				},
				thumbs: {
					swiper: mySwiper8,
					swiper: mySwiper5
				}
			});
			var mySwiper8 = new Swiper(".fixed-header .swiper-container", {
				slidesPerView: 3,
				slidesPerGroup: 1,
				spaceBetween: 27,
				touchRatio: 1,
				allowTouchMove: false,
				navigation: {
					nextEl: ".special-offers_next",
					prevEl: ".special-offers_prev"
				},
				breakpoints: {
					767: {
						allowTouchMove: true,
						slidesPerView: 2,
						slidesPerGroup: 1,
						spaceBetween: 16,
					},
					// 600: {
					// 	slidesPerView: 2,
					// },
					// 768: {
					// 	slidesPerView: 2,
					// 	slidesPerGroup: 1,
					// 	spaceBetween: 24
					// },
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true
				},
				thumbs: {
					swiper: mySwiper7,
					swiper: mySwiper5
				}
			});
			var mySwiper5 = new Swiper(".js-swiper-comparison", {
				slidesPerView: 3,
				slidesPerGroup: 1,
				spaceBetween: 27,
				allowTouchMove: false,
				// loop: true,
				// loopFillGroupWithBlank: true,
				navigation: {
					nextEl: ".special-offers_next",
					prevEl: ".special-offers_prev"
				},
				// scrollbar: {
				// 	el: ".swiper-scrollbar",
				// 	hide: false,
				// 	draggable: true
				// },
				pagination: {
					el: ".swiper-pagination",
					clickable: true
				},
				breakpoints: {
					767: {
						allowTouchMove: true,
						slidesPerView: 2,
						touchRatio: 1,
						spaceBetween: 16,
						slidesPerGroup: 1,
						pagination: {
							type: "fraction",
						},
					},
					// 	600: {
					// 		slidesPerView: 1,
					// 	},
					// 	768: {
					// 		slidesPerView: 2,
					// 		slidesPerGroup: 1,
					// 	},
				},
				thumbs: {
					swiper: mySwiper7,
					swiper: mySwiper8
				}
			});
			let comparisonItem = document.querySelectorAll(".comparison__item");
			let comparisonList = document.querySelector(".comparison__list");
			if (comparisonItem.length > 1) {
				comparisonList.classList.add("triangle");
			}
		}
		if ($(".diagram").length) {
			var value = 0;
			var array = [];
			$(".diagram__items").each(function (index, el) {
				var arr = [];
				$(this).find(".diagram__pic").each(function (index, element) {
					arr.push($(element).data("param1"));
					array.push($(element).data("param1"));
				});
				var maxVal = Math.max.apply(null, arr);
				$(".diagram__maxvalue").text(maxVal);
				value = maxVal;
			});
			var zeroCheck = array.reduce(function (prev, next) {
				return prev + next;
			});
			if (zeroCheck == 0) {
				$(".diagram__items .swiper-slide").each(function (index, el) {
					var data1 = $(this).find(".diagram__pic").data("param1");
					$(this).find(".diagram__text").text(data1 + "  руб");
					$(this).find(".schedule").css({
						"height": ($(this).find(".diagram__pic").data("param1") / 100 + "%")
					});
				});
			} else {
				$(".diagram__items .swiper-slide").each(function (index, el) {
					var data1 = $(this).find(".diagram__pic").data("param1");
					$(this).find(".diagram__text").text(data1 + "  руб");
					$(this).find(".schedule").css({
						"height": ($(this).find(".diagram__pic").data("param1") / value * 100 + "%")
					});
				});
			}
			$(".js-diagram__param2").click(function () {
				var array = [];
				$(".diagram__tabs").removeClass("active");
				$(this).addClass("active");
				$(".diagram__items").each(function (index, el) {
					var arr = [];
					$(this).find(".diagram__pic").each(function (index, element) {
						arr.push($(element).data("param2"));
						array.push($(element).data("param2"));
					});
					var maxVal = Math.max.apply(null, arr);
					$(".diagram__maxvalue").text(maxVal);
					value = maxVal;
				});
				var zeroCheck = array.reduce(function (prev, next) {
					return prev + next;
				});
				if (zeroCheck == 0) {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param2");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param2") / 100 + "%")
						});
					});
				} else {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param2");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param2") / value * 100 + "%")
						});
					});
				}
			});
			$(".js-diagram__param1").click(function () {
				var array = [];
				$(".diagram__tabs").removeClass("active");
				$(this).addClass("active");
				$(".diagram__items").each(function (index, el) {
					var arr = [];
					$(this).find(".diagram__pic").each(function (index, element) {
						arr.push($(element).data("param1"));
						array.push($(element).data("param1"));
					});
					var maxVal = Math.max.apply(null, arr);
					$(".diagram__maxvalue").text(maxVal);
					value = maxVal;
				});
				var zeroCheck = array.reduce(function (prev, next) {
					return prev + next;
				});
				if (zeroCheck == 0) {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param1");
						$(this).find(".diagram__text").text(data1 + "  руб");
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param1") / 100 + "%")
						});
					});
				} else {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param1");
						$(this).find(".diagram__text").text(data1 + "  руб");
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param1") / value * 100 + "%")
						});
					});
				}
			});
			$(".js-diagram__param3").click(function () {
				var array = [];
				$(".diagram__tabs").removeClass("active");
				$(this).addClass("active");
				$(".diagram__items").each(function (index, el) {
					var arr = [];
					$(this).find(".diagram__pic").each(function (index, element) {
						arr.push($(element).data("param3"));
						array.push($(element).data("param3"));
					});
					var maxVal = Math.max.apply(null, arr);
					$(".diagram__maxvalue").text(maxVal);
					value = maxVal;
				});
				var zeroCheck = array.reduce(function (prev, next) {
					return prev + next;
				});
				if (zeroCheck == 0) {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param3");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param3") / 100 + "%")
						});
					});
				} else {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param3");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param3") / value * 100 + "%")
						});
					});
				}
			});
			$(".js-diagram__param4").click(function () {
				var array = [];
				$(".diagram__tabs").removeClass("active");
				$(this).addClass("active");
				$(".diagram__items").each(function (index, el) {
					var arr = [];
					$(this).find(".diagram__pic").each(function (index, element) {
						arr.push($(element).data("param4"));
						array.push($(element).data("param4"));
					});
					var maxVal = Math.max.apply(null, arr);
					$(".diagram__maxvalue").text(maxVal);
					value = maxVal;
				});
				var zeroCheck = array.reduce(function (prev, next) {
					return prev + next;
				});
				if (zeroCheck == 0) {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param4");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param4") / 100 + "%")
						});
					});
				} else {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param4");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param4") / value * 100 + "%")
						});
					});
				}
			});
			$(".js-diagram__param5").click(function () {
				var array = [];
				$(".diagram__tabs").removeClass("active");
				$(this).addClass("active");
				$(".diagram__items").each(function (index, el) {
					var arr = [];
					$(this).find(".diagram__pic").each(function (index, element) {
						arr.push($(element).data("param5"));
						array.push($(element).data("param5"));
					});
					var maxVal = Math.max.apply(null, arr);
					$(".diagram__maxvalue").text(maxVal);
					value = maxVal;
				});
				var zeroCheck = array.reduce(function (prev, next) {
					return prev + next;
				});
				if (zeroCheck == 0) {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param5");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param5") / 100 + "%")
						});
					});
				} else {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param5");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param5") / value * 100 + "%")
						});
					});
				}
			});
			$(".js-diagram__param6").click(function () {
				var array = [];
				$(".diagram__tabs").removeClass("active");
				$(this).addClass("active");
				$(".diagram__items").each(function (index, el) {
					var arr = [];
					$(this).find(".diagram__pic").each(function (index, element) {
						arr.push($(element).data("param6"));
						array.push($(element).data("param6"));
					});
					var maxVal = Math.max.apply(null, arr);
					$(".diagram__maxvalue").text(maxVal);
					value = maxVal;
				});
				var zeroCheck = array.reduce(function (prev, next) {
					return prev + next;
				});
				if (zeroCheck == 0) {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param6");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param6") / 100 + "%")
						});
					});
				} else {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param6");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param6") / value * 100 + "%")
						});
					});
				}
			});
			if (windowWidth2 < 768) {
				$(".diagram__sidebar").click(function () {
					$(this).toggleClass("active");
				});
				$(".comparison__list").click(function () {
					$(this).toggleClass("active");
				});
				// mySwiper7.controller.control = mySwiper8;
				// // mySwiper8.controller.control = mySwiper7;
				// mySwiper7.controller.control = mySwiper5;
			}
		}
	});
	$(function () {
		$(".js-glossary__title,.js-glossary__items").click(function () {
			$(this).parent().toggleClass("closed").removeClass("only-link").find(".js-glossary__li").removeClass("active");
			$(this).parent().find(".js-glossary__item").removeClass("test");
		});
		$(".js-glossary .js-glossary__li").click(function () {
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
				if ($(this).parent().parent().hasClass("only-link")) {
					$(".js-glossary").addClass("closed").removeClass("only-link");
				}
			} else {
				$(this).addClass("active");
			}
		});
		$(".js-glossary.only-link .js-glossary__li.active").click(function () {
			e.stopPropagation();
			e.preventDefault();
			$(".js-glossary").addClass("closed").removeClass("only-link");
		});
		$(".js-glossary a").click(function (e) {
			e.preventDefault();
		});
		var arrElem = document.querySelectorAll(".js-glossary__item");
		var arrLink = document.querySelectorAll(".js-glossary__li");
		var arrayElem = [];
		for (var i = 0; i < arrElem.length; i++) {
			arrayElem.push(arrElem[i]);
			arrElem[i].addEventListener("click", function (e) {
				e.preventDefault();
				e.stopPropagation();
				$(".js-glossary__li.active").removeClass("active");
				$(".js-glossary").addClass("closed");
				var test = arrayElem.indexOf(e.target);
				$(".js-glossary__item").removeClass("test");
				$(arrayElem[test]).addClass("test").parent().parent().removeClass("closed").addClass("only-link");
				var activeEl = $(arrLink[test]).addClass("active");
				$("html, body").animate({
					scrollTop: $(activeEl).offset().top
				}, 1000);
			});
		}
	});
	$(function () {
		$("[data-fancybox=\"gallery\"]").fancybox({});
		// $('[data-fancybox="certificat"]').fancybox({
		// });
		$("[data-scroll]").click(function () {
			event.preventDefault();
			var id = $(this).attr("href"),
				top = $(id).offset().top;
			$("body,html").animate({
				scrollTop: top
			}, 1500);
			return false;
		});
	});
	if ($("[type=tel],[title=Телефон],.js-phone_mask").length) {
		// setTimeout(function () {
		$("[title=Телефон],.js-phone_mask").attr("type", "tel");
		// $("[title=Телефон],.js-phone_mask,[title=Телефон]").prop('required', true);
		$("[title=Телефон],.js-phone_mask,[title=Телефон]").val("");
		Inputmask.extendAliases({
			"customAlias": {
				mask: "+7 (999) 999-99-99",
				oncomplete: function () {
					$(this).removeClass("BadPols");
				},
				onincomplete: function () {
					$(this).addClass("BadPols");
					$(this).val("");
				},
			}
		});
		Inputmask("customAlias").mask("[type=tel]");
		// }, 300);
	}
	if ($(".page__title.content-top__title.content-top__title_top span").length > 0) {
		$(".content-top").addClass("content-top__tags");
	}
	if ($(".comparison")) {
		$(".js-compare_block-change.active").parent().addClass("order");
		if ($(".comparison__link")) {
			$(".comparison__list").each(function () {
				let category = $(this).find(".comparison__link");
				if (category.hasClass("active")) {
					$(this).parent().addClass("order");
					let categoryHeight = document.querySelector(".comparison__link.js-compare_block-change.active").parentNode.offsetHeight;
					document.querySelector(".comparison__list").style.height = `${categoryHeight}px`;
				} else {
					$(".comparison__list .comparison__item:eq(0)").addClass("order");
				}
			});
			// if (select.hasClass('active')) {
			// 	console.log('1')
			// }
		}
	}
	tippy(".catalog .link-pop-glossary .icons-prop-item", {
		// change these to your liking
		arrow: true,
		placement: "top", // top, right, bottom, left
		// trigger: 'click',
		// maxWidth: 300, //px or string
		interactive: true,
		// leave these as they are
		// followCursor: true,
		allowHTML: true,
		theme: "light",
		appendTo: () => document.body,
		// ignoreAttributes: true,
		content(reference) {
			const title = reference.getAttribute("title");
			reference.removeAttribute("title");
			return title;
		},
	});
	tippy(".delivery__banner", {
		// change these to your liking
		arrow: true,
		placement: "top", // top, right, bottom, left
		// trigger: 'click',
		// maxWidth: 300, //px or string
		interactive: true,
		// leave these as they are
		// followCursor: true,
		allowHTML: true,
		theme: "light",
		appendTo: () => document.body,
		// ignoreAttributes: true,
		content(reference) {
			console.log(reference);
			const title = reference.getAttribute("title");
			const href = reference.getAttribute("href");
			reference.removeAttribute("title");
			return `<a href='${href}' >${title}</a>`;
		},
	});
	$(".product-card .link-pop-glossary").each(function (i, el) {
		tippy(el, {
			arrow: true,
			placement: "top", // top, right, bottom, left
			// trigger: 'click',
			// maxWidth: 300, //px or string
			interactive: true,
			// leave these as they are
			// followCursor: true,
			allowHTML: true,
			hideOnClick: true,
			theme: "light",
			appendTo: () => document.body,
			// ignoreAttributes: true,
			content: el.querySelector(".popup-prop")
		});
	});
	$(".load-more").click(function () {
		$(document).ajaxSuccess(function () {
			if (document.querySelectorAll(".link-pop-glossary .icons-prop-item[title]").length > 0) {
				tippy(".catalog .link-pop-glossary .icons-prop-item[title]", {
					// change these to your liking
					arrow: true,
					placement: "top", // top, right, bottom, left
					// trigger: 'click',
					// maxWidth: 300, //px or string
					interactive: true,
					// leave these as they are
					// followCursor: true,
					allowHTML: true,
					theme: "light",
					appendTo: () => document.body,
					// ignoreAttributes: true,
					content(reference) {
						const title = reference.getAttribute("title");
						reference.removeAttribute("title");
						return title;
					},
				});
			}
		});
	});

	function loadingAjax() {
		$.ajax({
			beforeSend: function () {
				$("body").addClass("loading-ajax");
			},
			success: function (msg) {
				$("body").removeClass("loading-ajax");
			}
		});
	}
	$("#load-items").click(loadingAjax);

	tippy(".js-tooltip", {
		arrow: true,
		placement: "right", // top, right, bottom, left
		// trigger: 'click',
		// maxWidth: 300, //px or string
		interactive: true,
		// leave these as they are
		// followCursor: true,
		allowHTML: true,
		hideOnClick: true,
		theme: "light",
		appendTo: () => document.body,
		// ignoreAttributes: true,
		content: this.querySelector(".popup-gloss")
	});
});
$(window).on("load", function () {
	var windowWidth2 = $(window).width();
	setTimeout(function () {
		var mySwiper = new Swiper(".js-swiper-main", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
			// If we need pagination
			pagination: {
				el: ".swiper-pagination",
				clickable: true
			},
			// Navigation arrows
			navigation: {
				nextEl: ".main_next",
				prevEl: ".main_prev"
			},
			// And if we need scrollbar
			scrollbar: {
				el: ".swiper-scrollbar",
				draggable: true
			}
		});
		var galleryThumbs = new Swiper(".js-gallery-thumbs", {
			spaceBetween: 9,
			slidesPerView: 6,
			freeMode: true,
			// direction: "vertical",
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			touchRatio: 0.2,
			slideToClickedSlide: true,
			breakpoints: {
				// when window width is <= 320px
				// 420: {
				//   slidesPerGroup: 1,
				//   slidesPerView: 1,
				//   spaceBetween: 0
				// },
				// // // when window width is <= 480px
				// // 480: {
				// 700: {
				//   slidesPerView: 2,
				//   slidesPerGroup: 2,
				//   spaceBetween: 20
				// },
				768: {
					spaceBetween: 14
				}
			},
			navigation: {
				nextEl: ".thumbs-next",
				prevEl: ".thumbs-prev"
			},
		});
		var galleryTop = new Swiper(".js-gallery-top", {
			spaceBetween: 24,
			// navigation: {
			// 	nextEl: '.swiper-button-next',
			// 	prevEl: '.swiper-button-prev',
			// },
			pagination: {
				el: ".gallery-top__pagination",
				clickable: true
			},
			thumbs: {
				swiper: galleryThumbs
			}
		});
	}, 100);
	if ($(".filter-new").length) {
		$(".filter-new .bx-filter-parameters-box-container").each(function () {
			if ($(this).find(".checkbox").length >= 4) {
				$(this).addClass("more");
				$(this).find(".checkbox").eq(3).addClass("js-autoHeight");
				$(this).find(".js-autoHeight").hide();
				$(this).find(".js-autoHeight").nextAll(".checkbox").hide();
				// $('.js-autoHeight').each(function () {
				// 	var elHeight = $(this).offset().top
				// 	var elHeightParent = $(this).parent().offset().top
				// 	var summ = elHeight - elHeightParent;
				// 	$(this).closest('.bx-filter-parameters-box-container').css('height', summ + 27);
				// })
			}
		});
		$("<span class=\"more-text js-more-text\">Показать еще</span>").prependTo($(".more .col-xs-12"));
		$(".js-more-text").click(function () {
			if ($(this).parent().parent().hasClass("more")) {
				$(this).parent().parent().removeClass("more");
				$(this).text("Свернуть");
				$(this).siblings(".js-autoHeight").show();
				$(this).siblings(".js-autoHeight").nextAll(".checkbox").show();
			} else {
				$(this).parent().parent().addClass("more");
				$(this).text("Показать еще");
				$(this).siblings(".js-autoHeight").hide();
				$(this).siblings(".js-autoHeight").nextAll(".checkbox").hide();
				// $(this).siblings('.js-autoHeight').each(function () {
				// 	var elHeight = $(this).offset().top
				// 	var elHeightParent = $(this).parent().offset().top
				// 	var summ = elHeight - elHeightParent;
				// 	$(this).closest('.bx-filter-parameters-box-container').css('height', summ + 27);
				// })
			}
		});
	}
	if ($(".filter__form.js-form").length) {
		$(".filter__form.js-form .filter__checkbox").each(function () {
			if ($(this).find("label").length > 4) {
				$(this).addClass("more");
				$(this).find("label").eq(2).addClass("js-autoHeight");
				$(".js-autoHeight").each(function () {
					var elHeight = $(this).offset().top;
					var elHeightParent = $(this).parent().offset().top;
					var summ = elHeight - elHeightParent;
					$(this).closest(".filter__checkbox").css("height", summ + 27);
				});
			}
		});
		$("<span class=\"more-text js-more-text\">Показать еще</span>").prependTo($(".more"));
		$(".js-more-text").click(function () {
			if ($(this).parent().hasClass("more")) {
				$(this).parent().removeClass("more");
				$(this).parent().css("height", "auto");
				$(this).text("Свернуть");
			} else {
				$(this).parent().addClass("more");
				$(this).text("Показать еще");
				$(this).siblings(".js-autoHeight").each(function () {
					var elHeight = $(this).offset().top;
					var elHeightParent = $(this).parent().offset().top;
					var summ = elHeight - elHeightParent;
					$(this).closest(".filter__checkbox").css("height", summ + 27);
				});
			}
		});
	}
	if ($(".comparison").length) {
		// 	// if (select.hasClass('active')) {
		// 	// 	console.log('1')
		// 	// }
		// }
		if (windowWidth2 > 767) {
			$(".thead__comparison").css({
				"height": ($(".products-line").outerHeight() + "px")
			});
			$(document).on("click", function (e) {
				var container = $("#js-menu");
				if (!container.is(e.target) && container.has(e.target).length === 0) {
					//проверяем, чтобы клик был не на блоке и не на потомках блока
					$(".dropdown-menu").removeClass("active");
				}
			});
		} else {
			$(".thead__comparison").css({
				"marginBottom": ($(".products-line").innerHeight() + "px")
			});
			$(".js-swiper-comparison").css({
				"marginTop": ($(".thead__comparison").height() + "px")
			});
			$(".comparison .js-swiper-pagination").css({
				"top": ($(".thead__comparison").height() - 47 + "px")
			});
			$(".comparison .js-swiper-prev").css({
				"top": ($(".thead__comparison").height() - 28 + "px")
			});
			$(".comparison .js-swiper-next").css({
				"top": ($(".thead__comparison").height() - 28 + "px")
			});
			$(".comparison__main .characteristic__row").each(function (index, el) {
				if ($(this).text().length > 50) {
					$(this).addClass("level");
					$(".js-swiper-comparison .characteristic__row").eq(index).addClass("level");
				}
			});
		}
		$(".comparison__main .characteristic__row").each(function (index, el) {
			if ($(this).text().length > 50) {
				$(this).addClass("level");
				$(".js-swiper-comparison .characteristic__row").eq(index).addClass("level");
			}
			if ($(this).text().length > 110) {
				$(this).addClass("level-2");
				$(".js-swiper-comparison .characteristic__row").eq(index).addClass("level-2");
			}
		});
		$(".comparison__main .characteristic__row").each(function (index, el) {
			if (windowWidth2 >= 768) {
				var height = $(".js-swiper-comparison .characteristic__row").eq(index).outerHeight();
				$(el).outerHeight(height);
			} else {
				setTimeout(function () {
					var height = $(".js-swiper-comparison .characteristic__row").eq(index).outerHeight();
					$(el).outerHeight(height);
				}, 500);
				setTimeout(function () {
					var height = $(".js-swiper-comparison .characteristic__row").eq(index).outerHeight();
					$(el).outerHeight(height);
				}, 2000);
				setTimeout(function () {
					var height = $(".js-swiper-comparison .characteristic__row").eq(index).outerHeight();
					$(el).outerHeight(height);
				}, 4000);
			}
		});
		$(".js-comparison__select.active").trigger("click");
	}
	if ($("a[data-fancybox=\"gallery\"] img").length) {
		// $('a[data-fancybox="gallery"] img').eq(0).each(function () {
		// 	var img = new Image($(this));
		// 	img.src = $(this).attr('src');
		// 	if (img.height > 0) {
		// 		$(this).height(img.height)
		// 	}
		// });
		// setInterval(function () {
		// 	$('a[data-fancybox="gallery"] img').each(function () {
		// 		var img = new Image($(this));
		// 		img.src = $(this).attr('src');
		// 		if (img.height > 0) {
		// 			$(this).height(img.height)
		// 		}
		// 	});
		// }, 100);
		// setInterval(function () {
		// 	$('a[data-fancybox="gallery"] img').eq(0).each(function () {
		// 		var img = new Image($(this));
		// 		img.src = $(this).attr('src');
		// 		if (img.height > 0) {
		// 			$(this).height(img.height)
		// 		}
		// 	});
		// }, 300);
	}
	if (windowWidth2 > 767) {
		var mySwiper4 = new Swiper(".col-md-3 .js-container-upsale", {
			// Optional parameters
			// slidesPerGroup: 1,
			slidesPerView: 1,
			slidesPerColumn: 2,
			spaceBetween: 24,
			allowTouchMove: false,
			// direction: "horizontal",
			// loop: true,
			// If we need pagination
			navigation: {
				nextEl: ".upsale__next",
				prevEl: ".upsale__prev"
			},
			pagination: {
				el: ".swiper-pagination-upsale",
				clickable: true
			},
			breakpoints: {
				// when window width is <= 320px
				767: {
					allowTouchMove: true,
					slidesPerView: 1,
					slidesPerColumn: 2,
				}
			}
			// Navigation arrows
			// navigation: {
			// 	nextEl: ".main_next",
			// 	prevEl: ".main_prev"
			// },
			// And if we need scrollbar
			// scrollbar: {
			// 	el: ".swiper-scrollbar"
			// }
		});
	} else {
		var mySwiper444 = new Swiper(".category-container", {
			allowTouchMove: true,
			slidesPerView: 2,
			slidesPerColumn: 1,
			spaceBetween: 24,
			pagination: {
				el: ".category-pagination",
				clickable: true
			},
			breakpoints: {
				560: {
					slidesPerView: 1,
				}
			},
		});
		$(".catalog .instructions").each(function (indx, element) {
			var mySwiper22 = new Swiper(".instructions__items.swiper-container", {
				// navigation: {
				// 	nextEl: ".practical-features__next",
				// 	prevEl: ".practical-features__prev"
				// },
				slidesPerView: 2.5,
				// slidesPerGroup: 1,
				spaceBetween: 12,
				pagination: {
					el: ".swiper-pagination-instructions",
					clickable: true
				},
				breakpoints: {
					550: {
						slidesPerView: 1.5
					},
				}
			});
		});
		(function () {
			let moreText = document.querySelector(".catalog__description.description");
			if (moreText) {
				let button = document.createElement("div");
				let openText = "Читать подробнее",
					closeText = "Свернуть";
				moreText.append(button);
				button.classList.add("js-switch", "description__switch");
				button.innerHTML = openText;
				button.onclick = function () {
					this.parentElement.classList.toggle("active");
					button.innerHTML == "Читать подробнее" ? button.innerHTML = closeText : button.innerHTML = openText;
				};
			}
		})();
		(() => {
			let brandContent = document.querySelector(".catalog__description");
			if (brandContent) {
				if (brandContent.querySelector(".description__text") === null) {
					brandContent.querySelector(".js-switch.description__switch").style.display = "none";
				}
			}
		})();
		// (function () {
		// 	let moreText = document.querySelector('.js-reviews-main .swiper-container');
		// 	if (moreText) {
		// 		let button = document.createElement('div');
		// 		let openText = 'Читать подробнее',
		// 			closeText = 'Свернуть';
		// 		moreText.append(button);
		// 		button.classList.add('js-switch', 'reviews-main__switch');
		// 		button.innerHTML = openText
		// 		button.onclick = function () {
		// 			this.parentElement.classList.toggle('active');
		// 			button.innerHTML == 'Читать подробнее' ? button.innerHTML = closeText : button.innerHTML = openText;
		// 		};
		// 	}
		// })();
		$(function () {
			let check = document.querySelector(".all-video.js-news__inner");
			if (check) {
				$(".all-video__bottom #load-items").on("click", function (e) {
					e.preventDefault();
					$("html,body").animate({
						scrollTop: $(".js-news__inner .all-video__item:last-child").offset().top
					}, 1500);
				});
			}
		});
	}
	if ($(".MultiFile-intercepted").length) {
		// Убрать прикрепленный файл после отправки рекламации
		$(document).ajaxSuccess(function () {
			let returnExchangeForm = document.querySelector(".return-exchange__form");
			returnExchangeForm.querySelectorAll(".MultiFile-remove").forEach(element => element.click());
		});
	}
	// (function () {
	// 	let moreText = document.querySelector('.js-button');
	// 	let mainTags = document.querySelector('.tags__list');
	// 	if (moreText) {
	// 		moreText.classList.add('show');
	// 		moreText.onclick = showTags;
	// 		showTags();
	// 		function showTags() {
	// 			var num = 0;
	// 			var lastItemIndex = 0;
	// 			var tagsList = mainTags.querySelectorAll('.tags__item');
	// 			tagsList.forEach((element, index) => {
	// 				if (element.classList.contains("show") === false && num < 7) {
	// 					element.classList.add('show');
	// 					num++;
	// 					lastItemIndex = index;
	// 				}
	// 				if (num <= 7) {
	// 					return false;
	// 				}
	// 			});
	// 			if (tagsList.length <= lastItemIndex + 1) {
	// 				moreText.classList.remove('show');
	// 			}
	// 		}
	// 	} else {
	// 	}
	// })();

	$("body").append(function (index) {
		return $("<a href=\"#wrapper\" class=\"go_to_top go_to\">");
	});
	var btn = $(".go_to_top");
	$(window).scroll(function () {
		if ($(window).scrollTop() > 500) {
			btn.addClass("visible_goto");
		} else {
			btn.removeClass("visible_goto");
		}
	});
	btn.on("click", function (e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "300");
	});
});
