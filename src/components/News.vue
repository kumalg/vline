<template>
<section>
  <div class="container">
    <h1 class="heading">Aktualności</h1>
    <div class="fb-posts" id="example" ref="example">
      <div v-for="link in fbPostLinks" class="fb-post" :data-href="link.permalink_url" data-width="350"></div>
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
      setTimeout(function() {
        if (typeof(FB) != 'undefined') {
          var pageAccessToken = '1696406740378520|67ec118b4e72b7d01b491f11a6d1b0aa';
          FB.api('/telewizjaswiatlowodowa/posts?fields=permalink_url&limit=9', {
            access_token: pageAccessToken
          }, function(response) {
            self.fbPostLinks = response.data
            self.$nextTick(function() {
              window.fbAsyncInit()
            })
          });
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
        padding: {
            left: 0;
            right: 0;
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
