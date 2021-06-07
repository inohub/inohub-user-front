<template>
  <div class="startup-page">

    <div class="startup-page__loader loader" v-if="isLoading">
      <img src="../../assets/img/icons/loader.svg" alt="">

      <p>Загрузка...</p>
    </div>

    <div class="startup-page__container">

      <div class="startup-page__path-history path-history">
        <div class="path-history__item">Программирование</div>
        <div class="path-history__item">JavaScript</div>
      </div>

      <div class="startup-page__heading-box startup-page__heading-box--left">

        <h3 class="startup-page__heading">
          {{ course.name }}
        </h3>

        <p class="startup-page__subtitle">
          {{ course.description }}
        </p>

      </div>

      <!--      <div class="startup-page__row">-->

      <!--        <div class="startup-page__user-box user-box user-box&#45;&#45;border-right">-->
      <!--          <img src="../../assets/img/avatar.png" alt="" class="user-box__avatar">-->
      <!--          <div class="user-box__info">-->
      <!--            <div class="user-box__name">Имя Фамилия</div>-->
      <!--            <div class="user-box__time">2 часа назад</div>-->
      <!--          </div>-->
      <!--        </div>-->

      <!--        <button class="startup-info__btn startup-info__btn&#45;&#45;outline button button&#45;&#45;sm">-->
      <!--          <svg width="13" height="20">-->
      <!--            <use href="../../assets/img/icons.svg#button-favorite"></use>-->
      <!--          </svg>-->

      <!--          Сохранить-->
      <!--        </button>-->

      <!--      </div>-->

      <div class="startup-page__wrapper startup-info">

        <div class="startup-info__row">

          <div class="startup-info__images">

            <div class="startup-info__test-box" v-if="testIsActive">

              <h1>
                Проверь свои знания!
              </h1>

              <p>
                Результаты этого теста покажут насколько ты успешно прошел курс.
                Также баллы будут указаны в сертификате об окончании курса.
                <br><br>
                Удачи!
              </p>

              <nuxt-link :to="'/Test/'+ lesson[lesson.length - 1].id" tag="button" class="startup-info__text-btn button">
                Начать тест
              </nuxt-link>

            </div>

            <div class="startup-info__img-box" v-else v-for="(l, i) in lesson" v-show="chosenLesson === i">
              <iframe width="560" height="315" :src="l.video_url"
                      class="startup-info__main-img"
                      title="YouTube video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
            </div>

          </div>

          <div class="startup-info__details">

            <div class="course-progress">
              <div class="course-progress__title">
                {{ lesson.length }} уроков

                <span>25%</span>
              </div>

              <div class="course-progress__list">

                <div class="course-progress__item"
                     :class="{'course-progress__item--current' : chosenLesson === i}"
                     @click="chooseLesson(i)" v-for="(l, i) in lesson">
                  <span>{{ i + 1 }}. {{ l.name }}</span>
                  <span>13:10</span>
                </div>

                <div class="course-progress__item" @click="chooseTest">
                  <span>Итоговый тест</span>
                </div>

              </div>

            </div>

          </div>

        </div>

        <div class="startup-info__row">

          <tabs class="startup-info__tabs tabs tabs--fixed-width">
            <tab title="Описание">

              <div class="tab__content tab-description" v-for="(l, i) in lesson" v-show="chosenLesson === i">

                <div v-for="text in l.texts">
                  <div class="tab-description__row">
                    <div class="tab-description__title">
                      {{ text.title }}
                    </div>
                  </div>

                  <div class="tab-description__text">
                    {{ text.content }}
                  </div>

                </div>
                <img src="../../assets/img/tab-desc.png" alt="" class="tab-description__img">

              </div>

            </tab>
            <tab title="Материалы">

              <div class="tab__content tab-description">

                <div class="tab-description__row">
                  <div class="tab-description__title tab-description__title--row">
                    Материалы курса

                    <button
                      class="startup-info__btn startup-info__btn--outline startup-info__btn--blue button button--sm">
                      <svg width="19" height="20">
                        <use href="../../assets/img/icons.svg#download"></use>
                      </svg>

                      Скачать все
                    </button>

                  </div>
                </div>

                <div class="tab-description__materials course-materials">


                  <div class="course-materials__item"
                       :class="{'course-materials__item--active' : materialIdx === i}" v-for="(l, i) in lesson">

                    <div class="course-materials__row">

                      <div class="course-materials__title">Урок #{{ i + 1 }}</div>

                      <div class="course-materials__icon-group">

                        <svg class="course-materials__icon" width="19" height="20">
                          <use href="../../assets/img/icons.svg#download"></use>
                        </svg>

                        <svg class="course-materials__icon" width="11" height="16" @click="chooseMaterial(i)">
                          <use href="../../assets/img/icons.svg#material-chevron"></use>
                        </svg>

                      </div>

                    </div>

                    <div class="course-materials__file-list">

                      <div class="course-materials__file">
                        <svg width="39" height="49">
                          <use href="../../assets/img/icons.svg#file"></use>
                        </svg>

                        <span>
                          Название файла
                        </span>
                      </div>

                      <div class="course-materials__file">
                        <svg width="39" height="49">
                          <use href="../../assets/img/icons.svg#file"></use>
                        </svg>

                        <span>
                          Название файла
                        </span>
                      </div>

                      <div class="course-materials__file">
                        <svg width="39" height="49">
                          <use href="../../assets/img/icons.svg#file"></use>
                        </svg>

                        <span>
                          Название файла
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </tab>
          </tabs>

          <div class="startup-info__side-box side-box">

            <div class="side-box__user-box user-box">
              <img src="../../assets/img/avatar.png" alt="" class="user-box__avatar">
              <div class="user-box__info">
                <div class="user-box__name">Имя Фамилия</div>
                <div class="user-box__time">Организация, должность</div>
              </div>
            </div>

            <div class="side-box__text">
              I am a graphic designer creating unique brands and communication solutions for a variety of clients across
              the world. My career spans almost 20 years with a mix of agency life, freelancing and teaching in London
              to building my own business in New Zealand.
              <br><br>
              I LOVE the discipline of branding - it is the ultimate challenge!
            </div>

            <div class="side-box__tab-links">

              <div class="side-box__title">
                Related Skills
              </div>

              <div class="side-box__tab-list">
                <div class="side-box__tab">
                  Инвестиции
                </div>

                <div class="side-box__tab">
                  Стартап
                </div>

                <div class="side-box__tab">
                  Бизнес
                </div>

                <div class="side-box__tab">
                  Программирование
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <row-slider class="courses-section--grey-bg" :data-p="loadedStartups" field2="subtitle" field1="name"></row-slider>
    </div>
  </div>
