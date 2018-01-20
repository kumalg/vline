<template>
<section>
  <img src="../assets/logo_white.svg" class="logo" />
  <a href="#" v-scroll-to="'#about'" class="button">Dowiedz się więcej</a>
</section>
</template>

<style lang="scss" scoped>
@import "../styles/_colors.scss";

section {
  background-color: $colorPrimary;
  background: url("../assets/splash-bg.jpg") no-repeat center/cover;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #fff;

  span {
    font-size: 2em;
    font-weight: 300;
  }

  .logo {
    max-width: 300px;
    width: 60vw; // calc(60vw - (100vw - 100%) * 0.6);
    margin-bottom: 80px;
  }

  $button-color: #492778;
  .button {
    background-color: rgba($button-color, .5);
    padding: 20px 64px;
    color: #fff;
    // font-size: 1.125em;
    font-weight: 300;
    transition: background-color .2s ease;
    border: {
      radius: 100px;
    }

    &:hover {
      background-color: rgba($button-color, .75);
    }
  }
}
</style>
