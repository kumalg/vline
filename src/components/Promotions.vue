<template>
<section>
  <div class="container">
    <h1>Promocje</h1>
    <div v-if="promotions">
      Lista
    </div>
    <div v-else class="no-promotions">
      <p>Niestety, aktualnie nie prowadzimy żadnych akcji promocyjnych :'(</p>
    </div>
  </div>
</section>
</template>

<script>

export default {
  name: 'Promotions',
  data() {
    return {
      promotions: null
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";

section {
  background-color: #ebebeb;
  // height: 640px;

  .no-promotions {
    p {
      text-align: center;
      font-size: 1.75em;
      font-weight: 300;
      color: $colorTextLighter;
    }
  }
}
</style>
