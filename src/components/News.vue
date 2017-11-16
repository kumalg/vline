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
import axios from 'axios'

window.fbAsyncInit = function() {
  FB.XFBML.parse();
}

export default {
  name: 'News',
  data() {
    return {
      fbPostLinks: []
    }
  },
  created: function() {
    this.fetchFbPostLinks()
  },
  methods: {
    fetchFbPostLinks() {
      var self = this;
      axios.get('/static/api/fbPostLinks.json')
        .then(function(resp) {
          self.fbPostLinks = resp.data;
        })
        .catch(function(error) {
          console.log(error);
        });
      setTimeout(function() {
        if (typeof(FB) != 'undefined') {
          window.fbAsyncInit();
        }
      }, 2000)
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
        padding:{
          left: 0;
          right: 0
        }
    }

    .fb-posts {
        margin-top: 32px;
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
