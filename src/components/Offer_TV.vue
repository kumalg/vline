<template>
<div>
  <div>
    <div class="desc">
      <div class="text">
        <h2>Telewizja światłowodowa</h2>
        <p>
          Dzięki współpracy z <a target="_blank" href="http://telewizjaswiatlowodowa.pl"><b>Telewizją Światłowodową</b></a> dostarczamy Państwu telewizję w najwyższej jakości dzięki dobrodziejstwu technologii światłowodowej.
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
    <h2 class="packages-tytul">Pakiety</h2>
    <ul class="items" v-if="items">
      <ListItem v-for="(item, index) in items" :item="item" :key="index"/>
    </ul>
  </div>
  <div class="files" v-if="links && links.length > 0">
    <h2>Do pobrania:</h2>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <a target="_blank" :href="link.link">
          <FontAwesomeIcon :icon="iconPdf" class="icon" /><p>{{link.tytul}}</p>
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

.packages-tytul {
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

}

@media all and (max-width: 470px) {
  .item {
    width: 100% !important;
  }
}

</style>
