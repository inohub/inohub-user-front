<template>
  <div class="main">

    <section class="main__section startup-welcome">

      <div class="startup-welcome__container">

        <h1 class="startup-welcome__heading">
          Стартапы
        </h1>

        <div class="startup-welcome__categories categories">

          <div class="categories__item" v-for="c in loadedCategories">{{ c.title }}</div>

        </div>

      </div>
    </section>

    <column-slider class="main__section" :data="loadedStartups" field1="name" field2="subtitle" link="Startups"></column-slider>

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

    <row-slider class="main__section" :data-p="loadedStartups" field2="subtitle" field1="name"></row-slider>

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

        <img src="../../assets/img/fluid-img2.png" alt="" class="fluid-section__img">
      </div>
    </section>

    <column-slider class="main__section"></column-slider>

  </div>
</template>

<script>
import RowSlider from "~/components/RowSlider";
import ColumnSlider from "~/components/ColumnSlider";

import Swiper, {Pagination, Navigation} from 'swiper';

Swiper.use([Pagination, Navigation]);

export default {
  components: {
    RowSlider,
    ColumnSlider
  },
  middleware: ['check-auth', 'auth'],
  data() {
    return {
      // token: "",
      // config: {
      //   method: 'get',
      //   url: 'https://api.inohub.kz/api/startups',
      //   headers: {
      //     'Authorization': 'Bearer ' + this.token,
      //   }
      // },
    };
  },

  methods: {
  },
  created() {
  },

  computed: {
    loadedCategories() {
      return this.$store.getters.loadedCategories
    },
    loadedStartups() {
      return this.$store.getters.loadedStartups
    }
  },

  mounted() {
  }
};
</script>
