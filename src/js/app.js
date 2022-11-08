import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


const swiperHeader = new Swiper('.header_swiper', {

    wrapperClass: "header__wrapper",
    slideClass: "header__slide",
    navigation: {
        nextEl: '.main-next',
        prevEl: '.main-prev',
    },
    loop: true,
    loopedSlides: 2,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 500,
    nested: true,
    observer: true,
    observeParents: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

const carousel_wrapper = new Swiper('.products__wrapper', {
    wrapperClass: "product__body",
    slideClass: "product__item",
    navigation: {
        nextEl: '.carous-prev',
        prevEl: '.carous-next',
    },
    slidesPerGroup: 2,
    loop: true,
    loopedSlides: 4,
    speed: 3000,
    nested: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slidesPerView: 4,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 4,
        }
    },
    autoplay: {
        delay: 600,
        stopOnLastSlide: true,
        disableOnInteraction: false
    },

});






let marker = document.querySelector('#marker');
let item = document.querySelectorAll('.main-menu a')
const logo = document.querySelector(".logo");
const header_menu = document.querySelector(".header__menu");
const header_nav = document.querySelector(".main-menu");
function addRemoveActiveClass() {

    if (window.pageYOffset >= 170) {
        logo.classList.add("active");
        header_menu.classList.add("active");
        header_nav.classList.add("active");
        marker.classList.add('active')

    } else {
        logo.classList.remove("active");
        header_menu.classList.remove("active");
        header_nav.classList.remove("active")
        marker.classList.remove('active')
    }
}
window.onscroll = () => {
    addRemoveActiveClass();
}
//marker menu//

function indicator(e) {
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}
item.forEach(a => {
    a.addEventListener("mouseover", (e)=>{
        indicator(e.target);
    });
});

//меню бургера//
const burger_menu = document.querySelector(".hamburger__icon");
const mob_menu = document.querySelector(".mobile-menu");
//
if (burger_menu) {
    burger_menu.addEventListener("click", function (e) {
        burger_menu.classList.toggle("open");
        mob_menu.classList.toggle("open");
    });
}

//выпадающее меню//
let intervalId;
let handle = document.querySelectorAll(".menu__item-handle");

handle.forEach(e => {
    e.addEventListener('click', e => {

        const menu = e.currentTarget.dataset.path;
        const data_target = document.querySelector(`[data-target=${menu}]`)
        let container = document.querySelectorAll('.mobile-sub-menu');

        container.forEach(e => {

            if (!data_target.classList.contains('open')) {
                data_target.classList.add('active');
                data_target.style.height = 'auto';
                let height = data_target.clientHeight + "px";

                data_target.style.height = '0px';

                intervalId = setTimeout(() => {
                    data_target.classList.add('open');
                    data_target.style.height = height;
                }, 0);
            }
            if (data_target.classList.contains('open')) {
                clearTimeout(intervalId);
                data_target.classList.remove('active');
                intervalId = setTimeout(() => {
                    data_target.classList.remove('open');
                }, 0);
            } else {
                data_target.style.height = '0px';
                // data_target.addEventListener('transitionend', function () {
                //     // data_target.classList.remove('active');
                // }, {
                //     once: true
                // });
            }
            window.onclick = e => {
                if (e.target == data_target || e.target == document.querySelector(`[data-path=${menu}]`)){
                    return;
                } else  {
                    data_target.classList.remove('active');
                    data_target.classList.remove('open');
                }
            }
        });

    });

});
//выпадающее меню футера
let intervalIdFooter;
let handle_footer = document.querySelectorAll(".footer__item-handle");
handle_footer.forEach(q => {
    q.addEventListener('click', q => {
        const menu = q.currentTarget.dataset.path;
        const data_target = document.querySelector(`[data-target=${menu}]`)
        let container = document.querySelectorAll('.content__list');

        container.forEach(q => {

            if (!data_target.classList.contains('open')) {
                data_target.classList.add('active');
                data_target.style.height = 'auto';
                let height = data_target.clientHeight + "px";

                data_target.style.height = '0px';

                intervalIdFooter = setTimeout(() => {
                    data_target.classList.add('open');
                    data_target.style.height = height;
                }, 0);
            }
            if (data_target.classList.contains('open')) {
                clearTimeout(intervalIdFooter);
                data_target.classList.remove('active');
                intervalIdFooter = setTimeout(() => {
                    data_target.classList.remove('open');
                }, 0);
            } else {
                data_target.style.height = '0px';
            }
            window.onclick = q => {
                if (q.target == data_target || q.target == document.querySelector(`[data-path=${menu}]`)){
                    return;
                } else  {
                    data_target.classList.remove('active');
                    data_target.classList.remove('open');
                }
            }
        });

    });

});



