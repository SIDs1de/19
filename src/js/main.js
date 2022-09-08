document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper-who', {
    // Свои классы
    wrapperClass: 'swiper-who__wrapper',
    slideClass: 'swiper-who__item',
    spaceBetween: 80,

    // Вертикальный слайдер
    // direction: 'vertical',

    // Количество слайдов для показа
    slidesPerView: 3,

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
    mousewheel: {
      // Чувствительность колеса мыши
      sensitivity: 1,
      // Класс объекта, на котором будет
      // срабатывать прокрутка мышью
      // events.target: '.image-slider'
    },

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
      bulletClass: 'page__bullet',
      bulletActiveClass: 'page__bullet--active',
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
  });
});