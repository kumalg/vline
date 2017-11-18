<template>
<div>
  <div class="container-offer-inner">
    <div class="nav">
      <h1>Długość trwania oferty:</h1>
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
    <transition name="offer-fade" mode="out-in">
      <div v-bind:key="actualIndex" class="items">
        <div class="item list-item" v-for="item in items[actualIndex].items">
          <div class="title">
            {{item.title}}
          </div>
          <div class="subtitle">
            {{item.subtitle}}
          </div>
          <div class="more-info" v-if="item.moreInfo">
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
  <div class="files" v-if="links">
    <h1>Do pobrania:</h1>
    <ul>
      <li v-for="link in links">
        <a :href="link.href">
          <i class="fa fa-file-pdf-o icon" aria-hidden="true"></i><p>{{link.title}}</p>
        </a>
      </li>
    </ul>
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
      items: null,
      links: null,
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
      axios.get('/static/api/offer_internet_links.json')
        .then(function(resp) {
          self.links = resp.data
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

.files h1,
.nav h1 {
    font-size: 1.125em;
    color: $colorPrimary;
    font-family: inherit;
    // font-family: 'Open Sans';
}

.files {
    margin-top: 16px;

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
                color: black;

                &:hover {
                    color: $colorPrimary;
                }
            }
        }
    }
}

.container-offer-inner {
    // background-color: blue;
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
        // flex-direction: column;
        padding-bottom: 16px;
        // background: blue;

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

            &.active, &:hover {
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
        // background-color: red;

        .item {
            width: calc(33.33% - 16px);
            min-width: 192px;
            padding: 32px;
            margin: 0 8px 16px;
            text-align: center;
            border: {
                style: solid;
                width: 1px;
                radius: 3px;
                color: rgba(0,0,0,.25);
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
            width: calc(50% - 16px) !important;
        }
    }

    @media all and (max-width: 700px) {
        .item {
            width: calc(100% - 16px) !important;
        }
    }

    @media all and (max-width: 500px) {
        flex-direction: column;

        .item {
            width: 100% !important;
            margin: {
                left: 0 !important;
                right: 0 !important;
            }
        }

        .nav {
            text-align: center;
        }
    }
}
</style>
