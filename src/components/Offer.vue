<template>
<section>
  <div class="container">
    <h1>Oferta</h1>
    <ul>
      <li v-for="item in offerMenuItems">
        <a :class="{'active': actualOfferComponent == item.componentName}" @click="offerChangeView(item.componentName)">{{item.title}}</a>
      </li>
    </ul>
    <transition name="offer-component-fade" mode="out-in">
      <keep-alive>
        <component :is="actualOfferComponent"></component>
      </keep-alive>
    </transition>
  </div>
</section>
</template>

<script>
import axios from 'axios'

import Offer_Internet from '../components/Offer_Internet'
import Offer_TV from '../components/Offer_TV'
import Offer_Phone from '../components/Offer_Phone'

export default {
  name: 'Offer',
  data() {
    return {
      actualOfferComponent: 'Offer_Internet',
      offerMenuItems: [{
          componentName: 'Offer_Internet',
          title: 'Internet'
        },
        {
          componentName: 'Offer_TV',
          title: 'Telewizja'
        },
        {
          componentName: 'Offer_Phone',
          title: 'Telefon'
        }
      ]
    }
  },
  components: {
    'Offer_Internet': Offer_Internet,
    'Offer_TV': Offer_TV,
    'Offer_Phone': Offer_Phone
  },
  created: function() {},
  methods: {
    offerChangeView(componentName) {
      this.actualOfferComponent = componentName
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

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
