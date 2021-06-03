<template>
  <div class="main">
    <section class="main__section welcome-section welcome-section--orange-bg">
      <div class="welcome-section__container">
        <div class="welcome-section__info">
          <h1 class="welcome-section__title">
            Курсы
          </h1>

          <p class="welcome-section__subtitle">
            Мы разработали курсы, чтобы вам
            было легче и главное правильно начать свой путь
          </p>

          <div class="welcome-section__btn-group">
            <button class="welcome-section__btn button">
              Подробнее
            </button>
            <button class="welcome-section__btn button">
              С чего начать?
            </button>
          </div>
        </div>

        <img src="../../assets/img/welcome-section-finger.png" alt="" class="welcome-section__side-person">
      </div>
    </section>

    <column-slider class="main__section" :data="loadedCourses" field2="description" field1="name" link="Courses"></column-slider>

    <section class="main__section fluid-section">
      <div class="fluid-section__container">
        <div class="fluid-section__info">
          <h2 class="fluid-section__heading">
            Загрузи свой проект <br>
            уже сейчас
          </h2>

          <div class="fluid-section__btn-group">
            <button class="fluid-section__btn button">
              С чего начать?
            </button>
            <button class="fluid-section__btn button">
              Загрузить
            </button>
          </div>
        </div>

        <img src="../../assets/img/fluid-img1.png" alt="" class="fluid-section__img">
      </div>
    </section>

<!--    <section class="main__section courses-section">-->

<!--      <div class="courses-section__container">-->

<!--        <div class="courses-section__box">-->

<!--          <div class="courses-section__row">-->
<!--            <h5 class="courses-section__heading">-->
<!--              Рекомендованное-->
<!--            </h5>-->
<!--            <button class="course-section__btn button-outline">-->
<!--              Смотреть все-->
<!--            </button>-->
<!--          </div>-->

<!--          <div class="courses-section__wrapper">-->
<!--            <div class="swiper-container courses-section__swiper-container">-->
<!--              <div class="swiper-wrapper">-->
<!--                <nuxt-link tag="div"-->
<!--                           :to="'/Courses/' + s.id"-->
<!--                           class="swiper-slide course-card"-->
<!--                           v-for="(s, i) in loadedCourses"-->
<!--                           :key="s.id">-->
<!--                  <img src="../../assets/img/course-img.png" alt="" class="course-card__img">-->

<!--                  <div class="course-card__info">-->
<!--                    <div class="course-card__header">-->
<!--                      <div class="course-card__title">-->
<!--                        {{ s.name }}-->
<!--                      </div>-->
<!--                      <div class="course-card__desc">-->
<!--                        {{ s.description }}-->
<!--                      </div>-->
<!--                    </div>-->

<!--                    <div class="course-card__bottom">-->
<!--                      <div class="course-card__rating rate-stars">-->
<!--                        <svg class="rate-stars__star" width="11" height="11">-->
<!--                          <use href="../../assets/img/icons.svg#star"></use>-->
<!--                        </svg>-->
<!--                        <svg class="rate-stars__star" width="11" height="11">-->
<!--                          <use href="../../assets/img/icons.svg#star"></use>-->
<!--                        </svg>-->
<!--                        <svg class="rate-stars__star" width="11" height="11">-->
<!--                          <use href="../../assets/img/icons.svg#star"></use>-->
<!--                        </svg>-->
<!--                        <svg class="rate-stars__star" width="11" height="11">-->
<!--                          <use href="../../assets/img/icons.svg#star"></use>-->
<!--                        </svg>-->
<!--                        <svg class="rate-stars__star" width="11" height="11">-->
<!--                          <use href="../../assets/img/icons.svg#star"></use>-->
<!--                        </svg>-->
<!--                      </div>-->

<!--                      <svg class="course-card__favorite" width="13" height="21">-->
<!--                        <use href="../../assets/img/icons.svg#favorite"></use>-->
<!--                      </svg>-->
<!--                    </div>-->

<!--                  </div>-->
<!--                </nuxt-link>-->

<!--              </div>-->
<!--              &lt;!&ndash; Add Pagination &ndash;&gt;-->
<!--              <div class="swiper-pagination courses-section__pagination"></div>-->
<!--              &lt;!&ndash; Add Arrows &ndash;&gt;-->
<!--              &lt;!&ndash;              <div class="swiper-button-next courses-section__next"></div>&ndash;&gt;-->
<!--              &lt;!&ndash;              <div class="swiper-button-prev courses-section__prev"></div>&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--      </div>-->

<!--    </section>-->
    <row-slider :data-p="loadedCourses" field1="name" field2="description" title="курсы" link="Courses"></row-slider>
  </div>
</template>

<script>
import Swiper, {Pagination, Navigation} from 'swiper';
import ColumnSlider from "@/components/ColumnSlider";
import RowSlider from "@/components/RowSlider";

Swiper.use([Pagination, Navigation]);

export default {
  components: {
    ColumnSlider,
    RowSlider
  },
  middleware: ['check-auth', 'auth'],
  data() {
    return {
      courses : []
    }
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
    loadedCourses() {
      return this.$store.getters.loadedCourses
    }
  }
}
</script>
