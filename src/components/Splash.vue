<template>
<section>
  <transition name="logo-fade" mode="out-in">
    <img v-if="isOldLogoVisible" src="../assets/logo_white_old.svg" class="logo" key="old_logo">
    <img else src="../assets/logo_white.svg" class="logo" key="new_logo">
  </transition>
  <a href="#" v-scroll-to="'#about'" class="button">Dowiedz się więcej</a>
</section>
</template>

<script>
export default {
  data () {
    return {
      isOldLogoVisible: true
    }
  },
  created () {
    setTimeout( () => {
      this.isOldLogoVisible = false
      }, 2000);
  }
}
</script>


<style lang="scss" scoped>
@import "../styles/_colors.scss";


.logo-fade-enter-active,
.logo-fade-leave-active {
  transition: all 0.5s ease;
}
/* .component-fade-leave-active below version 2.1.8 */
.logo-fade-enter,
.logo-fade-leave-to {
  opacity: 0;
}

.logo-fade-enter {
  transform: scale(1.1) rotate(5deg);
}

.logo-fade-leave-to {
  transform: scale(0.9) rotate(-5deg);
}

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
