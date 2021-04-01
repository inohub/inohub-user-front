<template>
  <footer class="footer">
    <div class="footer__container">

      <div class="footer__info">

        <div class="footer__row">
          <nuxt-link tag="a" to="/" class="footer__logo">
            <img src="../assets/img/footer-logo.png" alt="">
          </nuxt-link>

          <div class="footer__links">
            <a href="#" class="footer__link">О нас</a>
            <a href="#" class="footer__link">Стать партнером</a>
            <a href="#" class="footer__link">Справка и поддержка</a>
            <a href="#" class="footer__link">Контакты</a>
          </div>

        </div>

        <div class="footer__row">
          <div class="footer__copyrights">inohub © Все права защищены, 2021г.</div>

          <div class="footer__contacts">
            <a href="tel: +7 (777) 777-77-77" class="footer__phone">+7 (777) 777-77-77</a>

            <div class="footer__socials">
              <a href="#" class="footer__social">
                <svg width="16" height="15">
                  <use href="../assets/img/icons.svg#twitter"></use>
                </svg>
              </a>
              <a href="#" class="footer__social">
                <svg width="16" height="16">
                  <use href="../assets/img/icons.svg#inst"></use>
                </svg>
              </a>
              <a href="#" class="footer__social">
                <svg width="15" height="15">
                  <use href="../assets/img/icons.svg#google"></use>
                </svg>
              </a>
              <a href="#" class="footer__social">
                <svg width="9" height="16">
                  <use href="../assets/img/icons.svg#facebook"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      <div class="footer__mobile-apps">
        <a href="#" class="footer__mobile-link">
          <img src="../assets/img/appstore.png" alt="">
        </a>
        <a href="#" class="footer__mobile-link">
          <img src="../assets/img/play-market.png" alt="">
        </a>
      </div>

    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>
