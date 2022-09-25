<template>
  <section>
    <modal
      v-if="showModal && selectedCarouselItem"
      @close="showModal = false"
      :size="selectedCarouselItem.isMap ? 'large' : null"
    >
      <template v-if="selectedCarouselItem.isMap">
        <template slot="body">
          <iframe
            class="map-iframe"
            src="https://www.google.com/maps/d/u/2/embed?mid=1Oss3YLq6omijUqYi0Ruo4ZL3eH7KSLM-"
          ></iframe>
        </template>
      </template>

      <template v-else>
        <h3 slot="header">{{ selectedCarouselItem.nazwa }}</h3>
        <template slot="body">
          <p
            v-for="(paragraph, index) in selectedCarouselItem.akapity"
            :key="index"
            class="modal-content"
            v-html="paragraph"
          />
          <ul v-if="selectedCarouselItem.linki">
            <li
              v-for="(link, index) in selectedCarouselItem.linki"
              :key="index"
            >
              <a :href="link.adres" v-html="link.tytul"></a>
            </li>
          </ul>
        </template>
      </template>
    </modal>

    <div
      class="carousel"
      @mouseover="stopContinousShift"
      @mouseout="startContinousShift"
    >
      <transition name="offer-component-fade">
        <carousel-item
          :key="selectedIndex"
          :title="carouselItems[selectedIndex].nazwa"
          :subtitle="carouselItems[selectedIndex].skrot"
          :actionText="carouselItems[selectedIndex].actionText"
          :href="carouselItems[selectedIndex].href"
          :image="carouselItems[selectedIndex].obraz"
          :background="carouselItems[selectedIndex].kolor_tla"
          :textTheme="carouselItems[selectedIndex].motyw_tekstu"
          :click="carouselItems[selectedIndex].click"
        ></carousel-item>
      </transition>
      <ul
        class="carousel__selectors"
        :theme="carouselItems[selectedIndex].motyw_tekstu"
      >
        <li
          v-for="(item, index) in carouselItems"
          :key="index"
          :class="[
            'carousel__selectors__selector',
            {
              'carousel__selectors__selector--active': index === selectedIndex,
            },
          ]"
          @click="selectedIndex = index"
        ></li>
      </ul>
    </div>
  </section>
</template>

<script>
import CarouselItem from "./CarouselItem";
import Modal from "../PromotionModal";
import axios from "axios";
import mapImage from "../../assets/carousel/mapa.jpg";
import vlineImage from "../../assets/carousel/vline.png";

let interval = null;

export default {
  components: {
    CarouselItem,
    Modal,
  },
  data() {
    return {
      showModal: false,
      customCarouselItems: [
        {
          nazwa: "Mapa zasięgu",
          skrot: "Sprawdź czy jesteśmy dostępni pod Twoim adresem!",
          kolor_tla: "#191919",
          actionText: "Zobacz mapę",
          obraz: mapImage,
          isMap: true,
          click: () => {
            this.showModal = true;
          },
        },
        {
          nazwa: "Internet, telewizja, telefon",
          skrot: "Poznaj wszystkie usługi Vline!",
          obraz: vlineImage,
          click: () => {
            this.$scrollTo("#about");
          },
        },
      ],
      standardCarouselItems: [],
      selectedIndex: 0,
    };
  },
  methods: {
    fetchPromotions() {
      axios
        .get(`./OFERTA/karuzela.json?timestamp=${new Date().getTime()}`)
        .then((resp) => {
          this.standardCarouselItems = resp.data.map((i) => {
            return {
              ...i,
              click: () => {
                this.showModal = true;
              },
            };
          });
        });
    },
    shift(value) {
      const carouselItemsCount = this.carouselItems.length;
      var newIndex = this.selectedIndex + value;
      if (newIndex < 0) {
        newIndex += carouselItemsCount;
      }
      this.selectedIndex = newIndex % carouselItemsCount;
    },
    startContinousShift() {
      interval = setInterval(() => {
        if (!this.showModal) {
          this.shift(1);
        }
      }, 4000);
    },
    stopContinousShift() {
      clearInterval(interval);
    },
  },
  computed: {
    carouselItems() {
      return [...this.customCarouselItems, ...this.standardCarouselItems];
    },
    selectedCarouselItem() {
      if (
        this.selectedIndex !== null &&
        this.carouselItems !== null &&
        this.carouselItems.length > this.selectedIndex
      ) {
        return this.carouselItems[this.selectedIndex];
      }
      return null;
    },
  },
  created() {
    this.fetchPromotions();
    this.startContinousShift();
  },
};
</script>

<style lang="scss">
@import "../../styles/_colors.scss";

.offer-component-fade-enter-active,
.offer-component-fade-leave-active {
  transition: all 0.4s ease;
}
.offer-component-fade-enter-active .carousel-item__container__details,
.offer-component-fade-leave-active .carousel-item__container__details {
  transition: all 0.4s ease;
}
.offer-component-fade-enter-active .carousel-item__container__image-container,
.offer-component-fade-leave-active .carousel-item__container__image-container {
  transition: all 0.4s ease;
}
/* .component-fade-leave-active below version 2.1.8 */
.offer-component-fade-enter,
.offer-component-fade-leave-to {
  opacity: 0;
}

.offer-component-fade-enter .carousel-item__container__details {
  transform: translateX(48px);
  // transform: scale(0.98, 0.98);
}

.offer-component-fade-leave-to .carousel-item__container__details {
  transform: translateX(-48px);
  // transform: scale(1.02, 1.02);
}

.offer-component-fade-enter .carousel-item__container__image-container {
  transform: translateX(16px);
  // transform: scale(0.98, 0.98);
}

.offer-component-fade-leave-to .carousel-item__container__image-container {
  transform: translateX(-16px);
  // transform: scale(1.02, 1.02);
}

.carousel {
  height: 512px;
  position: relative;
  background: linear-gradient(
    45deg,
    $colorPrimaryDarker 0,
    $colorPrimaryLighter 90%
  );
  overflow: hidden;

  &__selectors {
    $list: &;

    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    z-index: 100;

    &__selector {
      height: 6px;
      width: 32px;
      background-color: rgba(#fff, 0.1);
      border-radius: 50px;
      margin: 4px;
      transition: background-color 0.2s ease;
      cursor: pointer;

      #{ $list }[theme="ciemny"] & {
        background-color: rgba(#000, 0.1);
      }

      &:hover,
      &--active {
        background-color: rgba(#fff, 0.35);

        #{ $list }[theme="ciemny"] & {
          background-color: rgba(#000, 0.35);
        }
      }
    }
  }
}

.map-iframe {
  width: 100%;
  height: 512px;
}

// * {
//   box-sizing: border-box;
// }
</style>
