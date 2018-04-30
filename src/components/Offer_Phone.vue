<template>
<div>
  <div class="desc">
    <div class="text">
      <h2>Telefon VoIP</h2>
      <p>
        Opis telefonii VoIP
      </p>
    </div>
    <div class="image">
      <img src="../assets/offer/tv.jpg" />
    </div>
  </div>
  <div class="call-methods-container">
    <h3>Możesz dzwonić na wiele sposobów</h3>
    <ul class="call-methods-list">
      <li class="call-methods-list-item">
        <h4>Zwykły stacjonarny telefon</h4>
        <ul>
          <li>Możemy zamontować u Państwa urządzenie (bramkę voip). A dotychczasowy telefon stacjonarny zamiast do gniazdka telefonicznego TP podłączymy do bramki podłączonej do internetu (bez pośrednictwa komputera). Będziesz dzwonić tak jak dotychczas, przy użyciu swojego aparatu telefonicznego.</li>
          <li>Możemy zamontować u Państwa nowy Cyfrowy Telefon Stacjonarny w systemie bezprzewodowym z obsługą wielu numerów w jednej słuchawce podłączony bezpośrednio do Internetu. Będziesz dzwonić tak jak dotychczas, przy użyciu swojego Nowego aparatu telefonicznego.</li>
        </ul>
        <div>Obrazek</div>
      </li>
      <li class="call-methods-list-item">
        <h4>Komputer, laptop, smartfon</h4>
        <p>
          Każdy może pobrać i zainstalować bezpłatny program do obslugi SIP. Np. x-lite. Wszędzie, gdzie będziesz miał dostęp do Internetu będziesz mógł dzwonić przez Cyfrowy Telefon Stacjonarny, oraz odbierać połączenia na swój własny numer stacjonarny.
        </p>
      </li>
    </ul>
  </div>
  <div class="container-offer-inner">
    <h2 class="packages-title">Pakiety</h2>
    <ul class="items phone-offer-items" v-if="items">
      <ListItem v-for="(item, index) in items" :item="item" :key="index"/>
    </ul>
  </div>
  <div class="links">
    <ul>
      <li><a target="_blank" href="https://rejestrator.ipfon.pl/index.php?version=vline&scenario=telefon&source1221">Załóż darmowe konto</a></li>
      <li><a target="_blank" href="https://ipfon24.ipfon.pl/">Zaloguj się</a></li>
    </ul>
  </div>
  <div class="files" v-if="links && links.length > 0">
    <h2>Do pobrania:</h2>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <a target="_blank" :href="link.href">
          <FontAwesomeIcon :icon="iconPdf" class="icon" /><p>{{link.title}}</p>
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
  name: "Offer_Phone",
  data() {
    return {
      items: null,
      links: null
    };
  },
  created() {
    this.fetchPhoneOffer()
  },
  methods: {
    fetchPhoneOffer() {
      var self = this;
      axios
        .get("/static/api/offer_phone.json")
        .then(function(resp) {
          self.items = resp.data
        })
        .catch(function(error) {
          console.log(error)
        });
      axios
        .get("/static/api/offer_phone_links.json")
        .then(function(resp) {
          self.links = resp.data
        })
        .catch(function(error) {
          console.log(error)
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

<style lang="scss">

.phone-offer-items .item h2 {
  font-size: 1em !important;
}
</style>

<style lang="scss" scoped>
@import "../styles/_colors.scss";

h3, .packages-title {
  color: $colorPrimary;
  font-size: 1.75em;
  font-weight: 400;
  text-align: center;
  margin: 32px 0;
}

.call-methods-container {
  h3 {
    margin-bottom: 16px;
  }
  .call-methods-list {
    display: flex;
    flex-wrap: wrap;
    .call-methods-list-item {
      width: 50%;
      margin: 16px 0;
      padding: 0 16px;
      text-align: justify;
      color: rgba($colorText, 0.75);
      font-size: 0.875em;
      line-height: 1.75em;
      h4 {
        color: $colorPrimary;
        font-size: 1.25em;
        text-align: center;
        margin-bottom: 16px;
      }
      ul {
        list-style: initial;
        padding: initial;
        li {
          padding: initial;
          margin: 16px 0;
        }
      }
    }
  }
}

.items {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin: 0 -8px;

  .item {
    width: calc(20% - 16px);
    min-width: initial; //176px;
    margin: {
      left: 8px;
      right: 8px;
    }
  }
}

.links > ul {
  margin-top: 32px;
  text-align: center;
  li {
    list-style: none;
    margin: 8px 16px;
    display: inline-block;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    a {
      color: #fff;
      font-weight: 400;
      display: inline-block;
      background: linear-gradient(45deg,$colorPrimaryDarker 0,$colorPrimaryLighter 90%);
      padding: 16px 48px;
      border-radius: 100px;
      box-shadow: 0 4px 16px rgba($colorPrimary, .25);
      transition: box-shadow 0.3s ease, background-color 0.2s ease;

      &:hover {
        box-shadow: 0 0px 32px rgba($colorPrimary, .50);
      }
    }
  }
}

@media all and (max-width: 400px) {
  ul {
    li {
      margin: {
        left: 0px;
        right: 0px;
      }

      a {
        padding: 15px 32px;
        font-size: 1em;
      }
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
  .call-methods-container {
    .call-methods-list {
      .call-methods-list-item {
        width: 100%;
      }
    }
  }
  .item {
    width: 100% !important;
  }
}

</style>
