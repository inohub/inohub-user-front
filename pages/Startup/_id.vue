<template>
  <div class="startup-page">
    <div class="startup-page__container">

      <div class="startup-page__path-history path-history">
        <div class="path-history__item">Программирование</div>
        <div class="path-history__item">JavaScript</div>
      </div>

      <div class="startup-page__heading-box">

        <h3 class="startup-page__heading">
          Полный курс по JavaScript - с нуля до результата.
        </h3>

        <p class="startup-page__subtitle">
          Полный курс по JavaScript - с нуля до результата. Полный курс по JavaScript - с нуля до результата. Полный
          курс по JavaScript
        </p>

      </div>

      <div class="startup-page__wrapper startup-info">

        <div class="startup-info__row">

          <div class="startup-info__images">

            <div class="startup-info__img-box">
              <img src="../../assets/img/startup-main-img.png" alt="" class="startup-info__main-img">
            </div>

            <div class="startup-info__img-row">
              <img src="../../assets/img/startup-additional-img.png" alt="" class="startup-info__additional-img">
              <img src="../../assets/img/startup-additional-img.png" alt="" class="startup-info__additional-img">
              <img src="../../assets/img/startup-additional-img.png" alt="" class="startup-info__additional-img">
              <img src="../../assets/img/startup-additional-img.png" alt="" class="startup-info__additional-img">
              <img src="../../assets/img/startup-additional-img.png" alt="" class="startup-info__additional-img">
            </div>

          </div>

          <div class="startup-info__details">

            <div class="startup-info__progress-box progress-box">
              <div class="progress-box__wrapper">
                <div class="progress-box__line"></div>
              </div>

              <div class="progress-box__row">
                <div class="progress-box__percent">
                  71%
                </div>

                <div class="progress-box__text">
                  Описание этапа проекта
                  с нуля до результата
                </div>

              </div>
            </div>

            <div class="startup-info__sum">
              <span>600 000тг</span> / 3 млн тг
            </div>

            <div class="startup-info__likes">
              <svg width="34" height="31">
                <use href="../../assets/img/icons.svg#heart"></use>
              </svg>

              <p>2001</p>
            </div>

            <div class="startup-info__date">
              <p>7 апреля 2021г</p>
              <p>Алматы</p>
            </div>

            <div class="startup-info__btn-group">
              <button class="startup-info__btn button">
                Связаться
              </button>

              <button class="startup-info__btn startup-info__btn--orange button">
                Задонатить
              </button>

              <button class="startup-info__btn startup-info__btn--outline button">
                <svg width="13" height="20">
                  <use href="../../assets/img/icons.svg#button-favorite"></use>
                </svg>

                Сохранить
              </button>
            </div>

          </div>

        </div>

        <tabs class="startup-info__tabs tabs">
          <tab title="Описание">
            <div class="tab__content tab-description">

              <div class="tab-description__row">
                <div class="tab-description__title">
                  О нас
                </div>
              </div>

              <div class="tab-description__text">
                Полный курс по JavaScript - с нуля до результата. Полный курс по JavaScript - с нуля до результата.
                Полный курс по JavaScript
                <br><br>
                Полный курс по JavaScript - с нуля до результата. Полный курс по JavaScript - с нуля до результата.
                Полный курс по JavaScript Полный курс по JavaScript - с нуля до результата. Полный курс по JavaScript -
                с нуля до результата. Полный курс по JavaScript Полный курс по JavaScript - с нуля до результата. Полный
                курс по JavaScript - с нуля до результата. Полный курс по JavaScript
              </div>

              <img src="../../assets/img/tab-desc.png" alt="" class="tab-description__img">

            </div>
          </tab>
          <tab title="FAQ">

            <div class="tab__content tab-faq">

              <transition-group>

                <div class="tab-faq__item"
                     v-for="(q, i) in faq"
                     :key="q.title"
                     :class="{'tab-faq__item--active' : q.show}"
                >

                  <div class="tab-faq__row" @click="toggle(i)">

                    <div class="tab-faq__title" v-html="q.title"></div>

                    <svg class="tab-faq__icon"
                         width="18px"
                         height="17px"
                         :class="{ 'tab-faq__icon--active': q.show }"
                    >
                      <use href="../../assets/img/icons.svg#faq-chevron"></use>
                    </svg>

                  </div>

                  <div class="tab-faq__text" v-show="q.show" v-html="q.text"></div>

                </div>

              </transition-group>

            </div>

          </tab>
          <tab title="Новости">
            <div class="tab__content tab-description">

              <div class="tab-description__row">
                <div class="tab-description__title">
                  Мы запускаемся!
                </div>

                <div class="tab-description__date">
                  04.03.2021    16:30
                </div>
              </div>

              <div class="tab-description__text">
                Полный курс по JavaScript - с нуля до результата. Полный курс по JavaScript - с нуля до результата.
                Полный курс по JavaScript
                <br><br>
                Полный курс по JavaScript - с нуля до результата. Полный курс по JavaScript - с нуля до результата.
                Полный курс по JavaScript Полный курс по JavaScript - с нуля до результата. Полный курс по JavaScript -
                с нуля до результата. Полный курс по JavaScript Полный курс по JavaScript - с нуля до результата. Полный
                курс по JavaScript - с нуля до результата. Полный курс по JavaScript
              </div>

              <img src="../../assets/img/tab-desc.png" alt="" class="tab-description__img">

            </div>
          </tab>
          <tab title="Комментарии">
            <div class="tab__content tab-comments">

              <div class="tab-comments__main">

                <div class="tab-comments__item comment-box">
                  <div class="comment-box__row">
                    <img src="../../assets/img/avatar.png" alt="" class="comment-box__avatar">
                    <div class="comment-box__info">
                      <div class="comment-box__name">Имя Фамилия</div>
                      <div class="comment-box__time">2 часа назад</div>
                    </div>
                  </div>

                  <div class="comment-box__text">Законно ли это?</div>
                </div>

                <div class="tab-comments__item comment-box comment-box--author comment-box--reply">
                  <div class="comment-box__row">
                    <img src="../../assets/img/avatar.png" alt="" class="comment-box__avatar">
                    <div class="comment-box__info">
                      <div class="comment-box__name">Имя Фамилия</div>
                      <div class="comment-box__time">2 часа назад</div>
                    </div>

                    <div class="comment-box__label">
                      Автор
                    </div>
                  </div>

                  <div class="comment-box__text"><span>Имя</span>, Законно ли это?</div>
                </div>

                <div class="tab-comments__item comment-box">
                  <div class="comment-box__row">
                    <img src="../../assets/img/avatar.png" alt="" class="comment-box__avatar">
                    <div class="comment-box__info">
                      <div class="comment-box__name">Имя Фамилия</div>
                      <div class="comment-box__time">2 часа назад</div>
                    </div>
                  </div>

                  <div class="comment-box__text">Законно ли это?</div>
                </div>

                <div class="tab-comments__item comment-box comment-box--reply">
                  <div class="comment-box__row">
                    <img src="../../assets/img/avatar.png" alt="" class="comment-box__avatar">
                    <div class="comment-box__info">
                      <div class="comment-box__name">Имя Фамилия</div>
                      <div class="comment-box__time">2 часа назад</div>
                    </div>
                  </div>

                  <div class="comment-box__text"><span>Имя</span>, Законно ли это?</div>
                </div>

              </div>

              <div class="tab-comments__help-section">
                <div class="tab-comments__text">
                  This is your space to offer support
                  and feedback. Remember to be constructive—
                  there's a human behind this project.
                  <br><br>
                  Have a question for the creator?
                  <br><br>
                  <span>Check this project's FAQ</span>
                </div>
              </div>
            </div>
          </tab>
        </tabs>

      </div>
    </div>
  </div>
</template>

<script>
import Tab from "@/components/Tab";
import Tabs from "@/components/Tabs";

export default {
  components: {
    Tab,
    Tabs
  },
  data() {
    return {
      faq: [
        {
          show: false,
          title: "Законно ли это?",
          text: "Да, конечно законно. Ты что дурачок???",
        },
        {
          show: false,
          title: "Законно ли это?",
          text: "Да, конечно законно. Ты что дурачок???",
        },
        {
          show: false,
          title: "Законно ли это?",
          text: "Да, конечно законно. Ты что дурачок???",
        },
      ],
    }
  },
  methods: {
    toggle(index) {
      this.faq[index].show = !this.faq[index].show;
      for (let i = 0; i < this.faq.length; i++) {
        if (this.faq[i] !== this.faq[index]) {
          this.faq[i].show = false;
        }
      }
    },
  }
}
</script>

<style lang="css">

</style>
