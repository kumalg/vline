<template>
<div>
  <div class="nav">
    <div class="title">
      Długość trwania oferty:
    </div>
    <ul>
      <li v-for="(item, index) in items">
        <button :class="{'active': actualIndex == index}" @click="agreementLengthItemClick(index)">
          <div class="dot"/><p>
            {{item.agreement_length}}
          </p>
        </button>
      </li>
    </ul>
  </div>
  <div class="items">
    <transition name="offer-fade" mode="out-in">
      <div v-bind:key="actualIndex">        
        <div class="item list-item" v-for="item in items[actualIndex].items">
          <div class="title">
            {{item.title}}
          </div>
          <div class="subtitle">
            {{item.subtitle}}
          </div>
          <div class="more-info" v-if="item.moreInfo != null">
            <div v-for="info in item.moreInfo">
              {{info}}
            </div>
          </div>
          <div class="cost">
            {{item.cost}} zł
          </div>
        </div>
      </div>
    </transition>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Offer_Internet',
  data() {
    return {
      actualIndex: 0,
      items: []
    }
  },
  created: function() {
    this.fetchInternetOffer()
  },
  methods: {
    agreementLengthItemClick(index) {
      this.actualIndex = index
    },
    fetchInternetOffer() {
      var self = this;
      axios.get('/static/api/offer_internet.json')
        .then(function(resp) {
          self.items = resp.data
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

div {
    display: flex;
    width: 100%;


        .offer-fade-enter-active,
        .offer-fade-leave-active {
            transition: all 0.2s ease;
        }
        /* .component-fade-leave-active below version 2.1.8 */
        .offer-fade-enter,
        .offer-fade-leave-to {
            opacity: 0;
        }

        .offer-fade-enter {
            transform: translateX(8px);
            // transform: scale(0.98, 0.98);
        }

        .offer-fade-leave-to {
            transform: translateX(-8px);
            // transform: scale(1.02, 1.02);
        }

    .nav {
        flex: 1;
        min-width: 210px;
        flex-direction: column;
        padding-bottom: 16px;

        .title {
            font-size: 1.125em;
            color: $colorPrimary;
            font-family: inherit;
        }

        ul {
            margin-top: 16px;
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

            &.active {
                color: $colorPrimary;
                .dot {
                    background-color: $colorPrimary;
                }
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 4px;
                display: inline-block;
                transition: background-color 0.3s ease;
            }
            p {
                margin-left: 4px;
                display: inline;
            }
        }
    }

    .items {
        flex: 3;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;

        .item {
            width: 31%;
            min-width: 192px;
            padding: 32px;
            flex-direction: column;
            margin: 0 8px 16px;
            text-align: center;
            border: {
                style: solid;
                width: 1px;
                radius: 3px;
                color: rgba(0,0,0,.25);
            }

            * {
                display: block;
            }

            .title {
                font-size: 1.5em;
                color: $colorPrimary;
            }

            .subtitle {
                margin-top: 8px;
                font-size: 0.75em;
                font-weight: 600;
            }

            .more-info {
                margin-top: 16px;
                padding: 16px 0;
                font-size: 0.75em;
                font-weight: 600;
                border: {
                    style: solid;
                    width: 1px 0;
                    color: rgba(0,0,0,.25);
                }
            }

            .cost {
                margin-top: 32px;
                font-size: 1.125em;
                font-weight: 600;
                color: $colorPrimary;
            }
        }
    }

    @media all and (max-width: 992px) {
        .item {
            width: 45% !important;
        }
    }

    @media all and (max-width: 700px) {
        .item {
            width: 95% !important;
        }
    }

    @media all and (max-width: 500px) {
        flex-direction: column;

        .nav {
            text-align: center;
        }
    }
}
</style>
