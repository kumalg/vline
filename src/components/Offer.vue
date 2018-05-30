<template>
<section>
  <div class="container">
    <h1>Oferta</h1>
    <ul>
      <li v-for="(item, index) in offerMenuItems" :key="index">
        <a :class="{'active': currentOfferComponent == item.componentName}" @click="offerChangeView(item.componentName)">{{item.tytul}}</a>
      </li>
    </ul>
    <transition name="offer-component-fade" mode="out-in">
      <keep-alive>
        <component :is="currentOfferComponent"></component>
      </keep-alive>
    </transition>
    <div class="shared block-with-icon">
      <div class="block-icon">
        <img src="../assets/offer/packages.svg" style="max-width: 192px"/>
      </div>
      <div class="block-content">
        <p>Wszystkie nasze usługi mogą być łączone w pakiety co pozwala na ich racjonalne skalowanie i optymalizację kosztów.</p>
        <p>Oferujemy także usługi związane z zapewnieniem zapasowych łącz alternatywnych zapewniających dostęp do usług w przypadku awarii łącza podstawowego.</p>
        <p>Informacje dotyczace oferty dostepne w Biurze Obslugi Klienta lub pod numerem kontaktowym 43 656-92-56. Dla kazdej lokalizacji konieczne jest potwierdzenie mozliwosci technicznych swiadczenia uslug.
</p>
      </div>
    </div>
    <div class="clause">
      <span>Przedstawiona oferta cenowa ma charakter informacyjny, nie stanowi oferty handlowej w rozumieniu Art.66 par.1 Kodeksu Cywilnego</span>
    </div>
  </div>
</section>
</template>

<script>
import Offer_Internet from "../components/Offer_Internet";
import Offer_TV from "../components/Offer_TV";
import Offer_Phone from "../components/Offer_Phone";

export default {
  name: "Offer",
  data() {
    return {
      currentOfferComponent: "Offer_Internet",
      offerMenuItems: [
        {
          componentName: "Offer_Internet",
          tytul: "Internet"
        },
        {
          componentName: "Offer_TV",
          tytul: "Telewizja"
        },
        {
          componentName: "Offer_Phone",
          tytul: "Telefon"
        }
      ]
    };
  },
  components: {
    Offer_Internet: Offer_Internet,
    Offer_TV: Offer_TV,
    Offer_Phone: Offer_Phone
  },
  created: function() {},
  methods: {
    offerChangeView(componentName) {
      this.currentOfferComponent = componentName;
    }
  }
};
</script>

<style src="../styles/offer.scss" lang="scss"></style>
<style lang="scss" scoped>
@import "../styles/_colors.scss";

section {
  background-color: #fff;

  .offer-component-fade-enter-active,
  .offer-component-fade-leave-active {
    transition: all 0.2s ease;
  }
  /* .component-fade-leave-active below version 2.1.8 */
  .offer-component-fade-enter,
  .offer-component-fade-leave-to {
    opacity: 0;
  }

  .offer-component-fade-enter {
    transform: translateX(8px);
    // transform: scale(0.98, 0.98);
  }

  .offer-component-fade-leave-to {
    transform: translateX(-8px);
    // transform: scale(1.02, 1.02);
  }

  .shared {
    position: relative;
    margin-top: 48px;
    padding: 48px 0;
    border: {
      style: solid;
      width: 1px 0 0 0;
      color: $colorBorder;
    }
  }

  .clause {
    // span {
      font-size: 0.8125em;
      color: $colorTextLighter;
      text-align: center;
    // }
  }

  .block-with-icon {
    display: flex;
    align-items: center;

    .block-icon {
      align-self: flex-start;
        flex: 1;
        width: 100%;
        text-align: center;
        img {
          max-width: 240px;
          width: 75%;//calc(60vw - (100vw - 100%) * 0.6);
        }
    }

    .block-content {
      margin-left: 32px;
      flex: 2;

      p {
        color: rgba($colorText, .75);
        font-size: 0.875em;
        line-height: 1.75em;
        margin: 0.75em 0;
      }
    }

    @media all and (max-width: 640px) {
        flex-direction: column;
        text-align: center;

        .block-content {
            margin-top: 32px;
            margin-left: auto;
        }
    }
  }

  ul {
    margin-bottom: 48px;
    text-align: center;

    li {
      list-style: none;
      margin: 0 8px;
      display: inline;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      a {
        padding: 0 32px;
        margin-bottom: 16px;
        height: 48px;
        display: inline-block;
        font-weight: 600;
        font-size: 0.875em;
        color: $colorPrimary;
        text-decoration: none;
        line-height: 44px;
        transition: background-color 0.2s, color 0.2s;
        border: {
          style: solid;
          radius: 24px;
          width: 2px;
          color: $colorPrimary;
        }

        &.active,
        &:hover {
          color: white !important;
          background-color: $colorPrimary !important;
        }
      }
    }
  }
}
</style>
