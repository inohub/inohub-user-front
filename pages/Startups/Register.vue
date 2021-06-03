<template>
  <div class="startup-register">

    <div class="startup-register__container" v-if="step !== ''">

      <div class="startup-register__path-history path-history">
        <div class="path-history__item">Программирование</div>
        <div class="path-history__item">JavaScript</div>
      </div>

      <div class="startup-register__heading">
        <h2>Регистрация проекта</h2>
        <p v-if="step === '3'">FAQ / Часто задаваемые вопросы</p>
        <p v-else>Общие данные</p>
      </div>

      <div class="startup-register__progress-box">

        <div class="startup-register__progress-bar">
          <div class="startup-register__progress-filler"
               :class="{ 'startup-register__progress-filler--step2' : step === '2', 'startup-register__progress-filler--step3' : step === '3'}"></div>
        </div>

        <div class="startup-register__progress-num">
          <span>{{ step }}</span>/3
        </div>

      </div>

      <div class="startup-register__wrapper">

        <div class="startup-register__first" v-if="step === '1'">

          <div class="startup-register__download-box">
            <svg width="108" height="72">
              <use href="../../assets/img/icons.svg#cloud"></use>
            </svg>

            <span>Загрузить файл</span>
          </div>

          <div class="startup-register__info">

            <div class="startup-register__input-box startup-input">
              <label class="startup-input__label">Название проекта<span>*</span></label>
              <input type="text" class="startup-input__input" v-model="name">
            </div>

            <div class="startup-register__input-box startup-input">
              <label class="startup-input__label">Краткое описание<span>*</span></label>
              <textarea class="startup-input__textarea" v-model="subtitle"></textarea>
            </div>

            <div class="startup-register__input-box startup-input">
              <label class="startup-input__label">Категория<span>*</span></label>

              <div class="startup-input__input-box" @click="toggleCategory">
                <input type="text" class="startup-input__input" readonly :placeholder="categoryChosen"
                       :value="chCategory.title">

                <svg width="11" height="16" class="startup-input__icon"
                     :class="{'startup-input__icon--active' : categoryToggle}">
                  <use href="../../assets/img/icons.svg#select-chevron"></use>
                </svg>
              </div>

              <div class="startup-input__dropdown" :class="{'startup-input__dropdown--active' : categoryToggle}">
                <div class="startup-input__item" v-for="category in categories" @click="chooseCategory(category)">
                  {{ category.title }}
                </div>
              </div>
            </div>

            <div class="startup-register__input-box startup-input">
              <label class="startup-input__label">Теги</label>
              <input type="text" class="startup-input__input" v-model="tags">
            </div>

            <div class="startup-register__input-box startup-input">
              <label class="startup-input__label">Город</label>
              <input type="text" class="startup-input__input" v-model="city">
            </div>

            <div class="startup-register__input-box startup-input">
              <label class="startup-input__label">Необходимая сумма<span>*</span></label>
              <input type="text" class="startup-input__input" v-model="donation_amount">
            </div>

            <div class="startup-register__input-box startup-input">
              <label class="startup-input__label">На каком вы этапе?<span>*</span></label>

              <div class="startup-input__input-box" @click="toggleStage">
                <input type="text" class="startup-input__input" readonly :placeholder="stageChosen">

                <svg width="11" height="16" class="startup-input__icon"
                     :class="{'startup-input__icon--active' : stageToggle}">
                  <use href="../../assets/img/icons.svg#select-chevron"></use>
                </svg>
              </div>

              <div class="startup-input__dropdown" :class="{'startup-input__dropdown--active' : stageToggle}">
                <div class="startup-input__item" @click="chooseStage('10% - есть идея')">10% - есть идея</div>
                <div class="startup-input__item" @click="chooseStage('25% - реализация')">25% - реализация</div>
                <div class="startup-input__item" @click="chooseStage('60% - запуск')">60% - запуск</div>
                <div class="startup-input__item" @click="chooseStage('70% - рекламная компания')">70% - рекламная
                  компания
                </div>
                <div class="startup-input__item" @click="chooseStage('90% - расширение')">90% - расширение</div>
              </div>
            </div>

          </div>

        </div>

        <div class="startup-register__second" v-if="step === '2'">

          <div v-for="text in texts">
            <div class="startup-register__input-box startup-input">
              <label class="startup-input__label">Заголовок<span>*</span></label>
              <input type="text" class="startup-input__input" v-model="text.title">
            </div>

            <div class="startup-register__input-box startup-input">
              <label class="startup-input__label">Текст<span>*</span></label>
              <textarea class="startup-input__textarea startup-input__textarea--big" v-model="text.content"></textarea>
            </div>
          </div>
          <button class="startup-register__btn button" @click="addText">
            +Еще
          </button>

          <!--          <div class="startup-register__download-box">-->
          <!--            <svg width="108" height="72">-->
          <!--              <use href="../../assets/img/icons.svg#cloud"></use>-->
          <!--            </svg>-->

          <!--            <span>Загрузить файл</span>-->
          <!--          </div>-->
        </div>

        <div class="startup-register__third" v-if="step === '3'">

          <div class="startup-register__input-box startup-input">
            <label class="startup-input__label">Вопрос</label>
            <input type="text" class="startup-input__input" v-model="question">
          </div>

          <div class="startup-register__input-box startup-input">
            <label class="startup-input__label">Ответ</label>
            <textarea class="startup-input__textarea startup-input__textarea--big" v-model="answer"></textarea>
          </div>

        </div>

        <div class="startup-register__btn-box">
          <div class="startup-register__error">
            {{ validationMessage }}
          </div>

          <div class="startup-register__btn-group">
            <button class="startup-register__btn button button--outline" @click="prevStep" v-if="step !== '1'">
              Назад
            </button>

            <button class="startup-register__btn button" @click="nextStep" v-if="step !== '3'">
              Дальше
            </button>

            <button class="startup-register__btn button" @click="sendStartup" v-else>
              Завершить
            </button>
          </div>
        </div>

      </div>


    </div>

    <div class="startup-register__container" v-if="step === ''">

      <div class="startup-register__path-history path-history">
        <div class="path-history__item">Программирование</div>
        <div class="path-history__item">JavaScript</div>
      </div>

      <div class="startup-register__heading">
        <h2>Регистрация проекта</h2>
      </div>

      <div class="startup-register__result-box result-box result-box--centered">

        <div class="result-box__info">
          <div class="result-box__title">
            Проект успешно отправлен <br>
            на модерацию!
          </div>

          <div class="result-box__text">
            Следите за почтой, в скором времени <br>
            мы с вами свяжемся
          </div>

          <div class="result-box__btn-group">

            <nuxt-link to="/" tag="button" class="result-box__btn button-blue">
              Круто!
            </nuxt-link>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  middleware: ['check-auth', 'auth'],
  data() {
    return {
      name: '',
      subtitle: '',
      chCategory: {},
      categories: [],
      tags: '',
      city: '',
      donation_amount: '',
      title: '',
      text: '',
      question: '',
      answer: '',
      categoryChosen: '',
      categoryToggle: false,
      stageChosen: '',
      stageToggle: false,
      step: '3',
      validationMessage: '',
      texts: [
        {
          title: 'О нас',
          content: 'Что то про нас'
        }
      ],
      loading : false
    };
  },
  methods: {
    toggleCategory() {
      this.categoryToggle = !this.categoryToggle
    },

    chooseCategory(category) {
      this.chCategory = category
      this.categoryToggle = false
    },

    toggleStage() {
      this.stageToggle = !this.stageToggle
    },

    chooseStage(str) {
      this.stageChosen = str
      this.stageToggle = false
    },

    nextStep() {
      if (this.step === '1') {
        if (this.name !== '' && this.subtitle !== '' && this.donation_amount !== '' && this.chCategory !== '' && this.stageChosen !== '') {
          this.step = '2'
          this.validationMessage = ''
          console.log(this.name, this.subtitle, this.donation_amount, this.chCategory.id)
        } else {
          this.validationMessage = 'Пожалуйста, заполните все обязательные поля (*)'
        }
      }

      if (this.step === '2') {
        if (this.texts.length !== 0) {
          this.step = '3'
          this.validationMessage = ''
        }
      }
    },

    prevStep() {
      if (this.step === '2') {
        this.step = '1'
      }
      if (this.step === '3') {
        this.step = '2'
      }
    },

    sendStartup() {
      this.loading = true;

      let data = {
        category_id : this.chCategory.id,
        name: this.name,
        subtitle : this.subtitle,
        donation_amount : this.donation_amount,
        texts: this.texts
      }

      this.$axios.post(process.env.API_URL + 'startups', data, {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`
        }
      })
        .then(resp => {
          console.log(resp)
          this.step = ''
        })
        .catch(err => {
          console.log(err)
        })

    },
    getCategories() {
      this.$axios.get(process.env.API_URL + 'categories')
        .then(resp => {
          this.categories = resp.data.data.data;
        })
        .catch(err => {
          console.log(err);
        })
    },
    addText() {
      this.texts.push({
        content: '',
        title: ''
      })
    }
  },

  mounted() {
    this.step = '1'
    this.getCategories()
  }
}
</script>
