<template>
  <div class="profile-page">
    <div class="profile-page__container">

      <div class="profile-page__path-history path-history">
        <div class="path-history__item">Программирование</div>
        <div class="path-history__item">JavaScript</div>
      </div>

      <div class="profile-page__wrapper">

        <div class="profile-page__left">

          <div class="profile-page__user-box">
            <img src="../../assets/img/profile-img-bg.png" alt="" class="profile-page__user-img">

            <div class="profile-page__user-name">
              Matilda Brown
            </div>
          </div>

          <div class="profile-page__tabs side-tabs">

            <div class="side-tabs__tab"
                 @click="chooseTab('about')"
                 :class="{'side-tabs__tab--active' : chosenTab === 'about'}">Обо мне
            </div>
            <div class="side-tabs__tab"
                 @click="chooseTab('projects')"
                 :class="{'side-tabs__tab--active' : chosenTab === 'projects'}">Мои проекты
            </div>
            <div class="side-tabs__tab"
                 @click="chooseTab('courses')"
                 :class="{'side-tabs__tab--active' : chosenTab === 'courses'}">Мои курсы
            </div>
            <nuxt-link to="Profile/Settings/" tag="div" class="side-tabs__tab">Настройки</nuxt-link>
            <div class="side-tabs__tab" @click="logout">Выйти</div>

          </div>

        </div>

        <div class="profile-page__right">

          <div class="profile-page__main" v-if="chosenTab === 'about'">

            <div class="profile-page__section">

              <div class="profile-page__title">
                Обо мне
              </div>

              <div class="profile-page__text">
                The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B
                chest. This dress would be too long for those who are shorter but could be hemmed. The dress is great!
                Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress
                would be too long for those who are shorter but could be hemmed. The dress is great!
              </div>

            </div>

            <div class="profile-page__section">

              <div class="profile-page__title">
                Мои проекты
              </div>

              <div class="profile-page__list">

                <div class="profile-page__item course-card">
                  <img src="../../assets/img/course-img.png" alt="" class="course-card__img">

                  <div class="course-card__info">
                    <div class="course-card__title">
                      Полный курс по JavaScript
                      - с нуля до результата.
                    </div>
                    <div class="course-card__desc">
                      Короткое описание проекта еще
                      на одну строку
                    </div>

                    <div class="course-card__rating rate-stars">
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                    </div>

                    <svg class="course-card__favorite" width="13" height="21">
                      <use href="../../assets/img/icons.svg#favorite"></use>
                    </svg>
                  </div>
                </div>

                <div class="profile-page__item course-card">
                  <img src="../../assets/img/course-img.png" alt="" class="course-card__img">

                  <div class="course-card__info">
                    <div class="course-card__title">
                      Полный курс по JavaScript
                      - с нуля до результата.
                    </div>
                    <div class="course-card__desc">
                      Короткое описание проекта еще
                      на одну строку
                    </div>

                    <div class="course-card__rating rate-stars">
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                    </div>

                    <svg class="course-card__favorite" width="13" height="21">
                      <use href="../../assets/img/icons.svg#favorite"></use>
                    </svg>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div class="profile-page__main" v-if="chosenTab === 'projects'">

            <div class="profile-page__section">

              <div class="profile-page__title">
                Активные
              </div>

              <div class="profile-page__list">

                <div class="profile-page__item course-card">
                  <img src="../../assets/img/course-img.png" alt="" class="course-card__img">

                  <div class="course-card__info">
                    <div class="course-card__title">
                      Полный курс по JavaScript
                      - с нуля до результата.
                    </div>
                    <div class="course-card__desc">
                      Короткое описание проекта еще
                      на одну строку
                    </div>

                    <div class="course-card__rating rate-stars">
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                    </div>

                    <svg class="course-card__favorite" width="13" height="21">
                      <use href="../../assets/img/icons.svg#favorite"></use>
                    </svg>
                  </div>
                </div>

                <div class="profile-page__item course-card">
                  <img src="../../assets/img/course-img.png" alt="" class="course-card__img">

                  <div class="course-card__info">
                    <div class="course-card__title">
                      Полный курс по JavaScript
                      - с нуля до результата.
                    </div>
                    <div class="course-card__desc">
                      Короткое описание проекта еще
                      на одну строку
                    </div>

                    <div class="course-card__rating rate-stars">
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                    </div>

                    <svg class="course-card__favorite" width="13" height="21">
                      <use href="../../assets/img/icons.svg#favorite"></use>
                    </svg>
                  </div>
                </div>

              </div>

            </div>

            <div class="profile-page__section">

              <div class="profile-page__title">
                Ожидают модерацию
              </div>

              <div class="profile-page__list">

                <div class="profile-page__item course-card">
                  <img src="../../assets/img/course-img.png" alt="" class="course-card__img">

                  <div class="course-card__info">
                    <div class="course-card__title">
                      Полный курс по JavaScript
                      - с нуля до результата.
                    </div>
                    <div class="course-card__desc">
                      Короткое описание проекта еще
                      на одну строку
                    </div>

                    <div class="course-card__rating rate-stars">
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                    </div>

                    <svg class="course-card__favorite" width="13" height="21">
                      <use href="../../assets/img/icons.svg#favorite"></use>
                    </svg>
                  </div>
                </div>

              </div>

            </div>

            <div class="profile-page__section">

              <div class="profile-page__title">
                Архивные
              </div>

              <div class="profile-page__list">

                <div class="profile-page__item course-card">
                  <img src="../../assets/img/course-img.png" alt="" class="course-card__img">

                  <div class="course-card__info">
                    <div class="course-card__title">
                      Полный курс по JavaScript
                      - с нуля до результата.
                    </div>
                    <div class="course-card__desc">
                      Короткое описание проекта еще
                      на одну строку
                    </div>

                    <div class="course-card__rating rate-stars">
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                    </div>

                    <svg class="course-card__favorite" width="13" height="21">
                      <use href="../../assets/img/icons.svg#favorite"></use>
                    </svg>
                  </div>
                </div>

                <div class="profile-page__item course-card">
                  <img src="../../assets/img/course-img.png" alt="" class="course-card__img">

                  <div class="course-card__info">
                    <div class="course-card__title">
                      Полный курс по JavaScript
                      - с нуля до результата.
                    </div>
                    <div class="course-card__desc">
                      Короткое описание проекта еще
                      на одну строку
                    </div>

                    <div class="course-card__rating rate-stars">
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                    </div>

                    <svg class="course-card__favorite" width="13" height="21">
                      <use href="../../assets/img/icons.svg#favorite"></use>
                    </svg>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div class="profile-page__main" v-if="chosenTab === 'courses'">

            <div class="profile-page__section">

              <div class="profile-page__title">
                Текущие курсы
              </div>

              <div class="profile-page__list">

                <div class="profile-page__item course-card">
                  <img src="../../assets/img/course-img.png" alt="" class="course-card__img">

                  <div class="course-card__info">
                    <div class="course-card__title">
                      Полный курс по JavaScript
                      - с нуля до результата.
                    </div>
                    <div class="course-card__desc">
                      Короткое описание проекта еще
                      на одну строку
                    </div>

                    <div class="course-card__rating rate-stars">
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                    </div>

                    <svg class="course-card__favorite" width="13" height="21">
                      <use href="../../assets/img/icons.svg#favorite"></use>
                    </svg>
                  </div>
                </div>

                <div class="profile-page__item course-card">
                  <img src="../../assets/img/course-img.png" alt="" class="course-card__img">

                  <div class="course-card__info">
                    <div class="course-card__title">
                      Полный курс по JavaScript
                      - с нуля до результата.
                    </div>
                    <div class="course-card__desc">
                      Короткое описание проекта еще
                      на одну строку
                    </div>

                    <div class="course-card__rating rate-stars">
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                    </div>

                    <svg class="course-card__favorite" width="13" height="21">
                      <use href="../../assets/img/icons.svg#favorite"></use>
                    </svg>
                  </div>
                </div>

              </div>

            </div>

            <div class="profile-page__section">

              <div class="profile-page__title">
                Избранные
              </div>

              <div class="profile-page__list">

                <div class="profile-page__item course-card">
                  <img src="../../assets/img/course-img.png" alt="" class="course-card__img">

                  <div class="course-card__info">
                    <div class="course-card__title">
                      Полный курс по JavaScript
                      - с нуля до результата.
                    </div>
                    <div class="course-card__desc">
                      Короткое описание проекта еще
                      на одну строку
                    </div>

                    <div class="course-card__rating rate-stars">
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                      <svg class="rate-stars__star" width="11" height="11">
                        <use href="../../assets/img/icons.svg#star"></use>
                      </svg>
                    </div>

                    <svg class="course-card__favorite" width="13" height="21">
                      <use href="../../assets/img/icons.svg#favorite"></use>
                    </svg>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenTab: 'about'
    }
  },
  methods: {
    chooseTab(str) {
      this.chosenTab = str
    },
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
  mounted() {
    this.chosenTab = 'about'
  }
}
</script>