//marker lang//
let marker_lang = document.querySelector('#marker_lang');
let item_lang = document.querySelectorAll('.mobile__lang a')

function indicator1(e) {
    marker_lang.style.left = e.offsetLeft+"px";
    marker_lang.style.width = e.offsetWidth+"px";
}
item_lang.forEach(a => {
    a.addEventListener("click", (e)=>{
        indicator1(e.target);
    })
})

//появление элементов при скролле
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('title-show');

        } else {
            change.target.classList.remove('title-show');

        }
    });
}
let options = {
    threshold: [0.7]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.title__label');
for (let elm of elements) {
    observer.observe(elm);
}


function appearLeft(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('active');
            // observer1.unobserve(change.target);

        } else {
            // change.target.classList.remove('active');

        }
    });
}

let options1 = {
    threshold: [0.3]
};
let observer1 = new IntersectionObserver(appearLeft, options1);
let elements1 = document.querySelectorAll('.open-left');
for (let elm of elements1) {
    observer1.observe(elm);
}
//


    function appearRight(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('active');
                // observer2.unobserve(change.target);
            } else {
                // change.target.classList.remove('active');
            }

        });

    }
    let observer2 = new IntersectionObserver(appearRight, options1);
    let elements2 = document.querySelectorAll('.open-right');
    for (let elm of elements2) {
        observer2.observe(elm);
    }

    //активация видео
