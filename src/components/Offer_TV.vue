<template>
<div>
  <div>
    <div class="desc">
      <div class="text">
        <h2>Telewizja światłowodowa</h2>
        <p>
          Dzięki współpracy z <a href="http://telewizjaswiatlowodowa.pl"><b>Telewizją Światłowodową</b></a> dostarczamy Państwu telewizję w najwyższej jakości dzięki dobrodziejstwu technologii światłowodowej.
        </p>
      </div>
      <div class="image">
        <img src="../assets/offer/tv.jpg" />
      </div>
    </div>
    <ul class="info-items">
      <li class="info-item">
        <img src="../assets/offer/canals.png" />
        <h3>Najbogatszy wybór kanałów</h3>
        <p>
          Blisko 250 kanałów telewizyjnych, z czego aż ponad 120 w jakości HD! Kanały zostały podzielone na 4 pakiety. Dodatkowo - opcje premium, które zadowolą każdego widza.
        </p>
      </li>
      <li class="info-item">
        <img src="../assets/offer/multi.png" />
        <h3>Na kilku ekranach jednocześnie</h3>
        <p>
          Oglądaj swoje ulubione programy, transmisje sportowe i filmy – kiedy chcesz i na czym tylko chcesz.
        </p>
      </li>
      <li class="info-item">
        <img src="../assets/offer/fullhd.png" />
        <h3>Krystaliczna jakość obrazu</h3>
        <p>
          Twoje łącze światłowodowe może zapewnić Ci niesamowite wrażenia z oglądania programów w jakości Full HD.
        </p>
      </li>
      <li class="info-item">
        <img src="../assets/offer/decoder.png" />
        <h3>Multimedialny dekoder</h3>
        <p>
          Możesz nagrywać, przewijać i zatrzymywać swoje ulubione programy - dzięki usłudze domowej nagrywarki. Możesz też obejrzeć swoje ulubione audycje nawet 3 dni do tyłu.
        </p>
      </li>
    </ul>
  </div>
  <div class="container-offer-inner">
    <h2 class="package-title">Pakiety</h2>
    <ul class="items" v-if="items">
      <ListItem v-for="(item, index) in items" :item="item" :key="index"/>
    </ul>
  </div>
  <div class="files" v-if="links">
    <h2>Do pobrania:</h2>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <a target="_blank" :href="link.href">
          <FontAwesomeIcon :icon="iconPdf" /><p>{{link.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import ListItem from "./Offer_List_Item.vue";
import axios from "axios";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import { faFilePdf } from "@fortawesome/fontawesome-free-regular";

export default {
  name: "Offer_TV",
  data() {
    return {
      items: null,
      links: null
    };
  },
  created: function() {
    this.fetchTVOffer();
  },
  methods: {
    fetchTVOffer() {
      var self = this;
      axios
        .get("/static/api/offer_tv.json")
        .then(function(resp) {
          self.items = resp.data;
        })
        .catch(function(error) {
          console.log(error);
        });
      axios
        .get("/static/api/offer_tv_links.json")
        .then(function(resp) {
          self.links = resp.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  components: {
    ListItem: ListItem,
    FontAwesomeIcon
  },
  computed: {
    iconPdf() {
      return faFilePdf;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";

.desc {
  display: flex;
  // align-items: center;
  margin-bottom: 64px;

  .text {
    flex: 1;

    h2 {
      font-size: 2em;
      color: $colorPrimary;
      font-weight: 300;
      word-wrap: break-word;
    }
    p {
      margin-top: 16px;
      color: rgba($colorText, 0.75);
      font-size: 0.875em;
      line-height: 1.75em;
    }
  }

  .image {
    flex: 2;
    img {
      width: 100%;
      height: auto;
    }
  }
}

a {
  color: $colorPrimary;
}

b {
  font-weight: 600;
}

.info-items {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  .info-item {
    width: calc(50% - 16px);
    margin-bottom: 32px;

    h3 {
      font-size: 1.125em;
      margin: 16px 0;
    }

    p {
      color: rgba($colorText, 0.75);
      font-size: 0.875em;
      line-height: 1.75em;
    }
  }
}

.package-title {
  color: $colorPrimary;
  font-size: 1.75em;
  font-weight: 400;
  text-align: center;
  margin: 32px 0;
}

.items {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin: 0 -8px;

  .item {
    width: calc(25% - 16px);
    margin: {
      left: 8px;
      right: 8px;
    }
  }
}

@media all and (max-width: 900px) {
  .item {
    width: calc(50% - 16px) !important;
  }
}

@media all and (max-width: 720px) {
  .desc {
    flex-direction: column;
    text-align: center;

    .image {
      margin-top: 16px;
    }
  }
  .info-item {
    width: 100% !important;
    text-align: center;
    p {
      max-width: 460px;
      margin: auto;
    }
  }
}

@media all and (max-width: 470px) {
  .desc {
    h2 {
      font-size: 1.5em;
      font-weight: 400;
    }
  }
  .item {
    width: 100% !important;
  }
}

.files {
  margin-top: 32px;

  ul {
    margin-top: 16px;
    li {
      line-height: 32px;
      .icon {
        color: $colorPrimary;
        font-size: 1.125em;
      }
      p {
        padding-left: 16px;
        font-size: 0.75em;
        font-weight: 600;
        display: inline;
        color: $colorText;

        &:hover {
          color: $colorPrimary;
        }
      }
    }
  }
}
</style>
