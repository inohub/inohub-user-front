<template>
  <section class="auth">
    <div class="auth__container">
      <div class="auth__info">
        <h2 class="auth__heading">
          Одним словом <br>
          про inohub
        </h2>

        <p class="auth__subtitle">
          Полный курс по JavaScript - <br>
          с нуля до результата.
        </p>
      </div>

      <div class="auth__box">
        <div class="auth__title">
          Войти
        </div>

        <div class="auth__text">
          Новый пользователь? <a href="#" class="auth__link">Создать учетную запись</a>
        </div>

        <div class="auth__input-group">
          <div class="auth__input-box input-box">
            <input type="text"
                   class="input-box__input"
                   placeholder="E-mail"
                   v-model="email">
          </div>

          <div class="auth__input-box input-box">
            <input type="text"
                   class="input-box__input"
                   placeholder="Пароль"
                   v-model="password">
          </div>
        </div>

        <button class="auth__btn" @click="login">Войти</button>

        <div class="auth__text">
          Или войдите через
        </div>

        <div class="auth__socials">
          <div class="auth__social">
            <svg width="22" height="22">
              <use href="../assets/img/icons.svg#google-colored"></use>
            </svg>
          </div>
          <div class="auth__social">
            <svg width="22" height="22">
              <use href="../assets/img/icons.svg#facebook-colored"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store.dispatch('authenticateUser', {
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push('/')
      })
      .catch(e => console.log(e))
    }
  }
}
// test() {
//   this.$axios.post('https://api.inohub.kz/api/auth/login', {
//     email: this.email,
//     password: this.password
//   })
//   .then(res => console.log(res.data.data.access_token))
//   .catch(e => console.log(e))
// }
</script>