</template>

<script>
import Tab from "@/components/Tab";
import Tabs from "@/components/Tabs";
import RowSlider from "@/components/RowSlider";

export default {
  components: {
    Tab,
    Tabs,
    RowSlider
  },
  data() {
    return {
      materialIdx: null,
      testIsActive: false,
      course: {},
      lesson: [],
      chosenLesson: 0,
      isLoading: true
    }
  },
  methods: {
    toggleMaterial() {
      this.materialToggle = !this.materialToggle
    },
    chooseLesson(idx) {
      this.chosenLesson = idx
      this.testIsActive = false
    },
    chooseMaterial(idx) {
      this.materialIdx = idx
    },
    chooseTest() {
      this.chosenLesson = null
      this.testIsActive = true
      this.materialIdx = null
    }
  },

  computed: {
    loadedStartups() {
      return this.$store.getters.loadedStartups
    }
  },

  mounted() {
    this.$axios.get(process.env.API_URL + 'courses/' + this.$route.params.id)
      .then(response => {
        console.log(response.data.data)
        this.course = response.data.data
      })
      .catch(e => console.log(e))

    this.$axios.get(process.env.API_URL + 'lessons?search[course_id]=exact|1&relation[texts]')
      .then(response => {
        this.lesson = response.data.data.data
        console.log(response.data.data.data)
        this.isLoading = false
      })
      .catch(e => console.log(e))
  }
}
</script>

<style lang="css">

</style>
