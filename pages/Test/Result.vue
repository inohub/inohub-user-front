<template>
  <div class="test-page">
    <div class="test-page__container">

      <div class="test-page__path-history path-history">
        <div class="path-history__item">Программирование</div>
        <div class="path-history__item">JavaScript</div>
      </div>

      <h3 class="test-page__heading">
        Полный курс по JavaScript - с нуля до результата.
      </h3>

      <div class="test-page__result-box result-box">

        <div class="result-box__row">
          <div class="result-box__num">
            {{ score }}%
          </div>

          <div class="result-box__info">
            <div class="result-box__title">
              Хорошо! <br>
              До цели осталось немного
            </div>

            <div class="result-box__score">
              <span>{{ correctQ }}</span> / {{ totalQ }}
            </div>

            <div class="result-box__download">
              Скачать сертификат
            </div>

            <div class="result-box__btn-group">
              <button class="result-box__btn button-blue">
                Пройти заново
              </button>

              <button class="result-box__btn button-blue button-blue--white">
                Дальше
              </button>
            </div>

          </div>

        </div>

      </div>

      <div class="test-page__certificate certificate">

        <div class="certificate__wrapper">

          <img src="../../assets/img/certificate.png" alt="">

          <div class="certificate__info">

            <div class="certificate__title">
              сертификат подтверждает, что
            </div>

            <div class="certificate__name">
              {{ user.first_name + ' ' + user.last_name }}
            </div>

            <div class="certificate__text">
              Успешно прошел курс <br> с результатом <span>{{score}}%</span>
            </div>

            <div class="certificate__title certificate__title--m0">
              Курс
            </div>

            <div class="certificate__course-name">
              СТАРТАП С НУЛЯ
            </div>

            <div class="certificate__date">
              04 ИЮНЯ, 2021
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>


<script>
export default {
  name: "Result",
  mounted() {
    this.getUser();
  },
  middleware: ['check-auth', 'auth'],
  data() {
    return {
      user: {}
    }
  },
  methods: {
    getUser() {
      this.$axios.get(process.env.API_URL + 'auth/me', {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`
        }
      })
        .then(resp => {
          this.user = resp.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    score() {
      if (process.browser)
        return localStorage.getItem('score')
    },
    totalQ() {
      if (process.browser)
        return localStorage.getItem('totalQ')
    },
    correctQ() {
      if (process.browser)
        return localStorage.getItem('correctQ')
    }
  }
}
</script>
