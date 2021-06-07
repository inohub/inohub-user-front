<template>
  <div class="test-page">

    <div class="test-page__loader loader" v-if="isLoading">
      <img src="../../assets/img/icons/loader.svg" alt="">

      <p>Загрузка...</p>
    </div>

    <div class="test-page__container">

      <div class="test-page__path-history path-history">
        <div class="path-history__item">Inohub</div>
        <div class="path-history__item">Стартап</div>
      </div>

      <h3 class="test-page__heading">
        {{test.name}}
      </h3>

      <div class="test-page__row">

        <div class="test-page__left-box">
          <div class="test-page__title">
            Навигация по тесту
          </div>

          <div class="test-page__question-list">
            <div class="test-page__question-number" v-for="i in questions.length">
              {{ i }}
            </div>
          </div>

          <div class="test-page__end-link">
            Закончить попытку...
          </div>
        </div>

        <div class="test-page__right-box">

          <div v-for="(q,key) in questions">

            <div class="test-page__question-box" v-show="q.type==='multiple'">

              <div class="test-page__question-title">
                <span>{{ key + 1 }}.</span>
                <span class="test-page__question-text">{{ q.text }}</span>
              </div>

              <div class="test-page__question-row">

                <svg width="29" height="29" class="test-page__flag-icon">
                  <use href="../../assets/img/icons.svg#flag-yellow"></use>
                </svg>

                <span class="test-page__question-text">Выберите несколько ответов:</span>

              </div>

              <div class="test-page__answer-list">

                <label class="test-page__answer" v-for="v in q.content">
                  <input type="radio" :name="q.id" :value="v.id" v-model="q.userCheck" class="test-page__radio">
                  <span class="test-page__question-text">
                    {{ v.text }}
                  </span>
                </label>
              </div>

            </div>

            <div class="test-page__question-box" v-show="q.type==='open'">

              <div class="test-page__question-title">
                <span>{{ key + 1 }}</span>
                <span class="test-page__question-text">{{ q.text }}</span>
              </div>

              <div class="test-page__question-row">
                <svg width="29" height="29" class="test-page__flag-icon">
                  <use href="../../assets/img/icons.svg#flag-yellow"></use>
                </svg>

                <span class="test-page__question-text">Ответ:</span>
              </div>

              <input type="text" class="test-page__input" v-model="q.user_answer">

            </div>

          </div>

          <button class="test-page__btn button" @click="modalOpen = true">
            Завершить тест
          </button>

        </div>

      </div>

    </div>

    <div class="tes-page__modal modal" v-if="modalOpen">
      <div class="modal__text">
        Вы уверены, <br>
        что хотите завершить тест?
      </div>

      <div class="modal__btn-group">
        <button class="modal__btn button-blue" @click="modalOpen = false">
          Назад
        </button>

        <button class="modal__btn button-blue button-blue--white" @click="pass">
          Завершить
        </button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  middleware: ['check-auth', 'auth'],
  data() {
    return {
      modalOpen: false,
      variants: [],
      answer: [],
      all: [],
      questions: [],
      loading: false,
      test: {},
      isLoading: true
    };
  },
  mounted() {
    this.getTest()
  },
  methods: {
    getTest() {
      this.$axios.get(process.env.API_URL + `tests/${this.$route.params.id}`)
        .then(resp => {
          this.test = resp.data.data;
          this.questions = resp.data.data.questions;
          this.isLoading = false
        })
        .catch(err => {
          console.log(err)
        })
    },
    pass() {
      this.loading = true;

      let data = {
        test_id: parseInt(this.$route.params.id),
        answers: [],
      }

      let token = localStorage.getItem('token')

      this.questions.forEach((q) => {
        if (q.type === 'multiple') {
          data.answers.push({
            question_id: q.id,
            variant_id: q.userCheck
          })
        } else {
          data.answers.push({
            question_id: q.id,
            answer_text: q.user_answer
          })
        }
      });


      this.$axios.post(process.env.API_URL + `user-test-results`, data, {
        headers: {Authorization: `Bearer ${token}`}
      })
        .then(resp => {
          let score = (resp.data.data.correct / resp.data.data.total) * 100;
          localStorage.setItem('score',score);
          localStorage.setItem('totalQ',resp.data.data.total);
          localStorage.setItem('correctQ',resp.data.data.correct);

          this.$router.push('/Test/Result')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
