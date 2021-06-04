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

      <form @submit.prevent="register" class="auth__box">
        <div class="auth__title">
          Зарегистрироваться
        </div>

        <div class="auth__text">
          Уже есть аккаунт?
          <nuxt-link to="/Login" tag="a" class="auth__link">Войти</nuxt-link>
        </div>

        <div class="auth__input-group">
          <!--          <div class="auth__input-box input-box">-->
          <!--            <input type="text" class="input-box__input" placeholder="Имя">-->
          <!--          </div>-->

          <div class="auth__input-box input-box">
            <input type="email" class="input-box__input"
                   placeholder="Email"
                   v-model="email">
          </div>

          <div class="auth__input-box input-box">
            <input type="password" class="input-box__input"
                   placeholder="Пароль"
                   v-model="password">
          </div>

          <div class="auth__input-box input-box">
            <input type="password" class="input-box__input"
                   placeholder="Подтверждение пароля" v-model="password2">
          </div>
        </div>

        <div class="auth__text auth__text--error">
          {{ errorMessage }}
        </div>

        <button class="auth__btn">Зарегистрироваться</button>

        <!--        <div class="auth__text">-->
        <!--          Или зарегистрируйтесь через-->
        <!--        </div>-->

        <!--        <div class="auth__socials">-->
        <!--          <div class="auth__social">-->
        <!--            <svg width="22" height="22">-->
        <!--              <use href="../assets/img/icons.svg#google-colored"></use>-->
        <!--            </svg>-->
        <!--          </div>-->
        <!--          <div class="auth__social">-->
        <!--            <svg width="22" height="22">-->
        <!--              <use href="../assets/img/icons.svg#facebook-colored"></use>-->
        <!--            </svg>-->
        <!--          </div>-->
        <!--        </div>-->

      </form>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      password2: "",
      errorMessage: "",
      data: ""
    };
  },
  methods: {
    register() {
      if (this.password.length < 6) {
        this.errorMessage = 'Пароль должен содержать не менее 6 символов'
      }
      if (this.password !== this.password2) {
        this.errorMessage = 'Пароли не совпадают'
      }
      if (this.password.length > 5 && this.password === this.password2) {
        this.$axios.post("https://api.inohub.kz/api/auth/registration", {
          email: this.email,
          password: this.password,
          role_slug: 'guest'
        })
          .then(response => {
            this.data = response;
            console.log(response);
            this.$router.push('/')
          })
          .catch(error => {
            // this.errorMessage = error.message;
            console.log("ERROR!", error.message);
          });
      }
    }
  }
}
</script>
