<template>
  <div class="startup-page">

    <div class="startup-page__loader loader" v-if="isLoading">
      <img src="../../../assets/img/icons/loader.svg" alt="">

      <p>Загрузка...</p>
    </div>

    <div class="startup-page__container" v-else>

      <div class="startup-page__path-history path-history">
        <div class="path-history__item">Программирование</div>
        <div class="path-history__item">JavaScript</div>
      </div>

      <div class="startup-page__heading-box">

        <h3 class="startup-page__heading">
          {{ course.name }}
        </h3>

        <p class="startup-page__subtitle">
          {{ course.subtitle }}
        </p>

      </div>

      <div class="startup-page__wrapper startup-info">

        <div class="startup-info__row">

          <div class="startup-info__images">

            <div class="startup-info__img-box">
              <img src="../../../assets/img/startup-main-img.png" alt="" class="startup-info__main-img">
            </div>

            <div class="startup-info__img-row">
              <img src="../../../assets/img/startup-additional-img.png" alt="" class="startup-info__additional-img">
              <img src="../../../assets/img/startup-additional-img.png" alt="" class="startup-info__additional-img">
              <img src="../../../assets/img/startup-additional-img.png" alt="" class="startup-info__additional-img">
              <img src="../../../assets/img/startup-additional-img.png" alt="" class="startup-info__additional-img">
              <img src="../../../assets/img/startup-additional-img.png" alt="" class="startup-info__additional-img">
            </div>

          </div>

          <div class="startup-info__details">

            <div class="startup-info__progress-box progress-box">
              <div class="progress-box__wrapper">
                <div class="progress-box__line" :style="{ width: donationPercent + '%' }"></div>
              </div>

              <div class="progress-box__row">
                <div class="progress-box__percent">
                  {{ donationPercent }}%
                </div>

                <div class="progress-box__text">
                  Описание этапа проекта
                  с нуля до результата
                </div>

              </div>
            </div>

            <div class="startup-info__sum">
              <span>{{ randDonation }}тг</span> / {{ course.donation_amount }}тг
            </div>

            <div class="startup-info__likes">
              <svg width="34" height="31">
                <use href="../../../assets/img/icons.svg#heart"></use>
              </svg>

              <p>{{ likes }}</p>
            </div>

            <div class="startup-info__date">
              <p>{{ course.status_changed | moment('DD.MM.YYYY') }}</p>
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
                  <use href="../../../assets/img/icons.svg#button-favorite"></use>
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

              <div class="tab-description__text" v-for="(text, i) in course.texts">
                {{ text.title }}
                <br><br>
                {{ text.content }}
              </div>

              <img src="../../../assets/img/tab-desc.png" alt="" class="tab-description__img">

            </div>
          </tab>
          <tab title="FAQ">

            <div class="tab__content tab-faq">

              <transition-group>

                <div class="tab-faq__item"
                     v-for="(q, i) in faq"
                     :key="q.id"
                     :class="{'tab-faq__item--active' : q.id === curFaqIndex}"
                >

                  <div class="tab-faq__row" @click="toggle(q.id)">

                    <div class="tab-faq__title" v-html="q.text.title"></div>

                    <svg class="tab-faq__icon"
                         width="18px"
                         height="17px"
                         :class="{ 'tab-faq__icon--active': q.id === curFaqIndex }"
                    >
                      <use href="../../../assets/img/icons.svg#faq-chevron"></use>
                    </svg>

                  </div>

                  <div class="tab-faq__text" v-show="q.id === curFaqIndex" v-html="q.text.content"></div>

                </div>

              </transition-group>

            </div>

          </tab>
          <tab title="Новости">
            <div class="tab__content tab-description" v-for="(n, i) in news" :key="n.id">

              <div class="tab-description__row">
                <div class="tab-description__title">
                  Мы запускаемся!
                </div>

                <div class="tab-description__date">
                  {{ n.published_at | moment('DD.MM.YYYY hh:mm') }}
                </div>
              </div>

              <div class="tab-description__text" v-for="t in n.texts">
                {{ t.title }}
                <br><br>
                {{ t.content }}
              </div>

              <img src="../../../assets/img/tab-desc.png" alt="" class="tab-description__img">

            </div>
          </tab>
          <tab title="Комментарии">
            <div class="tab__content tab-comments">

              <div class="tab-comments__main">

                <div class="tab-comments__item comment-box" v-for="(com, i) in comments">
                  <div class="comment-box__row user-box">
                    <img src="../../../assets/img/avatar.png" alt="" class="user-box__avatar">
                    <div class="user-box__info">
                      <div class="user-box__name">Имя фамилия</div>
                      <div class="user-box__time">{{ com.created_at | moment('DD.MM.YYYY') }}</div>
                    </div>
                  </div>

                  <div class="comment-box__text">{{ com.text }}</div>
                </div>

                <!--                <div class="tab-comments__item comment-box comment-box&#45;&#45;author comment-box&#45;&#45;reply">-->
                <!--                  <div class="comment-box__row user-box">-->
                <!--                    <img src="../../../assets/img/avatar.png" alt="" class="user-box__avatar">-->
                <!--                    <div class="user-box__info">-->
                <!--                      <div class="user-box__name">Имя Фамилия</div>-->
                <!--                      <div class="user-box__time">2 часа назад</div>-->
                <!--                    </div>-->

                <!--                    <div class="comment-box__label">-->
                <!--                      Автор-->
                <!--                    </div>-->
                <!--                  </div>-->

                <!--                  <div class="comment-box__text"><span>Имя</span>, Законно ли это?</div>-->
                <!--                </div>-->

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
      curFaqIndex: null,
      faq: [],
      course: {},
      randDonation: 0,
      donationPercent: 0,
      likes: {},
      comments: {},
      news: [],
      isLoading: true
    }
  },
  methods: {
    toggle(id) {
      if (this.curFaqIndex === id) {
        this.curFaqIndex = null
      } else {
        this.curFaqIndex = id
      }
    },
  },
  mounted() {
    this.$axios.get(process.env.API_URL + 'startups/' + this.$route.params.id)
      .then(response => {
        this.course = response.data.data
        this.randDonation = Math.floor(Math.random() * (response.data.data.donation_amount - 1000) + 1000)
        this.donationPercent = Math.floor(((this.randDonation * 100) / response.data.data.donation_amount))

        this.$axios.get(process.env.API_URL + 'startups/' + this.$route.params.id + '/likes')
          .then(response => {
            this.likes = response.data.data.total

            this.$axios.get(process.env.API_URL + 'startups/' + this.$route.params.id + '/comments')
              .then(response => {
                this.comments = response.data.data.data
                console.log(response.data.data.data)

                this.$axios.get(process.env.API_URL + 'faqs?search[startup_id]=exact|1')
                  .then(response => {
                    this.faq = response.data.data.data

                    this.$axios.get(process.env.API_URL + 'startups/' + this.$route.params.id + '/startup-news')
                      .then(response => {
                        this.news = response.data.data.data
                        this.isLoading = false
                      })
                      .catch(e => console.log(e))
                  })
                  .catch(e => console.log(e))
              })
              .catch(e => console.log(e))
          })
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
  }
}
</script>

<style lang="css">

</style>
