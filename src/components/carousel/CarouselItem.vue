<template>
  <div class="carousel-item" :style="carouselItemStyle" @click="handleClick" :theme="textTheme">
    <div class="carousel-item__container">
      <div class="carousel-item__container__details">
        <div class="carousel-item__title">{{ title }}</div>
        <div v-if="subtitle" class="carousel-item__subtitle">{{ subtitle }}</div>
        <button class="carousel-item__action">{{ actionText }}</button>
      </div>
      <div v-if="image" class="carousel-item__container__image-container">
        <img :src="image" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    actionText: {
      type: String,
      default: 'Sprawdź',
      required: false
    },
    href: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false
    },
    background: {
      type: String,
      required: false
    },
    textTheme: {
      type: String,
      required: false
    },
    click: {
      type: Function,
      required: false
    }
  },
  methods: {
    handleClick () {
      if (this.click) {
        this.click()
      }
    }
  },
  computed: {
    carouselItemStyle () {
      let styles = {}

      if (this.background) {
        styles.background = this.background
      }

      if (this.color) {
        styles.color = this.color
      }

      return styles
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_colors.scss";

.carousel-item {
  $root: &;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  color: #fff;
  cursor: pointer;

  &[theme=ciemny] {
    color: #000;
  }

  &__container {
    position: relative;
    max-width: 960px + 2 * 16px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    &__details {
      position: absolute;
      width: 50%;
      z-index: 1;
      padding: 16px;
      
      @media (max-width: 750px) {
        width: 100%;
      }
    }

    &__image-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: -48px;
      right: -48px;
      margin: 0 auto;
      max-width: 960px + 2 * 16px;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border: none;
        animation: small-zoom 5s ease-out 1;
        transform: translateX(-8px) rotate(0);

        @media (max-width: 750px) {
          opacity: .5;
        }
      }

      @keyframes small-zoom {
        from {
          transform: translateX(8px) rotate(0.01deg);
        }
        to {
          transform: translateX(-8px) rotate(0);
        }
      }
    }
  }

  &__title {
    font-weight: 300;
    font-size: 2em;
  }

  &__subtitle {
    margin-top: 16px;
    font-size: .875rem;
    color: rgba(#fff, .75);

    #{ $root }[theme=ciemny] & {
      color: rgba(#000, .75);
    }
  }

  $button-color: #492778;
  &__action {
    margin-top: 16px;
    color: #fff;
    background-color: rgba(#fff, .1);
    padding: 0 32px;
    height: 48px;
    font-size: .875rem;
    transition: background-color .2s ease;
    border: none;
    border-radius: 100px;
    font-family: inherit;
    cursor: pointer;

    &:hover {
      background-color: rgba(#fff, .15);
    }

    #{ $root }[theme=ciemny] & {
      color: #000;
      background-color: rgba(#000, .1);

      &:hover {
        background-color: rgba(#000, .15);
      }
    }
  }
}
</style>