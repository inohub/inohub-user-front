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

    <column-slider class="main__section"></column-slider>

    <column-slider class="main__section"></column-slider>

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

    <row-slider class="main__section"></row-slider>
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
}
</script>
