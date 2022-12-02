import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
const slide1 = document.querySelector(".slide1");
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
    initialSlide: 1,
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
const banner_toolbar = document.querySelector(".banner-toolbar");
function addRemoveActiveClass() {

    if (window.pageYOffset >= 170) {
        header_menu.append(banner_toolbar);
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
if (video)
    video.addEventListener('click', function () {

        if (video.classList.contains('ready')) {
            return;
        }
        video.classList.add('ready');
        video.insertAdjacentHTML('afterbegin', `<iframe src="https://www.youtube.com/embed/FVJ_AX40ZAk?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    })

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
    overlayG.classList.toggle('active');

}
cart_btn.addEventListener("click", function(e) {
    toggleCartStatus();
    e.stopPropagation();
    toggleMenu();

    mobile_menu.classList.remove('open')
 if (minicart.classList.contains('active')) {
     document.body.classList.add("_lock");
 }
});

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == minicart || minicart.contains(target);
    const its_btnMenu = target == cart_btn;
    const menu_is_active = minicart.classList.contains("active");

    if (!its_menu && !its_btnMenu && menu_is_active) {
        minicart.classList.add('active')
        toggleCartStatus()
    }
});
close_minicart.addEventListener('click', ()=> {
    addtoIcon();
    minicart.classList.remove('active')
    overlayG.classList.remove('active')
    document.body.classList.remove("_lock");
})


//версия 2
const CART = {
    KEY: 'cart',
    contents: [],
    init(){
        //проверка наличия контента в local storage
        let _contents = localStorage.getItem(CART.KEY);
        if(_contents){
            CART.contents = JSON.parse(_contents);
        }else{
            CART.contents = [
            ];
            CART.sync();
        }
    },
    async sync(){
        let _cart = JSON.stringify(CART.contents);
        await localStorage.setItem(CART.KEY, _cart);
    },
    find(id){
        //find an item in the cart by it's id
        let match = CART.contents.filter(item=>{
            if(item.id === id)
                return true;
        });
        if(match && match[0])
            return match[0];
    },
    add(id){
        //add a new item to the cart
        //check that it is not in the cart already
        if(CART.find(id)){
            CART.increase(id, 1);
        }else{
            let arr = PRODUCTS.filter(product=>{
                if(product.id === id){
                    return true;
                }
            });
            if(arr && arr[0]){
                let obj = {
                    id: arr[0].id,
                    title: arr[0].name,
                    qty: 1,
                    itemPrice: arr[0].price,
                    img: arr[0].image,
                    volume: arr[0].volume,
                };
                CART.contents.push(obj);

                //update localStorage
                CART.sync();
                addtoIcon();

            }else{
                //product id does not exist in products data
                console.error('Invalid Product');
            }

        }

    },
    increase(id, qty=1){
        //increase the quantity of an item in the cart
        CART.contents = CART.contents.map(item=>{
            if(item.id === id)
                item.qty = item.qty + qty;
            showCart()
            return item;

        });
        //update localStorage
        CART.sync()
        addtoIcon();
    },
    reduce(id, qty=1){
        //reduce the quantity of an item in the cart
        CART.contents = CART.contents.map(item=>{
            if(item.id === id)
                item.qty = item.qty - qty;
            return item;
        });
        CART.contents.forEach(item=>{
            if(item.id === id && item.qty === 0)
              CART.remove(id);
            showCart()
            toggleCartStatus()
        });
        //update localStorage
        CART.sync();
        addtoIcon();


    },
    remove(id){
        //remove an item entirely from CART.contents based on its id
        CART.contents = CART.contents.filter(item=>{
            if(item.id !== id)
                return true;

        });
        //update localStorage
        CART.sync()

    },
    sort(field='title'){
        //sort by field - title, price
        //return a sorted shallow copy of the CART.contents array
        let sorted = CART.contents.sort( (a, b)=>{
            if(a[field] > b[field]){
                return 1;
            }else if(a[field] < a[field]){
                return -1;
            }else{
                return 0;
            }
        });
        return sorted;
        //NO impact on localStorage
    },
};


let PRODUCTS = [];

document.addEventListener('DOMContentLoaded', ()=>{
    //when the page is ready
    getProducts( showProducts, errorMessage );
    //get the cart items from localStorage
    CART.init();
    //load the cart items
    toggleCartStatus()
    showCart();
    addtoIcon();

});

let cartSection = document.querySelector('.minicart__body');
function showCart(){
    cartSection.innerHTML = '';
    let s = CART.sort('qty');
    let totalSum = 0
    s.forEach( item =>{

        let cartitem = document.createElement('div');
        cartitem.className = 'cart-item';

        let cartitem_wrapper = document.createElement('div')
        cartitem_wrapper.className = 'cart-item__wrapper'
        cartitem.appendChild(cartitem_wrapper)
        //photo
        let cartImage_wrapper = document.createElement('div')
        cartImage_wrapper.className = 'cart-item__image';
        cartitem_wrapper.appendChild(cartImage_wrapper);



        let img_a = document.createElement('a');
        cartImage_wrapper.appendChild(img_a);

        let cart_image = document.createElement('img');
        cart_image.src = item.img[0];
        img_a.appendChild(cart_image)


        let cart_details = document.createElement('div');
        cart_details.className = 'cart-item__details';
        cartitem_wrapper.appendChild(cart_details);

        let title = document.createElement('div');
        title.textContent = item.title;
        title.className = 'cart-item__name'
        cart_details.appendChild(title);


        //price
        let price_inner = document.createElement('div')
        price_inner.className = 'cart-item__data'
        cart_details.appendChild(price_inner)

        let price = document.createElement('div');
        price.className = 'cart-item__price';
        let cost = parseInt(item.qty) * parseInt(item.itemPrice)
        price.textContent = cost;
       //итоговая стоимость товаров
        totalSum += cost;

        price_inner.appendChild(price);

        //volume
        let volume_inner = document.createElement('div')
        volume_inner.className = 'volume-qty'
        price_inner.appendChild(volume_inner)
        let volume = document.createElement('span')
        volume.className = 'volume';
        volume.textContent = item.volume;
        volume_inner.appendChild(volume)


        //plus minus
        let controls = document.createElement('div');
        controls.className = 'cart-item__qty item__quantity-selector';
        cart_details.appendChild(controls);

        let minus = document.createElement('span');
        minus.textContent = '-';
        minus.className = 'qty-btn';
        minus.setAttribute('data-id', item.id)
        controls.appendChild(minus);
        minus.addEventListener('click', decrementCart)

        let qty = document.createElement('span');
        qty.textContent = item.qty;
        controls.appendChild(qty);


        let plus = document.createElement('span');
        plus.textContent = '+';
        plus.setAttribute('data-id', item.id);
        plus.className = 'qty-btn';
        controls.appendChild(plus);
        plus.addEventListener('click', incrementCart);

        let remove_btn = document.createElement('span');
        remove_btn.className = 'close-item';
        remove_btn.textContent = 'remove'
        remove_btn.setAttribute('data-id', item.id)
        cart_details.appendChild(remove_btn)
        remove_btn.addEventListener('click', deleteFromLS)


        cartSection.appendChild(cartitem);

    })

    let totalPrice = document.querySelectorAll(".col-right");
    totalPrice.forEach(e=> e.innerHTML = totalSum);
}

function incrementCart(ev){
    ev.preventDefault();
    let id = parseInt(ev.target.getAttribute('data-id'));
    CART.increase(id, 1);
    let controls = ev.target.parentElement;
    let qty = controls.querySelector('span:nth-child(2)');
    let item = CART.find(id);
    if(item){
        qty.textContent = item.qty;
    }
}

function decrementCart(ev){
    ev.preventDefault();
    let id = parseInt(ev.target.getAttribute('data-id'));
    CART.reduce(id, 1);
    let controls = ev.target.parentElement;

    let qty = controls.querySelector('span:nth-child(2)');
    let item = CART.find(id);
    if(item){
        qty.textContent = item.qty;
    }
    else{
        console.log('item removed')

    }
}

function getProducts(success, failure){
    //request the list of products from the "server"
    const URL = "http://192.168.1.40/products";
    fetch(URL, {
        method: 'GET',
        mode: 'cors'
    })
        .then(response=>response.json())
        .then(success)
        .catch(failure);
}

function showProducts( products ){
    PRODUCTS = products;
     let productSection = document.querySelector('.product-grids');
     if(productSection) {
        productSection.innerHTML = "";
        products.forEach(product=>{
        let card = document.createElement('div');
        card.className = 'product__item';
        //add the image to the card
        let img_inner = document.createElement('div')
        img_inner.className = 'product__image'
        card.appendChild(img_inner)
         let img_link = document.createElement('a')
         img_link.className = 'img_link'
         img_link.setAttribute("href", "product_card.html")
         img_inner.appendChild(img_link)
        //image
        let img = document.createElement('img');
        img.src = product.image[0];
        img_link.appendChild(img);


        //add the title to the card
        let product_details = document.createElement('div')
        product_details.className ='product-details'
        card.appendChild(product_details)

        let title_inner = document.createElement('div');
        title_inner.className = 'product_name';
        product_details.appendChild(title_inner);

        let title = document.createElement('a')
        title.className = 'name'
        title.textContent = product.name;
        title_inner.appendChild(title)
        //volume
        let volume_inner = document.createElement('div')
        volume_inner.className = 'volume_qty'
        product_details.appendChild(volume_inner)
        let volume = document.createElement('span')
        volume.className = 'volume_product';
        volume.textContent = product.volume;
        volume_inner.appendChild(volume)

        //add the description to the card
        let desc = document.createElement('div');
        desc.className = 'description'
        desc.textContent = product.description;
        product_details.appendChild(desc);

        //add the price
        let price_inner = document.createElement('div');
        price_inner.className = 'price';
        product_details.appendChild(price_inner);
        let price = document.createElement('span')
        price.textContent = '€' + product.price;
        price_inner.appendChild(price);

        //add the button to the card
        let btn_inner = document.createElement('div');
        btn_inner.className = 'cart';
        product_details.appendChild(btn_inner)

        let btn = document.createElement('a')
        btn.textContent = 'Add to Cart';
        btn.setAttribute('data-id', product.id);
        btn.addEventListener('click', addItem);
        btn_inner.appendChild(btn);
        //add the card to the section
        productSection.appendChild(card);
    })
}}

function addItem(ev){
    ev.preventDefault();
    let id = parseInt(ev.target.getAttribute('data-id'));

    CART.add(id, 1);

    let btn_add = document.querySelectorAll('.cart')
    btn_add.forEach((e)=> {

        // e.addEventListener('click',function (){ setTimeout(OpenMenu, 500)})
        e.addEventListener('click', OpenMenu)
    function OpenMenu() {

            minicart.classList.add("active");
            overlayG.classList.add('active');
            document.body.classList.add("_lock");

        };

    })
    toggleCartStatus();
    showCart();

}

function errorMessage(err){
    //display the error message to the user
    console.error(err);
}

//плашка с суммой товаров на иконке корзины

    function addtoIcon() {
        let bag_sum = document.querySelector(".bag_sum");
        if(bag_sum) {
        let sum = 0;
        CART.contents.forEach(e => {
            let quantity = e.qty
            sum += quantity
            bag_sum.innerHTML = parseInt(sum)
            bag_sum.classList.remove('active')
        })
        if (sum === 0) {
            bag_sum.innerHTML = null;
            bag_sum.classList.add('active')
        }
    }
}
//плашка Корзина пуста
function toggleCartStatus(){
    const cartBottom = document.querySelector(".minicart__bottom");
    const cartEmptyBadge = document.querySelector(".alert_empty");

    if (CART.contents.length === 0) {
        cartEmptyBadge.classList.add('active');
        cartSection.classList.add('active')
        cartBottom.classList.add('active')
    }else {
        cartEmptyBadge.classList.remove('active')
        cartSection.classList.remove('active')
        cartBottom.classList.remove('active')
    }
}

//удаление товара из ЛС
function deleteFromLS () {
    let items = CART.contents
    items.forEach(function (item,index){
            items.splice(index,1);
    });
    CART.sync();
    showCart();
    addtoIcon();
}

//карточка товара
const product_card = document.querySelector(".item__wrapper");
if (product_card)
    getProduct();
    async function getProduct() {
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
                            <img src="${item.image[0]}" alt="">
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
            // product_card.insertAdjacentHTML('beforeend', productHTML);
            product_card.innerHTML = productHTML;
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

