<template>
  <div>
    <div>
      <div class="desc">
        <div class="text">
          <h2>Telewizja światłowodowa</h2>
          <p>
            Dzięki współpracy z
            <a target="_blank"><b>Telewizją Światłowodową</b></a> dostarczamy
            Państwu telewizję w najwyższej jakości dzięki dobrodziejstwu
            technologii światłowodowej.
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
            Blisko 250 kanałów telewizyjnych, z czego aż ponad 120 w jakości HD!
            Kanały zostały podzielone na 4 pakiety. Dodatkowo - opcje premium,
            które zadowolą każdego widza.
          </p>
        </li>
        <li class="info-item">
          <img src="../assets/offer/multi.png" />
          <h3>Na kilku ekranach jednocześnie</h3>
          <p>
            Oglądaj swoje ulubione programy, transmisje sportowe i filmy – kiedy
            chcesz i na czym tylko chcesz.
          </p>
        </li>
        <li class="info-item">
          <img src="../assets/offer/fullhd.png" />
          <h3>Krystaliczna jakość obrazu</h3>
          <p>
            Twoje łącze światłowodowe może zapewnić Ci niesamowite wrażenia z
            oglądania programów w jakości Full HD.
          </p>
        </li>
        <li class="info-item">
          <img src="../assets/offer/decoder.png" />
          <h3>Multimedialny dekoder</h3>
          <p>
            Możesz nagrywać, przewijać i zatrzymywać swoje ulubione programy -
            dzięki usłudze domowej nagrywarki. Możesz też obejrzeć swoje
            ulubione audycje nawet 3 dni do tyłu.
          </p>
        </li>
      </ul>
    </div>
    <!-- <div class="container-offer-inner">
    <h2 class="packages-tytul">Pakiety</h2>
    <ul class="items" v-if="items">
      <ListItem v-for="(item, index) in items" :item="item" :key="index"/>
    </ul>
  </div> -->

    <div class="container-offer-inner">
      <div class="nav">
        <div
          class="typ_oferty_group"
          v-for="(item, typ_ofertyIndex) in items"
          :key="typ_ofertyIndex"
        >
          <h2>{{ item.typ_oferty }}</h2>
          <ul>
            <li
              v-for="(agreement, agreementLengthIndex) in item.opcje"
              :key="agreementLengthIndex"
            >
              <button
                :class="{
                  active:
                    currentTypeIndex == typ_ofertyIndex &&
                    currentAgreementLengthIndex == agreementLengthIndex,
                }"
                @click="
                  agreementLengthItemClick(
                    typ_ofertyIndex,
                    agreementLengthIndex
                  )
                "
              >
                <div class="dot" />
                <p>{{ agreement.dlugosc_umowy }}</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <transition name="offer-fade" mode="out-in">
        <div
          class="offer-content"
          :key="`${currentTypeIndex}_${currentAgreementLengthIndex}`"
        >
          <ul v-if="items && currentTypeIndex < items.length" class="items">
            <ListItem
              v-for="(item, index) in items[currentTypeIndex].opcje[
                currentAgreementLengthIndex
              ].opcje"
              :item="item"
              :key="index"
            />
          </ul>
        </div>
      </transition>
    </div>

    <div class="files" v-if="links && links.length > 0">
      <h2>Do pobrania:</h2>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a target="_blank" :href="link.adres">
            <FontAwesomeIcon :icon="iconPdf" class="icon" />
            <p>{{ link.tytul }}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ListItem from "./Offer_List_Item.vue";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

export default {
  name: "Offer_TV",
  data() {
    return {
      currentTypeIndex: 0,
      currentAgreementLengthIndex: 0,
      items: [],
      links: null,
    };
  },
  created: function() {
    this.fetchTVOffer();
  },
  methods: {
    agreementLengthItemClick(typ_ofertyIndex, agreementLengthIndex) {
      this.currentTypeIndex = typ_ofertyIndex;
      this.currentAgreementLengthIndex = agreementLengthIndex;
    },
    fetchTVOffer() {
      var self = this;
      axios
        .get(`./OFERTA/oferta_tv.json?timestamp=${new Date().getTime()}`)
        .then(function(resp) {
          self.items = resp.data;
        })
        .catch(function(error) {
          console.log(error);
        });
      axios
        .get(`./OFERTA/oferta_tv_linki.json?timestamp=${new Date().getTime()}`)
        .then(function(resp) {
          self.links = resp.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  components: {
    ListItem: ListItem,
    FontAwesomeIcon,
  },
  computed: {
    iconPdf() {
      return faFilePdf;
    },
  },
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
