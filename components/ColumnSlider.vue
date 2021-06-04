<template>
  <section class="cards-section">
    <div class="cards-section__container">
      <div class="cards-section__top-of-day">
        <div class="cards-section__row">
          <h4 class="cards-section__title">{{ title }}</h4>
        </div>
        <nuxt-link tag="div" to="/Courses/1" class="cards-section__card card">

          <img src="../assets/img/card-img.png" alt="" class="card__img">

          <div class="card__info">
            <div class="card__row">
              <div class="card__path link-path">
                <p>{{ title }}</p>
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

        </nuxt-link>

      </div>

      <div class="cards-section__recommendation">

        <div class="cards-section__row">
          <h4 class="cards-section__title">Рекомендованное вам</h4>
        </div>

        <div class="cards-section__slide-wrapper">

          <div class="swiper-container cards-section__swiper-container">
            <div class="swiper-wrapper">

              <nuxt-link tag="div" :to="'/' + link + '/' + item.id" class="swiper-slide card card--sm"
                         v-for="item in data" :key="item.id">
                <img :src="item.image_url" alt="" class="card__img">

                <div class="card__info">
                  <div class="card__text-box">
                    <h3 class="card__title">{{ item[field1] }}</h3>
                    <p class="card__desc">
                      {{ item[field2] }}
                    </p>
                  </div>

                  <div class="card__link">Категория</div>

                  <svg class="card__favorite" width="11" height="18">
                    <use href="../assets/img/icons.svg#favorite"></use>
                  </svg>
                </div>
              </nuxt-link>

            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination cards-section__pagination"></div>
            <!--            &lt;!&ndash; Add Arrows &ndash;&gt;-->
            <!--            <div class="swiper-button-next cards-section__next"></div>-->
            <!--            <div class="swiper-button-prev cards-section__prev"></div>-->
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
  props: {
    data: Array,
    field1: String,
    field2: String,
    title: String,
    link: String
  },
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
      // navigation: {
      //   nextEl: '.cards-section__next',
      //   prevEl: '.cards-section__prev',
      // },
    });
  }
}
</script>
