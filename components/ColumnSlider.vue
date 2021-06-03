<template>
  <section class="cards-section">
    <div class="cards-section__container">
      <div class="cards-section__top-of-day">
        <div class="cards-section__row">
          <h4 class="cards-section__title">Мероприятие дня</h4>
        </div>
        <div class="cards-section__card card">

          <img src="../assets/img/card-img.png" alt="" class="card__img">

          <div class="card__info">
            <div class="card__row">
              <div class="card__path link-path">
                <p>Мероприятия</p>
                <p>Design & media</p>
              </div>

              <div class="card__date">
                19:00 | 21.03.2021
              </div>
            </div>

            <h3 class="card__title">Полный курс по JavaScript</h3>
            <p class="card__desc">
              Тут будет короткое описание
              мероприятия
            </p>

            <svg class="card__favorite" width="17" height="28">
              <use href="../assets/img/icons.svg#favorite"></use>
            </svg>
          </div>

        </div>

      </div>

      <div class="cards-section__recommendation">

        <div class="cards-section__row">
          <h4 class="cards-section__title">Рекомендованное вам</h4>
          <button class="cards-section__btn button-outline">Смотреть все</button>
        </div>

        <div class="cards-section__slide-wrapper">

          <div class="swiper-container cards-section__swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide card card--sm">
                <img src="../assets/img/card-img-sm.png" alt="" class="card__img">

                <div class="card__info">
                  <div class="card__text-box">
                    <h3 class="card__title">Полный курс JavaScript
                      - с нуля до результата.</h3>
                    <p class="card__desc">
                      Короткое описание проекта
                      еще на одну строку
                    </p>
                  </div>

                  <a href="#" class="card__link">Категория</a>

                  <svg class="card__favorite" width="11" height="18">
                    <use href="../assets/img/icons.svg#favorite"></use>
                  </svg>
                </div>
              </div>
              <div class="swiper-slide card card--sm">
                <img src="../assets/img/card-img-sm.png" alt="" class="card__img">

                <div class="card__info">
                  <div class="card__text-box">
                    <h3 class="card__title">Полный курс JavaScript
                      - с нуля до результата.</h3>
                    <p class="card__desc">
                      Короткое описание проекта
                      еще на одну строку
                    </p>
                  </div>

                  <a href="#" class="card__link">Категория</a>

                  <svg class="card__favorite" width="11" height="18">
                    <use href="../assets/img/icons.svg#favorite"></use>
                  </svg>
                </div>
              </div>
              <div class="swiper-slide card card--sm">
                <img src="../assets/img/card-img-sm.png" alt="" class="card__img">

                <div class="card__info">
                  <div class="card__text-box">
                    <h3 class="card__title">Полный курс JavaScript
                      - с нуля до результата.</h3>
                    <p class="card__desc">
                      Короткое описание проекта
                      еще на одну строку
                    </p>
                  </div>

                  <a href="#" class="card__link">Категория</a>

                  <svg class="card__favorite" width="11" height="18">
                    <use href="../assets/img/icons.svg#favorite"></use>
                  </svg>
                </div>
              </div>
              <div class="swiper-slide card card--sm">
                <img src="../assets/img/card-img-sm.png" alt="" class="card__img">

                <div class="card__info">
                  <div class="card__text-box">
                    <h3 class="card__title">Полный курс JavaScript
                      - с нуля до результата.</h3>
                    <p class="card__desc">
                      Короткое описание проекта
                      еще на одну строку
                    </p>
                  </div>

                  <a href="#" class="card__link">Категория</a>

                  <svg class="card__favorite" width="11" height="18">
                    <use href="../assets/img/icons.svg#favorite"></use>
                  </svg>
                </div>
              </div>
              <div class="swiper-slide card card--sm">
                <img src="../assets/img/card-img-sm.png" alt="" class="card__img">

                <div class="card__info">
                  <div class="card__text-box">
                    <h3 class="card__title">Полный курс JavaScript
                      - с нуля до результата.</h3>
                    <p class="card__desc">
                      Короткое описание проекта
                      еще на одну строку
                    </p>
                  </div>

                  <a href="#" class="card__link">Категория</a>

                  <svg class="card__favorite" width="11" height="18">
                    <use href="../assets/img/icons.svg#favorite"></use>
                  </svg>
                </div>
              </div>
              <div class="swiper-slide card card--sm">
                <img src="../assets/img/card-img-sm.png" alt="" class="card__img">

                <div class="card__info">
                  <div class="card__text-box">
                    <h3 class="card__title">Полный курс JavaScript
                      - с нуля до результата.</h3>
                    <p class="card__desc">
                      Короткое описание проекта
                      еще на одну строку
                    </p>
                  </div>

                  <a href="#" class="card__link">Категория</a>

                  <svg class="card__favorite" width="11" height="18">
                    <use href="../assets/img/icons.svg#favorite"></use>
                  </svg>
                </div>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination cards-section__pagination"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next cards-section__next"></div>
            <div class="swiper-button-prev cards-section__prev"></div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper, {Pagination, Navigation} from 'swiper';

Swiper.use([Pagination, Navigation]);

export default {
  mounted() {
    let swiper1 = new Swiper('.cards-section__swiper-container', {
      slidesPerView: 1,
      slidesPerColumn: 3,
      spaceBetween: 18,
      slidesPerColumnFill: 'row',
      pagination: {
        el: '.cards-section__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.cards-section__next',
        prevEl: '.cards-section__prev',
      },
    });
  }
}
</script>
