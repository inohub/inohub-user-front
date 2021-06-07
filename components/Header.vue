<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link tag="a" to="/" class="header__logo">
        <img src="../assets/img/logo.png" alt="">
      </nuxt-link>

      <div class="header__search-box">
        <svg class="header__search-icon" width="14" height="14">
          <use href="../assets/img/icons.svg#search"></use>
        </svg>
        <input type="text" class="header__search-input" placeholder="Поиск">
      </div>

      <div class="header__links">
        <nuxt-link to="/About" tag="a" href="#" class="header__link">О нас</nuxt-link>
        <!--        <a href="#" class="header__link">Новости</a>-->
        <nuxt-link to="/Startups" tag="a" class="header__link">Стартапы</nuxt-link>
        <nuxt-link to="/Courses" tag="a" class="header__link">Курсы</nuxt-link>
        <nuxt-link to="/Startups/Register" href="#" class="header__link header__link--blue">Загрузить проект</nuxt-link>
        <a v-if="isAuth" @click="logout" class="header__link header__link--blue">Выйти</a>
        <nuxt-link v-else to="/Login" tag="a" class="header__link header__link--blue">Войти</nuxt-link>
      </div>

      <!--      <div class="header__notifications">-->
      <!--        <svg class="header__bell" width="19" height="24">-->
      <!--          <use href="../assets/img/icons.svg#bell"></use>-->
      <!--        </svg>-->
      <!--      </div>-->

      <div v-if="isAuth">
        <nuxt-link to="/Profile" tag="div" class="header__user-box">
          <img src="../assets/img/avatar.png" alt="" class="header__avatar">
        </nuxt-link>
      </div>

      <div v-else>
        <nuxt-link to="/Login" tag="div" class="header__user-box">
          <img  src="../assets/img/user-placeholder.png" alt="" class="header__avatar">
        </nuxt-link>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.getters.isAuthenticated, this.$store.state.token)

    console.log(this.isAuth)
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuthenticated
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
