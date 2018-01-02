<template>
<section>
  <div class="container">
    <h1>Promocje</h1>
    <!-- <agile :infinite="false">
        <div class="slide slide--1"><h3>slide 1</h3></div>
        <div class="slide slide--2"><h3>slide 2</h3></div>
        <div class="slide slide--3"><h3>slide 3</h3></div>
        <div class="slide slide--4"><h3>slide 4</h3></div>
        <div class="slide slide--5"><h3>slide 5</h3></div>
        <div class="slide slide--6"><h3>slide 6</h3></div>
    </agile> -->
  </div>
</section>
</template>

<script>
// import VueAgile from 'vue-agile'

export default {
  name: 'Promotions',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
.agile {
  &__dots {
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }

  &__dot {
    button {
      background-color: transparent;
      border: 1px solid #fff;

      &:hover {
        background-color: #fff;
      }
    }

    &--current {
      button {
        background-color: #fff;
      }
    }
  }

  &__arrow {
    height: 100%;
    top: 0;
    width: 80px;

    &:hover {
      background-color: rgba(#000, 0.5);

      #arrow-svg {
        fill: #fff;
      }
    }

    &[disabled] {
      display: none;
    }

    #arrow-svg {
      fill: rgba(#fff, 0.4);
      height: 25px;
    }
  }
}

.slide {
  background: {
    position: center;
    size: cover;
  }
  height: 500px;

  &:before {
    background-color: rgba(#000, 0.2);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &--1, &--2, &--3, &--4, &--5, &--6 {
    background-image: url(../assets/splash-bg.jpg);
  }
}
</style>

<style lang="scss" scoped>
section {
  background-color: #ebebeb;
  height: 640px;
}
</style>
