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

      <div class="test-page__row">

        <div class="test-page__left-box">
          <div class="test-page__title">
            Навигация по тесту
          </div>

          <div class="test-page__question-list">
            <div class="test-page__question-number" v-for="i in 20">
              {{ i }}
            </div>
          </div>

          <div class="test-page__end-link">
            Закончить попытку...
          </div>
        </div>

        <div class="test-page__right-box">
          <div class="test-page__question-box" v-for="i in 5">

            <div class="test-page__question-title">
              <span>1.</span>
              <span class="test-page__question-text">
                Полный курс по JavaScript - с нуля до результата. Полный курс по JavaScript - с нуля до результата.
              </span>
            </div>

            <div class="test-page__question-row">
              <svg width="29" height="29" class="test-page__flag-icon">
                <use href="../../assets/img/icons.svg#flag-yellow"></use>
              </svg>

              <span class="test-page__question-text">
                Выберите несколько ответов:
              </span>
            </div>

            <div class="test-page__answer-list">

              <label class="test-page__answer">
                <input type="radio" name="answer1" value="kek" class="test-page__radio">
                <span class="test-page__question-text">
                  34
                </span>
              </label>

              <label class="test-page__answer">
                <input type="radio" name="answer1" value="kek" class="test-page__radio">
                <span class="test-page__question-text">
                  35
                </span>
              </label>

              <label class="test-page__answer">
                <input type="radio" name="answer1" value="kek" class="test-page__radio">
                <span class="test-page__question-text">
                  36
                </span>
              </label>

              <label class="test-page__answer">
                <input type="radio" name="answer1" value="kek" class="test-page__radio">
                <span class="test-page__question-text">
                  37
                </span>
              </label>

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

        <button class="modal__btn button-blue button-blue--white" @click="$router.push('Result')">
          Завершить
        </button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpen: false
    };
  },
  methods: {

  }
}
</script>
