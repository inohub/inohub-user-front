<template>
  <main class="main">

    <section class="main__section welcome-section">
      <div class="welcome-section__container">
        <div class="welcome-section__info">
          <h1 class="welcome-section__title">
            Одним словом
            про inohub
          </h1>

          <p class="welcome-section__subtitle">
            Тут рандомная картинка, не обращайте
            внимания. И еще текста для красоты
          </p>

          <div class="welcome-section__btn-group">
            <nuxt-link to="/About" tag="button" class="welcome-section__btn button">
              Подробнее
            </nuxt-link>
          </div>
        </div>

        <img src="../assets/img/welcome-person.png" alt="" class="welcome-section__side-person">
      </div>
    </section>

    <column-slider class="main__section" :data="loadedStartups" field1="name" field2="subtitle" title="Мероприятие" link="Events"></column-slider>

    <section class="main__section fluid-section">
      <div class="fluid-section__container">
        <div class="fluid-section__info">
          <h2 class="fluid-section__heading">
            Загрузи свой проект <br>
            уже сейчас
          </h2>

          <div class="fluid-section__btn-group">
            <nuxt-link to="/Courses" tag="button" class="fluid-section__btn button">
              С чего начать?
            </nuxt-link>
            <nuxt-link to="/Startups/Register" tag="button" class="fluid-section__btn button">
              Загрузить
            </nuxt-link>
          </div>
        </div>

        <img src="../assets/img/fluid-img1.png" alt="" class="fluid-section__img">
      </div>
    </section>

    <row-slider class="main__section" :data-p="loadedStartups" field1="name" field2="subtitle" title="стартапы" link="Startups"></row-slider>

    <section class="main__section fluid-section fluid-section--purple">
      <div class="fluid-section__container">
        <div class="fluid-section__info">
          <h2 class="fluid-section__heading">
            Понравился проект? <br>
            Станьте инвестором!
          </h2>

          <div class="fluid-section__btn-group">
            <button class="fluid-section__btn button">
              С чего начать?
            </button>
            <button class="fluid-section__btn fluid-section__btn--md button">
              Стать инвестором
            </button>
          </div>
        </div>

        <img src="../assets/img/fluid-img2.png" alt="" class="fluid-section__img">
      </div>
    </section>

    <column-slider class="main__section" :data="loadedStartups" field1="name" field2="subtitle" title="Мероприятие" link="Startups"></column-slider>

  </main>
</template>

<script>
import Swiper, {Pagination, Navigation} from 'swiper';
import ColumnSlider from "@/components/ColumnSlider";
import RowSlider from "@/components/RowSlider";

Swiper.use([Pagination, Navigation]);
export default {
  middleware: ['check-auth'],
  components: {
    ColumnSlider,
    RowSlider
  },

  mounted() {
    console.log(this.loadedStartups)
  },
  computed: {
    loadedStartups() {
      return this.$store.getters.loadedStartups;
    }
  }
};
</script>

<style lang="scss">

</style>


