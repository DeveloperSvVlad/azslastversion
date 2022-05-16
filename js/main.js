
document.addEventListener('DOMContentLoaded', () => {
    $("body").on('click', '.js-scroll-link', function(e){
        var fixed_offset = 150;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
     });

     
    const modal = () => {
        let body = document.querySelector('body');
        let closestItemByClass = function(item, className) {
            let node = item;
            while(node) {
                if (node.classList.contains(className)) {
                    return node;
                }
                node = node.parentElement;
            }
            return null;
        };
        let closestAttr = function(item, attr) {
            let node = item;
            while(node) {
                var attrValue = node.getAttribute(attr);
                if (attrValue) {
                    return attrValue;
                }
                node = node.parentElement;
            }
            return null;
        };


        //! Открытие попапа
        let showPopup = function (target) {
            target.classList.add('active');
        }

        //! Закрытие попапа
        let closePopup = function (target) {
            target.classList.remove('active');
        }

        body.addEventListener('click', function (e) {
            let target = e.target;
            let popupClass =  closestAttr(target, 'data-popup');
            if (popupClass === null) {
                return;
            }
            e.preventDefault();
            let popup = document.querySelector('.' + popupClass);

            if (popup) {
                showPopup(popup);
                body.classList.add('hidden');
            } 
        })
    
    //! Закрытие по ESQ
    body.addEventListener('keydown', function (e) {
        if (e.keyCode !==27) {
            return;
        }
        var popup = document.querySelector('.popup.active')
        if (popup)  {
            closePopup(popup);
            body.classList.remove('hidden');
        }
    })
    
    //! Закрытие вне contenta (по крестики и по области)
    body.addEventListener('click', function (e) {
        var target = e.target;
        if (target.classList.contains('popup__btn-close') ||  target.classList.contains('popup__inner') ) {
                var  popup  = closestItemByClass(target, 'popup');
                closePopup(popup);
                body.classList.remove('hidden');
        }
    })
    }
    modal();

    const setTime = () => {
        const popupTrigger = document.querySelector('.js-popup-main');
        const body = document.querySelector('body');
        let timeOut = 10000;
        setTimeout(() => {
            popupTrigger.classList.add('active');
            body.classList.add('hidden');
        }, timeOut);
    }
    setTime();

    let copyUrlBtn = document.querySelector('.js-copy-url');
    const copyUrl = (linkUrl) => {
        linkUrl.addEventListener('click', function () {
            let tempInput = document.createElement('textarea');
            tempInput.style.position = 'absolute';
            tempInput.style.left = '-9999px';
            tempInput.setAttribute('readonly', '');
            tempInput.value = window.location.href;

            linkUrl.parentNode.appendChild(tempInput);
            
            tempInput.select();
            tempInput.setSelectionRange(0, 99999);
            document.execCommand('copy');
            tempInput.parentNode.removeChild(tempInput);
        })
    }
    if (copyUrlBtn) {
        copyUrl(copyUrlBtn)
    }
    // Js scroll header
    const fixedBlock = document.querySelector('.js-scroll');
    const checkedScroll = () => {
        if (window.pageYOffset > 0) {
            fixedBlock.classList.add('scroll');
        } else {
            fixedBlock.classList.remove('scroll');
        }
    }

    window.addEventListener('scroll', checkedScroll);
    document.addEventListener('DOMContentLoaded', checkedScroll);

    // Head height and show search after click btn
    const headerHeight = document.querySelector('.js-head').clientHeight;
    const searchBtn = document.querySelector('.js-search-btn');
    const searchBlock = document.querySelector('.js-search-block');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            searchBlock.classList.toggle('show');
            if (searchBlock.classList.contains('show')) {
                searchBlock.style.top = `${headerHeight}` + 'px'; 
            } else {
                searchBlock.style.top = '';  
            }
        })
    }
    const sliderHero = document.querySelector('.js-slider-hero');
    const newsSlider = document.querySelector('.js-news-slider');
    const partnersSlider = document.querySelector('.js-patners-slider');
    const gallerySlider = document.querySelector('.js-slider-gallery');
    const anySlider = document.querySelector('.js-any-slider');
    const articleSlider = document.querySelector('.js-article-slider')
    if (sliderHero) {
        const mySwiper = new Swiper(sliderHero, {
            loop: true,
            slidesPerView: 1,
            observer: true,
            speed: 1700,
            parallax: true,
            autoplay: {
                delay: 6000,
            },
             navigation: {
                nextEl: '.js-next-hero',
                prevEl: '.js-prev-hero',
             },
        });
    }
    if (newsSlider) {
        const mySwiper = new Swiper(newsSlider, {
            spaceBetween: 20,
            observer: true,
            loop: false,
            speed: 1700,
            grabCursor: true,
            slidesPerView: 3,
            breakpoints: {
                1161: {
                    spaceBetween: 40,
                },
                993: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 2.2,
                },
                1: {
                    slidesPerView: 1.3,
                }
               
            },
            autoplay: false,
        });
    }
    if (partnersSlider) {
        const mySwiper = new Swiper(partnersSlider, {
            spaceBetween: 20,
            observer: true,
            loop: true,
            grabCursor: true,
            speed: 1000,
            breakpoints: {
                993: {
                    spaceBetween: 40,
                    slidesPerView: 4,
                },
                576: {
                    slidesPerView: 3,
                },
                1: {
                    slidesPerView: 2,
                }
               
            },
            autoplay: {
                delay: 2000,
            },
            navigation: {
                nextEl: '.js-next-partners',
                prevEl: '.js-prev-partners',
            },
        });
    }
    if (gallerySlider) {
        var swiperGallery = new Swiper(gallerySlider, {
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 1,
            loop: true,
            spaceBetween: 30,
            speed: 1500,
            loopAdditionalSlides: 10,
            autoplay: {
                delay: 10000,
            },
            navigation: {
                nextEl: '.js-next-gallery',
                prevEl: '.js-prev-gallery',
            },
        });
    }
    if (anySlider) {
        const mySwiper = new Swiper(anySlider, {
            slidesPerView: 1,
            spaceBetween: 20,
            observer: true,
            watchSlidesVisibility: true,
            loop: true,
            speed: 1700,
            navigation: {
                nextEl: '.js-next-any',
                prevEl: '.js-prev-any',
            }
        });
    }
    if (articleSlider) {
        const mySwiper = new Swiper(articleSlider, {
            observer: true,
            loop: true,
            speed: 1700,
            autoplay: true,
            spaceBetween: 15,
            breakpoints: {
                993: {
                    spaceBetween: 40,
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1: {
                    slidesPerView: 1.2,
                }
               
            },
            navigation: {
                nextEl: '.js-next-article',
                prevEl: '.js-prev-article',
            }
        });
    }
   
    // //? Burger Menu and Link ------------------------------------------------>>>>>>
    const body = document.querySelector('body'),
          burger = document.querySelector('.burger'),
          menu = document.querySelector('.header__menu'),
          closeMenu = document.querySelector('.js-menu-close'),
          menyWrapper = document.querySelector('.header__menu');


    const closeBurger = () => {
        menu.classList.remove('active');
        body.classList.remove('hidden');
    }
    const openBurger = () => {
        menu.classList.add('active');
        body.classList.add('hidden')
    }
    closeMenu.addEventListener('click', closeBurger);
    burger.addEventListener('click', openBurger);

    menyWrapper.addEventListener('click', function (event) {
    if (event.target.classList.contains('header__menu')) {
         closeBurger()
        }
    })

    //? Burger Menu and Link END ------------------------------------------------>>>>>>
    const menuLink = document.querySelectorAll('.menu__link');
    menuLink.forEach((el) =>  {
    el.addEventListener('click', (e) => {
    if (el.getAttribute("href") === "#") {
        e.preventDefault();
    } else {
        closeBurger();
        }
        })
    })
})







