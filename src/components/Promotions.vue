<template>
  <section>
    <modal v-if="showModal && selectedPromotion" @close="showModal = false">
      <h3 slot="header">{{ selectedPromotion.nazwa }}</h3>
      <template slot="body">
        <p
          v-for="(paragraph, index) in selectedPromotion.akapity"
          :key="index"
          class="modal-content"
          v-html="paragraph"
        />
        <ul v-if="selectedPromotion.linki">
          <li v-for="(link, index) in selectedPromotion.linki" :key="index">
            <a :href="link.adres" v-html="link.tytul"></a>
          </li>
        </ul>
      </template>
    </modal>
    <div class="container">
      <h1>Promocje</h1>
      <div v-if="promotions && promotions.length != 0">
        <div class="promotions-container">
          <button class="angle left" @click="shift(-1)" />
          <button class="angle right" @click="shift(1)" />
          <transition
            v-if="selectedPromotion"
            name="promotion-fade"
            mode="out-in"
          >
            <div :key="selectedPromotionIndex" class="promotion-item">
              <!-- <template>{{ selectedPromotion.name }}</template> -->
              <img
                v-if="selectedPromotion.obraz"
                class="promotion-image"
                :src="selectedPromotion.obraz"
              />
              <h3 v-else>{{ selectedPromotion.nazwa }}</h3>
              <button class="show-modal-button" @click="showModal = true">
                Dowiedz się więcej
              </button>
            </div>
          </transition>
        </div>
        <ul class="promotion-selectors">
          <li v-for="(promotion, index) in promotions" :key="index">
            <span
              :class="{ active: index == selectedPromotionIndex }"
              @click="selectedPromotionIndex = index"
            />
          </li>
        </ul>
      </div>
      <div v-else class="no-promotions">
        <p>Niestety, aktualnie nie prowadzimy żadnych akcji promocyjnych :'(</p>
      </div>
    </div>
  </section>
</template>

<script>
import Modal from "./PromotionModal";
import axios from "axios";

export default {
  name: "Promotions",
  components: {
    Modal,
  },
  data() {
    return {
      promotions: [],
      showModal: false,
      selectedPromotionIndex: null,
    };
  },
  created() {
    this.fetchPromotions();
  },
  methods: {
    fetchPromotions() {
      var self = this;
      axios
        .get(`./OFERTA/promocje.json?timestamp=${new Date().getTime()}`)
        .then(function(resp) {
          self.promotions = resp.data;
          if ((self.promotions != null) & (self.promotions.length > 0)) {
            self.selectedPromotionIndex = 0;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    shift(value) {
      const promotionsCount = this.promotions.length;
      var newIndex = this.selectedPromotionIndex + value;
      if (newIndex < 0) {
        newIndex += promotionsCount;
      }
      this.selectedPromotionIndex = newIndex % promotionsCount;
    },
  },
  computed: {
    selectedPromotion() {
      if (
        this.selectedPromotionIndex != null &&
        this.promotions != null &&
        this.promotions.length > this.selectedPromotionIndex
      ) {
        return this.promotions[this.selectedPromotionIndex];
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";

section {
  background-color: #ebebeb;

  .promotion-fade-enter-active,
  .promotion-fade-leave-active {
    transition: all 0.2s ease;
  }
  /* .component-fade-leave-active below version 2.1.8 */
  .promotion-fade-enter,
  .promotion-fade-leave-to {
    opacity: 0;
  }

  .promotion-fade-enter {
    transform: translateX(8px);
    // transform: scale(0.98, 0.98);
  }

  .promotion-fade-leave-to {
    transform: translateX(-8px);
    // transform: scale(1.02, 1.02);
  }

  .promotions-container {
    position: relative;

    .promotion-item {
      margin: 0 32px;

      h3 {
        text-align: center;
        font-size: 2em;
      }
    }

    .angle {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      background: rgba(0, 0, 0, 0.05);
      border: none;
      border-radius: 32px;
      cursor: pointer;
      transition: background 0.2s ease;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }

      &:after {
        content: "";
        position: absolute;
        top: 11px;
        width: 10px;
        height: 10px;
        border: {
          style: solid;
          color: $colorText;
          width: 2px 0 0 2px;
        }
      }

      &.left {
        left: 0;
        &:after {
          left: 13px;
          transform: rotate(-45deg);
        }
      }

      &.right {
        right: 0;
        &:after {
          right: 13px;
          transform: rotate(135deg);
        }
      }
    }
  }

  ul.promotion-selectors {
    text-align: center;

    > li {
      list-style: none;
      margin: 0 4px;
      display: inline;

      > span {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid $colorPrimary;
        border-radius: 50%;
        cursor: pointer;
        transition: border-width 0.2s ease;

        &.active {
          border-width: 8px;
        }
      }
    }
  }

  .promotion-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
  }

  .show-modal-button {
    font-family: "Open Sans", sans-serif;
    color: $colorText;
    display: block;
    margin: 16px auto;
    padding: 8px 16px;
    background: rgba(0, 0, 0, 0.05);
    border: none;
    border-radius: 32px;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  p.modal-content {
    text-align: justify;
    color: rgba($colorText, 0.75);
    font-size: 0.875em;
    line-height: 1.75em;
    margin: 0.5em 0;
  }

  .no-promotions {
    p {
      text-align: center;
      font-size: 1.75em;
      font-weight: 300;
      color: $colorTextLighter;
    }
  }
}
</style>
