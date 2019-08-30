<template>
<section>
  <div class="container">
    <h1>Aktualności</h1>
    <div class="fb-posts bricklayer" id="fb-posts">
      <div v-for="(link, index) in fbPostLinks" :key="index" class="fb-post" :data-href="link.permalink_url" data-width="350"></div>
    </div>
  </div>
</section>
</template>

<script>
import axios from "axios";
import Bricklayer from "bricklayer";

window.fbAsyncInit = function() {
  FB.XFBML.parse(document.getElementById("fb-posts"));
};

export default {
  name: "News",
  data() {
    return {
      fbPostLinks: [],
      bricklayer: Object
    };
  },
  created: function() {
    this.fetchFbPostLinks();
  },
  methods: {
    fetchFbPostLinks() {
      var self = this;
      setTimeout(function() {
        if (typeof FB != "undefined") {
          axios
            // .get("//vline.net.pl/facebook_posts.php")
            .get('https://graph.facebook.com/883327525166389/posts?fields=permalink_url&limit=9&access_token=EAASW4vn7YVABAHZClnvKg9eBvX6NytU15zygY3c4TxZCSzuX0IYfWJPE7DeYHdQw23R4NR1Sa4SvE5KQUgiHCtZCEFNBiADuGyhZCWN53iIEjYa71VCmPmOaUZC4IXgXlVtxlJtwZBYJGhuQZB7v77eZCKtCQD3PZCWkjIWEr9wxpgWWG4ZBDcBMwc')
            .then(function(resp) {
              console.log(resp)
              self.setPosts(resp.data.data);
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      }, 2000);
    },
    setPosts(posts) {
      this.fbPostLinks = posts;
      this.$nextTick(function() {
        this.parsePosts();
      });
    },
    parsePosts() {
      window.fbAsyncInit();
      this.bricklayer = new Bricklayer(document.getElementById("fb-posts"));
    }
  }
};
</script>

<style lang="scss">
$column-gutter: 10px;

.bricklayer {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  &-column-sizer {
    width: 100%;
    display: none;

    @media screen and (min-width: 750px) {
      width: 50%;
    }

    @media screen and (min-width: 1150px) {
      width: 33.333%;
    }
  }

  &-column {
    width: 366px;
  }
}
</style>

<style lang="scss" scoped>
section {
  background-color: #fff;
  // min-height: 640px;

  .container {
    max-width: 1100px;
    padding: {
      left: 0;
      right: 0;
    }
  }

  .fb-posts {
    text-align: center;
    overflow-x: auto;

    .fb-post {
      // overflow-x: auto;
      width: 350px;
      margin: 8px 0;
      vertical-align: top;
    }
  }
}
</style>
