<template>

  <div class="startup-setting">

    <div class="startup-setting__container">

      <div class="startup-setting__path-history path-history">
        <div class="path-history__item">Программирование</div>
        <div class="path-history__item">JavaScript</div>
      </div>

      <div class="startup-setting__heading">
        Настройки проекта
      </div>

      <div class="startup-setting__row">

        <div class="startup-setting__tabs side-tabs side-tabs--bordered">

          <div class="side-tabs__tab"
               @click="chooseTab('general')"
               :class="{'side-tabs__tab--active' : chosenTab === 'general'}">Общие данные
          </div>
          <div class="side-tabs__tab"
               @click="chooseTab('desc')"
               :class="{'side-tabs__tab--active' : chosenTab === 'desc'}">Описание
          </div>
          <div class="side-tabs__tab"
               @click="chooseTab('faq')"
               :class="{'side-tabs__tab--active' : chosenTab === 'faq'}">FAQ
          </div>
          <div class="side-tabs__tab"
               @click="chooseTab('news')"
               :class="{'side-tabs__tab--active' : chosenTab === 'news'}">Новости
          </div>

        </div>

        <div class="startup-setting__right">

          <div class="startup-setting__main" v-if="chosenTab === 'general'">

            <div class="startup-setting__title">
              Общие данные
            </div>

            <div class="startup-setting__download-box">
              <svg width="108" height="72">
                <use href="../../../assets/img/icons.svg#cloud"></use>
              </svg>

              <span>Загрузить файл</span>
            </div>

            <div class="startup-setting__input-box startup-input">
              <label class="startup-input__label">Название проекта<span>*</span></label>
              <input type="text" class="startup-input__input" v-model="name">
            </div>

            <div class="startup-setting__input-box startup-input">
              <label class="startup-input__label">Краткое описание<span>*</span></label>
              <textarea class="startup-input__textarea" v-model="desc"></textarea>
            </div>

            <div class="startup-setting__input-box startup-input">
              <label class="startup-input__label">Категория<span>*</span></label>

              <div class="startup-input__input-box" @click="toggleCategory">
                <input type="text" class="startup-input__input" readonly :placeholder="categoryChosen">

                <svg width="11" height="16" class="startup-input__icon"
                     :class="{'startup-input__icon--active' : categoryToggle}">
                  <use href="../../../assets/img/icons.svg#select-chevron"></use>
                </svg>
              </div>

              <div class="startup-input__dropdown" :class="{'startup-input__dropdown--active' : categoryToggle}">
                <div class="startup-input__item" @click="chooseCategory('ИТ')">ИТ</div>
                <div class="startup-input__item" @click="chooseCategory('Игры')">Игры</div>
                <div class="startup-input__item" @click="chooseCategory('Музыка')">Музыка</div>
                <div class="startup-input__item" @click="chooseCategory('Бизнес')">Бизнес</div>
              </div>
            </div>

            <div class="startup-setting__input-box startup-input">
              <label class="startup-input__label">Теги<span>*</span></label>
              <input type="text" class="startup-input__input" v-model="tags">
            </div>

            <div class="startup-setting__input-box startup-input">
              <label class="startup-input__label">Город<span>*</span></label>
              <input type="text" class="startup-input__input" v-model="city">
            </div>

            <div class="startup-setting__input-box startup-input">
              <label class="startup-input__label">Необходимая сумма<span>*</span></label>
              <input type="text" class="startup-input__input" v-model="sum">
            </div>

            <div class="startup-setting__input-box startup-input">
              <label class="startup-input__label">На каком вы этапе?<span>*</span></label>

              <div class="startup-input__input-box" @click="toggleStage">
                <input type="text" class="startup-input__input" readonly :placeholder="stageChosen">

                <svg width="11" height="16" class="startup-input__icon"
                     :class="{'startup-input__icon--active' : stageToggle}">
                  <use href="../../../assets/img/icons.svg#select-chevron"></use>
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

          <div class="startup-setting__main" v-if="chosenTab === 'desc'">

            <div class="startup-register__input-box startup-input">
              <label class="startup-input__label">Заголовок<span>*</span></label>
              <input type="text" class="startup-input__input" v-model="title">
            </div>

            <div class="startup-register__input-box startup-input">
              <label class="startup-input__label">Текст<span>*</span></label>
              <textarea class="startup-input__textarea startup-input__textarea--big" v-model="text"></textarea>
            </div>

            <div class="startup-setting__download-box">
              <svg width="108" height="72">
                <use href="../../../assets/img/icons.svg#cloud"></use>
              </svg>

              <span>Загрузить файл</span>
            </div>
          </div>

          <div class="startup-setting__main" v-if="chosenTab === 'faq'">

            <div class="startup-register__input-box startup-input">
              <label class="startup-input__label">Вопрос</label>
              <input type="text" class="startup-input__input" v-model="question">
            </div>

            <div class="startup-register__input-box startup-input">
              <label class="startup-input__label">Ответ</label>
              <textarea class="startup-input__textarea startup-input__textarea--big" v-model="answer"></textarea>
            </div>

          </div>

          <div class="startup-setting__main" v-if="chosenTab === 'news'">

            <div class="startup-register__input-box startup-input">
              <label class="startup-input__label">Заголовок<span>*</span></label>
              <input type="text" class="startup-input__input" v-model="title">
            </div>

            <div class="startup-register__input-box startup-input">
              <label class="startup-input__label">Текст<span>*</span></label>
              <textarea class="startup-input__textarea startup-input__textarea--big" v-model="text"></textarea>
            </div>

            <div class="startup-setting__download-box">
              <svg width="108" height="72">
                <use href="../../../assets/img/icons.svg#cloud"></use>
              </svg>

              <span>Загрузить файл</span>
            </div>
          </div>

          <button class="startup-setting__btn button">
            Сохранить
          </button>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenTab: 'general',
      name: '',
      desc: '',
      tags: '',
      city: '',
      sum: '',
      title: '',
      text: '',
      question: '',
      answer: '',
      categoryChosen: '',
      categoryToggle: false,
      stageChosen: '',
      stageToggle: false,
      step: '3',
      validationMessage: ''
    }
  },
  methods: {
    chooseTab(str) {
      this.chosenTab = str
    },
    toggleCategory() {
      this.categoryToggle = !this.categoryToggle
    },

    chooseCategory(str) {
      this.categoryChosen = str
      this.categoryToggle = false
    },

    toggleStage() {
      this.stageToggle = !this.stageToggle
    },

    chooseStage(str) {
      this.stageChosen = str
      this.stageToggle = false
    },
  },
  mounted() {
    this.chosenTab = 'general'
  }
}
</script>
