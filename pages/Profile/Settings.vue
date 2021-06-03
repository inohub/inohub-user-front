<template>
  <div class="setting-page">
    <div class="setting-page__container">

      <div class="setting-page__path-history path-history">
        <div class="path-history__item">Программирование</div>
        <div class="path-history__item">JavaScript</div>
      </div>

      <div class="setting-page__wrapper">

        <div class="setting-page__user-box">

          <img src="../../assets/img/profile-img-bg.png" alt="" class="setting-page__user-img">

          <div class="setting-page__info">
            <h2>Matilda Brown</h2>
            <p>matilda@gmail.com</p>
          </div>

        </div>

        <div class="setting-page__input-list">

          <div class="startup-register__input-box startup-input">
            <label class="startup-input__label">Имя</label>
            <input type="text" class="startup-input__input">
          </div>

          <div class="startup-register__input-box startup-input">
            <label class="startup-input__label">Фамилия</label>
            <input type="text" class="startup-input__input">
          </div>

          <div class="startup-register__input-box startup-input">
            <label class="startup-input__label">Пол</label>
            <input type="text" class="startup-input__input">
          </div>

          <div class="startup-register__input-box startup-input">
            <label class="startup-input__label">Дата рождения</label>
            <input type="text" class="startup-input__input">
          </div>

        </div>

        <div class="setting-page__section">
          <div class="startup-register__input-box startup-input">
            <label class="startup-input__label">Изменить пароль</label>
            <input type="text" class="startup-input__input startup-input__input--mb15" placeholder="Старый пароль">
            <input type="text" class="startup-input__input" placeholder="Новый пароль">
          </div>
        </div>

        <button class="setting-page__btn button" @click="modalOpen = true">
          Завершить
        </button>

      </div>

      <div class="tes-page__modal modal" v-if="modalOpen">
        <div class="modal__text">
          Изменения <br>
          успешно сохранены!
        </div>

        <div class="modal__btn-group">
          <button class="modal__btn button-blue" @click="$router.push('/Profile')">
            Круто!
          </button>

          <button class="modal__btn button-blue button-blue--white" @click="modalOpen = false">
            Назад
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
      modalOpen: false
    };
  },
  methods: {
    saveProfile() {

    }
  }
}
</script>
