<template>
<div>
  <div>
    <div class="desc">	
      <div class="text">
        <h2>Internet</h2>
        <p>
          Bez względu na to czy jesteś klientem czy firmą, Kowalskim czy „Kowalskim sp. z o.o.”, dla nas <b>jesteś zawsze najważniejszy</b>, więc dopasujemy ofertę do Twoich wymagań.
        </p>
      </div>
      <div class="image">
        <img src="../assets/offer/internet.jpg" />
      </div>
    </div>
    <ul class="info-items">
      <li class="info-item">
        <h3>Oferta dla każdego</h3>
        <p>
          Oferujemy łącza światłowodowe ftth, Ethernet i bezprzewodowe, naszą ofertę kierujemy do każdego odbiorcy, dajemy możliwość korzystania z niezawodnego, szybkiego i pewnego dostępu do Internetu. 
        </p>
      </li>
      <li class="info-item">
        <h3>Najwyższa wydajność i niezawodność</h3>
        <p>
          Posiadamy dostęp do łącz operatorskich w oparciu o własne światłowodowe sieci, zoptymalizowane pod kątem uzyskania jak najwyższej wydajności i niezawodności.
        </p>
      </li>
      <li class="info-item">
        <h3>Dostosowany dla Ciebie</h3>
        <p>
          Nieważne czy potrzebujesz łącza do domu czy dla firmy, postaramy się zaoferować usługę która w najlepszy możliwy sposób zaspokoi Twoje wymagania.
        </p>
      </li>
      <li class="info-item">
        <h3>Najszybszy Internet światłowodowy</h3>
        <p>
          Nasze łącza <b>światłowodowe</b>, są wielokrotnie szybsze od łączy telefonicznych oraz średnio 10-krotnie szybsze od Internetu LTE. Co ważne, możliwości światłowodu ciągle rosną. W świetle takich faktów możesz wybrać tylko jedno – Technologię ŚWIATŁOWODOWĄ.
        </p>
      </li>
    </ul>
  </div>
  <div class="container-offer-inner">
    <div class="nav">
      <div class="typ_oferty_group" v-for="(item, typ_ofertyIndex) in items" :key="typ_ofertyIndex">
        <h2>{{ item.typ_oferty }}</h2>
        <ul>
          <li v-for="(agreement, agreementLengthIndex) in item.opcje" :key="agreementLengthIndex">
            <button 
              :class="{'active': currentTypeIndex == typ_ofertyIndex && currentAgreementLengthIndex == agreementLengthIndex}" 
              @click="agreementLengthItemClick(typ_ofertyIndex, agreementLengthIndex)"
            >
              <div class="dot"/><p>{{agreement.dlugosc_umowy}}</p>
            </button>
          </li>
        </ul>
      </div>
      <div class="typ_oferty_group">
        <h2>Inne</h2>
        <ul>
          <li>
            <button 
              :class="{'active': currentTypeIndex == items.length && currentAgreementLengthIndex == 0}" 
              @click="agreementLengthItemClick(items.length, 0)"
            >
              <div class="dot"/><p>Internet Radiowy</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <transition name="offer-fade" mode="out-in">
      <div class="offer-content" :key="`${currentTypeIndex}_${currentAgreementLengthIndex}`">
        <ul v-if="items && currentTypeIndex < items.length" class="items">
          <ListItem v-for="(item, index) in items[currentTypeIndex].opcje[currentAgreementLengthIndex].opcje" :item="item" :key="index"/>
        </ul>
        <div class="radio-internet" v-else :key="`${items.length}_0`">
          <p>Pakiety już <b>od 40 zł</b></p>
          <p>Prędkość nawet <b>do 15 Mbit</b></p>
        </div>
      </div>
    </transition>
  </div>
  <div class="files" v-if="links && links.length > 0">
    <h2>Do pobrania:</h2>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <a target="_blank" :href="link.adres">
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
  name: "Offer_Internet",
  data() {
    return {
      currentTypeIndex: 0,
      currentAgreementLengthIndex: 0,
      items: null,
      links: null
    };
  },
  created: function() {
    this.fetchInternetOffer();
  },
  methods: {
    agreementLengthItemClick(typ_ofertyIndex, agreementLengthIndex) {
      this.currentTypeIndex = typ_ofertyIndex
      this.currentAgreementLengthIndex = agreementLengthIndex
    },
    fetchInternetOffer() {
      var self = this;
      axios
        .get("./static/OFERTA/oferta_internet.json")
        .then(function(resp) {
          self.items = resp.data;
        })
        .catch(function(error) {
          console.log(error);
        });
      axios
        .get("./static/OFERTA/oferta_internet_linki.json")
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

.files h2,
.nav h2 {
  font-size: 1.125em;
  color: $colorPrimary;
  font-family: inherit;
}

.container-offer-inner {
  margin-top: 32px;
  display: flex;
  width: 100%;

  .offer-fade-enter-active,
  .offer-fade-leave-active {
    transition: all 0.2s ease;
  }

  .offer-fade-enter,
  .offer-fade-leave-to {
    opacity: 0;
  }

  .offer-fade-enter {
    transform: translateX(8px);
  }

  .offer-fade-leave-to {
    transform: translateX(-8px);
  }

  .nav {
    flex: 1;
    min-width: 210px;
    padding-bottom: 16px;

    .typ_oferty_group + .typ_oferty_group {
      margin-top: 16px;
    }

    ul {
      margin-top: 8px;
    }

    button {
      background: transparent;
      border: none;
      font-size: 0.75em;
      font-weight: 600;
      outline: none;
      margin: 8px 0;
      cursor: pointer;
      font-family: inherit;
      transition: color 0.3s ease;
      padding: 0;

      &.active,
      &:hover {
        color: $colorPrimary;
      }

      &.active .dot {
        background-color: $colorPrimary;
      }

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 4px;
        display: inline-block;
        transition: background-color 0.3s ease;
      }

      p {
        margin-left: 8px;
        display: inline;
      }
    }
  }
  .offer-content {
    flex: 3;
    .items {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      margin: 0 -8px;

      .item {
        margin: {
          left: 8px;
          right: 8px;
        }
      }
    }
    .radio-internet {
      text-align: center;
      p {
        font-size: 1.5em;
        margin: 16px 0;
      }
    }
  }

  @media all and (max-width: 499px) {
    flex-direction: column;

    .item {
      width: 100%;
    }

    .nav {
      text-align: center;
    }
  }

  @media all and (min-width: 500px) {
    .item {
      width: calc(100% - 16px) !important;
    }
  }

  @media all and (min-width: 700px) {
    .item {
      width: calc(49.9999% - 16px) !important;
    }
  }

  @media all and (min-width: 992px) {
    .item {
      width: calc(33.3333% - 16px) !important;
    }
  }
}
</style>
