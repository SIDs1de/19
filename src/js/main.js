document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html');
  const body = document.querySelector('body');

  const titles = document.querySelectorAll('.title');

  titles.forEach((title) => {
    title.classList.add('wow', 'animate__animated', 'animate__zoomIn');
  });

  const mySlider = new Swiper('.swiper-who', {
    // Свои классы
    wrapperClass: 'swiper-who__wrapper',
    slideClass: 'swiper-who__item',
    spaceBetween: 80,

    // Вертикальный слайдер
    // direction: 'vertical',

    // Количество слайдов для показа
    slidesPerView: 1,

    enabled: false,

    grabCursor: true,

    // Включаем параллакс
    // parallax: true,

    // Управление клавиатурой
    keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить управление клавишами pageUp, pageDown
      pageUpDown: true,
    },

    // Управление колесом мыши
    // mousewheel: {
    //   // Чувствительность колеса мыши
    //   sensitivity: 1,
    //   // Класс объекта, на котором будет
    //   // срабатывать прокрутка мышью
    //   // events.target: '.image-slider'
    // },

    // Отключение функционала
    // при изменении элементов слайдера
    watchOverflow: true,

    // Скорость
    speed: 800,

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
      el: '.swiper-who__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'swiper-who__bullet',
      bulletActiveClass: 'swiper-who__bullet--active',
    },
    // Скролл
    // scrollbar: {
    //   el: '.page__scroll',
    //   dragClass: 'page__drag-scroll',
    //   // Возможность перетаскивать скролл
    //   draggable: true,
    // },

    // Отключаем автоинициализацию
    // init: false,

    // События
    // on: {
    //   // Событие инициализации
    //   init: function () {
    //     menuSlider();
    //     setScrollType();
    //     wrapper.classList.add('_loaded');
    //   },
    //   // Событие смены слайда
    //   slideChange: function () {},

    //   resize: function () {},
    // },

    breakpoints: {
      1001: {
        slidesPerView: 3,
      },
    },
  });

  const headerTop = document.querySelector('.header__top');

  const headerClasses = () => {
    const header = document.querySelector('.header');
    const style = header.currentStyle || window.getComputedStyle(header);
    const style2 = headerTop.currentStyle || window.getComputedStyle(headerTop);
    const pt = parseInt(style.paddingTop.slice(0, -2));
    const pt2 = parseInt(style2.paddingTop.slice(0, -2));
    const mb = parseInt(style2.marginBottom.slice(0, -2));
    const hght = parseInt(style2.height.slice(0, -2));
    if (html.scrollTop > 790 && !header.classList.contains('slick')) {
      header.classList.add('slick');
    } else if (header.classList.contains('slick') && html.scrollTop <= 790) {
      header.classList.remove('slick');
    } else if (html.scrollTop > 400 && !header.classList.contains('slick2')) {
      if (window.innerWidth <= 1200) {
        header.style.paddingTop = pt + hght + 'px';
      } else {
        header.style.paddingTop = pt + mb + hght + 'px';
      }
      header.classList.add('slick2');
    } else if (html.scrollTop <= 400 && header.classList.contains('slick2')) {
      header.classList.remove('slick2');
      header.style.paddingTop = pt2 + 'px';
    }
  };

  const headerSlick = () => {
    window.addEventListener('scroll', headerClasses);
  };

  const questions = () => {
    const questionsList = document.querySelector('.questions__list');
    const questionsItems = document.querySelectorAll('.questions__item');

    questionsList.addEventListener('click', (e) => {
      if (e.target.classList.contains('questions__head')) {
        questionsItems.forEach((item) => {
          if (item !== e.target.parentElement) {
            item.classList.remove('active');
            item.querySelector('.questions__body').style.maxHeight = null;
          }
        });
        
        if (!e.target.parentElement.classList.contains('active')) {
          e.target.parentElement.classList.add('active');
          e.target.nextSibling.style.maxHeight =
            e.target.nextSibling.scrollHeight + 40 + 'px';
        } else {
          e.target.parentElement.classList.remove('active');
          e.target.nextSibling.style.maxHeight = null;
        }
      }
    });
  };

  const swiperActive = () => {
    if (window.innerWidth <= 1000) {
      mySlider.enabled = true;
    } else {
      mySlider.enabled = false;
    }
  };

  const popupOpenBtns = document.querySelectorAll('[data-open-pop]');
  const popups = document.querySelectorAll('[data-pop]');
  const headerBg = document.querySelector('.header__bg');
  const popupBgs = document.querySelectorAll('.popup__bg');

  const openPopup = () => {
    popupOpenBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        html.classList.add('lock');
        popups.forEach((popup) => {
          console.log(popup.dataset.pop);
          console.log(e.target.dataset.openPop);
          if (popup.dataset.pop == e.target.dataset.openPop) {
            popup.classList.add('active');
          }
        });
        e.preventDefault();
      });
    });
    popupBgs.forEach((bg) => {
      bg.addEventListener('click', (e) => {
        html.classList.remove('lock');
        let pop = document.querySelector(
          `[data-pop="${e.target.dataset.close}"]`
        );
        pop.classList.remove('active');
      });
    });
    document.querySelectorAll('[data-close]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        let pop = document.querySelector(
          `[data-pop="${e.target.dataset.close}"]`
        );
        pop.classList.remove('active');
        html.classList.remove('lock');
      });
    });
  };

  new WOW().init();

  window.addEventListener('resize', swiperActive);

  swiperActive();
  headerClasses();
  openPopup();
  headerSlick();
  questions();
});
