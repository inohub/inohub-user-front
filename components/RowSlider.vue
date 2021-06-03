<template>
  <section class="main__section courses-section">

    <div class="courses-section__container">

      <div class="courses-section__box">

        <div class="courses-section__row">
          <h5 class="courses-section__heading">
            Рекомендованное {{title}}
          </h5>
          <button class="course-section__btn button-outline">
            Смотреть все
          </button>
        </div>

        <div class="courses-section__wrapper">
          <div class="swiper-container courses-section__swiper-container">
            <div class="swiper-wrapper">
              <nuxt-link tag="div"
                         :to="'/' + link + '/'+ s.id"
                         class="swiper-slide course-card"
                         v-for="(s, i) in data"
                         :key="s.id">
                <img src="../assets/img/course-img.png" alt="" class="course-card__img">

                <div class="course-card__info">
                  <div class="course-card__header">
                    <div class="course-card__title">
                      {{ s[field1] }}
                    </div>
                    <div class="course-card__desc">
                      {{ s[field2] }}
                    </div>
                  </div>

                  <div class="course-card__bottom">
                    <div class="course-card__rating rate-stars">
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../assets/img/icons.svg#star"></use>
                      </svg>
                    </div>

                    <svg class="course-card__favorite" width="13" height="21">
                      <use href="../assets/img/icons.svg#favorite"></use>
                    </svg>
                  </div>

                </div>
              </nuxt-link>

            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination courses-section__pagination"></div>
            <!-- Add Arrows -->
            <!--              <div class="swiper-button-next courses-section__next"></div>-->
            <!--              <div class="swiper-button-prev courses-section__prev"></div>-->
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
  props : {
    dataP : Array,
    field1: String,
    field2: String,
    title: String,
    link: String
  },
  mounted() {
    let swiper2 = new Swiper('.courses-section__swiper-container', {
      slidesPerView: 4,
      spaceBetween: 45,
      pagination: {
        el: '.courses-section__pagination',
        clickable: true,
      },
      // navigation: {
      //   nextEl: '.courses-section__next',
      //   prevEl: '.courses-section__prev',
      // },
    });
  },
  computed: {
    loadedStartups() {
      return this.$store.getters.loadedStartups;
    },
    data() {
      return this.dataP
    }
  }
};
</script>
