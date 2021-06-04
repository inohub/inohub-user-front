<template>
  <div class="about-page">

    <section class="about-page__section welcome-section welcome-section--blue-bg">
      <div class="welcome-section__container">
        <div class="welcome-section__info">
          <h1 class="welcome-section__title">
            Innovation Center
          </h1>

          <p class="welcome-section__subtitle">
            Помогаем студентам развивать предпринимательские навыки
            и поддерживаем при разработке
            проектов
          </p>

          <div class="welcome-section__btn-group">
            <button class="welcome-section__btn button" @click="modalOpen = true">
              Хочу в команду!
            </button>
          </div>
        </div>

        <img src="../assets/img/big-rocket.png" alt="" class="welcome-section__side-person">
      </div>
    </section>

    <section class="about-page__section">
      <div class="about-page__container">
        <div class="about-page__info">

          <div class="about-page__title">
            О нас
          </div>

          <div class="about-page__text">
            Функциональное инновационное пространство с обустроенными рабочими местами, переговорным комнатам и игровой
            зоной.
            <br><br>
            В первую очередь для бизнеса завтрашнего дня - быстрорастущих инновационных компаний будущего,
            технологических проектов, направленных на глобальный рынок. В общем, для всех тех, кто остро нуждается в
            правильной атмосфере, необходимой для продуктивной работы. Встречи с менторами и инвесторами, участие в
            конкурсах, хакатонах, буткампах, беседы с руководителями успешных стартапов помогут вам эффективно запустить
            свой проект
          </div>

          <img src="../assets/img/about-img.png" alt="" class="about-page__info-img">
        </div>
      </div>
    </section>

    <section class="about-page__section fluid-section">
      <div class="fluid-section__container">
        <div class="fluid-section__info">
          <h2 class="fluid-section__heading">
            Стань частью <br>
            команды
          </h2>

          <div class="fluid-section__btn-group">
            <button class="fluid-section__btn button">
              Подать заявку
            </button>
          </div>
        </div>

        <img src="../assets/img/fluid-img1.png" alt="" class="fluid-section__img">
      </div>
    </section>

    <section class="about-page__section">
      <div class="about-page__container">
        <div class="about-page__info">

<!--          <div class="about-page__title">-->
<!--            О нас-->
<!--          </div>-->

<!--          <div class="about-page__text">-->
<!--            Полный курс по JavaScript - с нуля до результата. Полный курс по JavaScript - с нуля до результата. Полный-->
<!--            курс по JavaScript-->
<!--            <br><br>-->

<!--            Полный курс по JavaScript - с нуля до результата. Полный курс по JavaScript - с нуля до результата. Полный-->
<!--            курс по JavaScript Полный курс по JavaScript - с нуля до результата. Полный курс по JavaScript - с нуля до-->
<!--            результата. Полный курс по JavaScript Полный курс по JavaScript - с нуля до результата. Полный курс по-->
<!--            JavaScript - с нуля до результата. Полный курс по JavaScript-->
<!--          </div>-->

          <img src="../assets/img/about-img2.png" alt="" class="about-page__info-img">
        </div>
      </div>
    </section>

    <div class="about-page__modal modal" v-if="modalOpen">
      <div class="modal__text modal__text--mb20">
        А ты уже прошел курс <br>
        “Стартап с нуля”?
      </div>

      <div class="modal__subtitle">
        Для максимально эффективного начала, мы подготовили <br>
        для тебя мини курс. Ждем тебя с результатами!
      </div>

      <div class="modal__btn-group">
        <button class="modal__btn button-blue button-blue--white" @click="$router.push('/Courses')">
          Пройти курс
        </button>

        <button class="modal__btn button-blue" @click="sendApp">
          Отправить заявку
        </button>
      </div>

    </div>

    <div class="about-page__notify notify-box" @click="notifyOpen = false" v-if="notifyOpen">
      <svg width="38" height="48">
        <use href="../assets/img/icons.svg#bell-2"></use>
      </svg>

      <p>
        Ваша заявка <br>
        отправлена на расмотрение!
      </p>
    </div>

  </div>
</template>

<script>
export default {
  middleware: ['check-auth'],
  data() {
    return {
      modalOpen: false,
      notifyOpen: false
    };
  },

  methods: {
    sendApp() {
      this.modalOpen = false
      this.notifyOpen = true
    }
  }
}
</script>
