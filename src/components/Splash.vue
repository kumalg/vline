<template>
  <section>
    <img src="../assets/logo_white.svg" id="logo" />
    <h6>Internet &nbsp;&nbsp; + &nbsp;&nbsp; Telewizja &nbsp;&nbsp; + &nbsp;&nbsp; Telefon</h6>
  </section>
</template>

<script>

export default {
  name: 'Splash',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
  }

  h6 {
    font-size: 2em;
    font-weight: 300;
  }

  #logo {
    margin-bottom: 80px;
  }
}
</style>
