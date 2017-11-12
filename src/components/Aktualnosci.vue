<template>
<section>
  <div class="container">
    <h1 class="heading">Aktualności</h1>
    <div class="fb-posts">
      <div v-for="link in fbPostLinks" class="fb-post" :data-href="link" data-width="300"></div>
    </div>
  </div>
</section>
</template>

<script>
import Links from '../api/fbPostLinks.json'

export default {
  name: 'Aktualnosci',
  data () {
    return {
      fbPostLinks: Links
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  background-color: #fff;
  min-height: 640px;
  width: 100%;

  .container {
      max-width: 1100px;
  }

  .fb-posts {
    margin: 32px 0 56px 0;
    text-align: center;
    overflow-x: auto;

    * {
     margin: 0 8px;
     vertical-align: top;
     margin-bottom: 16px;
    }
  }
}
</style>