let video = document.querySelector(".video_body");
// window.addEventListener('DOMContentLoaded', function () {
if (video)
    video.addEventListener('click', function () {

        if (video.classList.contains('ready')) {
            return;
        }
        video.classList.add('ready');
        video.insertAdjacentHTML('afterbegin', `<iframe src="https://www.youtube.com/embed/FVJ_AX40ZAk?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    })

// })
if (video)
    video.addEventListener('mouseover', () =>{
        if(!video.classList.contains('ready')) {
            video.classList.add('active')
        }
    })
if (video)
   video.addEventListener('mouseout', () =>{
    if(!video.classList.contains('ready')) {
        video.classList.remove('active')
    }
})
if (video)
   video.addEventListener('click', ()=> {
            if(video.classList.contains('ready')) {
                video.classList.remove('active')
            }
        })



//аккордеон промокода в миникорзине
const collapse_toggle = document.querySelector(".collapsible-toggle");
const collapse_inner = document.querySelector(".collapsible-inner");
    collapse_toggle.addEventListener('click',()=>{
       collapse_toggle.classList.toggle('active');
       if(collapse_toggle.classList.contains('active')) {
           
           collapse_inner.style.maxHeight = collapse_inner.scrollHeight + 'px';
       } else {
           collapse_inner.style.maxHeight = 0;
       }
    })

//открытие мини корзины
const mobile_menu = document.querySelector(".mobile-menu");
const overlayG = document.querySelector(".global-overlay");
const minicart = document.querySelector(".minicart");
const cart_btn = document.querySelector(".shopping-cart");
const close_minicart = document.querySelector(".close-minicart");

const toggleMenu = function () {
    minicart.classList.toggle("active");
    // overlayG.classList.toggle('active');
}
cart_btn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
    mobile_menu.classList.remove('open')
 if (minicart.classList.contains('active')) {
     // document.body.classList.add("_lock");
 }
});

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == minicart || minicart.contains(target);
    const its_btnMenu = target == cart_btn;
    const menu_is_active = minicart.classList.contains("active");

    if (!its_menu && !its_btnMenu && menu_is_active) {
        // document.body.classList.remove("_lock");
        toggleMenu();
    }
});
close_minicart.addEventListener('click', ()=> {
    minicart.classList.remove('active')
    // overlayG.classList.remove('active')
    // document.body.classList.remove("_lock");
})


//счетчик
let counter;

// отслеживаем кнопки плюс минус в карточке продукта
window.addEventListener('click', (event)=> {
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

        const counterWrapper = event.target.closest('.item__quantity-selector');
        counter = counterWrapper.querySelector('[data-counter]');
    }
        if (event.target.dataset.action === 'plus') {
            counter.innerText = ++counter.innerText;
        }
        if (event.target.dataset.action === 'minus') {

            if (parseInt(counter.innerText) > 1) {
                counter.innerText = --counter.innerText;
            } else if (event.target.closest('.cart-item__qty') && parseInt(counter.innerText) === 1) {
                //проверяем на товар который находится в корзине
                //удаляем товар из миникорзины
                event.target.closest('.cart-item').remove();
                //отображение статуса корзины
                toggleCartStatus();
                //пересчет стоимости в корзине
                calcCartPrice();
            }
        }

        //проверяем клик на + - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.minicart__body')) {
        calcCartPrice();
    }
    })

// отслеживаем кнопку купить в карточке товара
const cartWrapper = document.querySelector(".minicart__body");

    window.addEventListener('click',function (event) {
        const card = event.target.closest('.item__wrapper')
        const productInfo = {
            // id: card.dataset.id,
            id: card.querySelector('.card_id').innerText,
            imgSrc: card.querySelector('.prod__image').getAttribute('src'),
            title: card.querySelector('.item__title').innerText,
            price: card.querySelector('.item__price').innerText,
            counter: card.querySelector('[data-counter]').innerText,
            volume: card.querySelector('.item__volume').innerText,
        }
        //сработал ли клик по кнопке купить в карточке товара
        if (event.target.hasAttribute('data-cart')) {
        //проверяем есть ли аналогичный товар в корзине
            let itemInCart =  cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

            //если товар есть в корзине
            if (itemInCart) {
                let counterElement = itemInCart.querySelector('[data-counter]');
                counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter)
            }else {
                //если товара нет в корзине
                // вставляем кусок html с данными товара
                let cartItemHTML = `
                       <div class="cart-item" data-id="${productInfo.id}">
                        <div class="cart-item__wrapper">
                          <div class="cart-item__image">
                            <a href=""><img src="${productInfo.imgSrc}" alt=""></a>
                          </div>
                          <div class="cart-item__details">
                            <div class="cart-item__info">
                              <div class="cart-item__name">${productInfo.title}</div>
                            </div>
                            <div class="cart-item__data">
                            <div class="cart-item__inner">
                                  <div class="cart-item__price">${productInfo.price}</div>
                                  <div class="item__volume"><span>${productInfo.volume}</span></div>
                             </div>
                <!--             // счетчик -->
                              <div class="cart-item__qty item__quantity-selector">
                                <span class="qty-btn minus-btn" data-action="minus">-</span>
                                <span data-counter>${productInfo.counter}</span>
                                <span class="qty-btn plus-btn" data-action="plus">+</span>
                              </div>
                <!--             // счетчик -->
                            <div class="cart-item-remove">remove</div>
                            <div id="marker_del"></div>
                            </div>
                          </div>
                        </div>
                      </div>
     `;
                //отображаем товар в миникорзине
                cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
            }
            //сбрасываем счетчик на 1
            card.querySelector('[data-counter]').innerText = '1';


            //отображение статуса корзины
            toggleCartStatus();
            //пересчет общей стоимости товаров в корзине
            calcCartPrice();
        }
    })


//плашка Корзина пуста
function toggleCartStatus (){
    const cartWrapper = document.querySelector(".minicart__body");
    const cartBottom = document.querySelector(".minicart__bottom");
    const cartEmptyBadge = document.querySelector(".alert_empty");

    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.remove('active')
        cartWrapper.classList.remove('active')
        cartBottom.classList.add('active')
    }else {
        cartEmptyBadge.classList.add('active');
        cartWrapper.classList.add('active')
        cartBottom.classList.remove('active')
    }
}

//подсчет итоговой стоимости товаров
function calcCartPrice() {
    const priceElements = document.querySelectorAll('.cart-item__price');
    const totalPriceEl = document.querySelectorAll(".col-right");
    let priceTotal = 0;

    priceElements.forEach((item)=> {
        //находим количество товара
      const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
      //добавляем стоимость товара в общую стоимость
      priceTotal += parseFloat(item.innerText) * parseFloat(amountEl.innerText);
    })
//отображаем стоимость всех товаров в итого
  totalPriceEl.forEach((e)=> {
      e.innerText = priceTotal;
  })
    }


//запрос данных товаров в карточку товара
document.addEventListener("DOMContentLoaded", function(){
    checkCart();
});
const product_card = document.querySelector(".item__wrapper");
if (product_card)
    getProducts();
    async function getProducts() {
      const response = await fetch('http://192.168.1.40/products')
      const productsArray = await response.json();
        renderProducts(productsArray);
    }
    function renderProducts(productsArray) {
        productsArray.forEach(function (item){
            let productHTML = `
             <div class="item__info">
                <div class="item__gallery-wrapper swiper">
                    <div class="slider__body swiper-wrapper">
                        <div class="item__slide swiper-slide">
                          <img src="${item.image[0]}" alt="" class="prod__image">
                        </div>
                        <div class="item__slide swiper-slide">
                            <img src="${item.image[1]}" alt="">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    </div>
                <div class="item__infoWrapper">
                    <div class="item__title">${item.name}</div>
                    <div class="item__label">
                        <p>Product code: <span class="card_id">${item.id}</span></p>
                        <p>Availability: <span>In stock ${item.stock}</span></p>
                    </div>
                    <div class="item__price">${item.price}</div>
                    <div class="item__buttons">

                        <div class="quantity_addtoCart">
 <!--             // счетчик -->
                            <div class="item__quantity-selector">
                                <span class="quantitySelector__btn" data-action="minus">-</span>
                                <span class="item__current-quantity" data-counter>1</span>
                                <span class="quantitySelector__btn" data-action="plus">+</span>
                            </div>
<!--             // счетчик -->
                            <div class="item__addtocart" >
                                <button data-cart type="submit" class="addToCart__btn">Add to Cart</button>
                            </div>
                        </div>
                        <div class="item__wishlist">
                            <a href=""><span class="icon-icon-heart"></span>Add to Wishlist</a>
                        </div>
                    </div>
                    <div class="item__description">
                    ${item.description}
<!--                        A daily moisturiser that gently resurfaces the skin to reveal a stunningly smooth complexion whilst providing SPF 30 protection.-->
                    </div>
                    <div class="item__volume">
                       Vol.: <span>${item.volume}</span>
                    </div>
                </div>
            </div>
            <div class="item__description">
                <nav class="tabs__items">
                    <a href="#tab_01" class="tabs__item">About this product</a>
                    <a href="#tab_02" class="tabs__item">Ingredients</a>
                </nav>
                <div class="tabs__body">
                    <div id="tab_01" class="tabs__block">${item.description}</div>
                    <div id="tab_02" class="tabs__block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex magnam mollitia nulla odit placeat veniam.</div>
                </div>
            </div>`;
            product_card.insertAdjacentHTML('beforeend', productHTML);

            //swiper
        const product_swiper = new Swiper ('.item__gallery-wrapper', {
            wrapperClass: "slider__body",
            slideClass: "item__slide",
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            loop: true,
            speed: 500,
            nested: true,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,

        });
        //табы продуктов
        const allTabs = document.querySelector(".tabs__items");
        document.querySelectorAll(".tabs__item").forEach((item) =>
            item.addEventListener('click', function (e){
                e.preventDefault();
                const id = e.target.getAttribute('href').replace('#', '')
                document.querySelectorAll(".tabs__item").forEach(
                    (child) => child.classList.remove('tabs__item--active'));
                document.querySelectorAll(".tabs__block").forEach(
                    (child) => child.classList.remove('tabs__block--active'));
                item.classList.add('tabs__item--active');
                document.getElementById(id).classList.add('tabs__block--active')

            }));
        if (allTabs)
            allTabs.querySelector('.tabs__item').click();

        });

    }


//запрос данных в список товаров в раздел

let cart = {};
const productsContainer = document.querySelector(".product-grids");
if (productsContainer)
    getProducts_face();

async function getProducts_face() {
    const response = await fetch('http://192.168.1.40/products')
    const productsArray = await response.json();
    renderProducts_face(productsArray);
}
let addtocart_face = document.querySelectorAll('.cart')
function renderProducts_face(productsArray) {
    productsArray.forEach(function (item){
        let face_productHTML = `
            <div class="product__item" id="${item.id}">
                <div class="product__image">
                    <a href="product_card.html"><img src="${item.image[0]}" alt=""></a>
                </div>
                <div class="product-details">
                    <div class="caption">
                        <div class="name"><a href="product_card.html">${item.name}</a></div>
                        <div class="description">${item.description}</div>
                        <div class="price">
                            <span class="price-old"></span>
                            <span class="price-new">€${item.price}</span>
                        </div>
                        <div class="button-group">
                            <div class="cart" data-art="${item.id}">
                                <a href="/">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

        productsContainer.insertAdjacentHTML('beforeend', face_productHTML);


       addtocart_face.forEach(e => {
           e.addEventListener('mouseover', addToCart);

       })
        function addToCart() {
            //добавляем товар в localStorage
            let articul = this.getAttribute('data-art');
            if (cart[articul] != undefined) {
                cart[articul]++;
            }else {
                cart[articul] = 1
            }
            localStorage.setItem('cart', JSON.stringify(cart))
            console.log(cart)
        }
    });

}

//проверяем наличие корзины в localStorage
function checkCart() {
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }

}


//добавление товара в корзину из localStorage





