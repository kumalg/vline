<template>
<div>
  <div class="container-offer-inner">
    <div class="nav">
      <h2>Czas trwania oferty:</h2>
      <ul>
        <li v-for="(item, index) in items">
          <button :class="{'active': actualIndex == index}" @click="agreementLengthItemClick(index)">
            <div class="dot"/><p>{{item.agreement_length}}</p>
          </button>
        </li>
      </ul>
    </div>
    <transition name="offer-fade" mode="out-in">
      <ul v-bind:key="actualIndex" class="items" v-if="items">
        <li class="item list-item" v-for="item in items[actualIndex].items">
          <h2>{{item.title}}</h2>
          <p class="subtitle">{{item.subtitle}}</p>
          <ul class="more-info" v-if="item.moreInfo">
            <li>
              <p v-for="info in item.moreInfo">{{info}}</p>
            </li>
          </ul>
          <h3>{{item.cost}} zł</h3>
        </li>
      </ul>
    </transition>
  </div>
  <div class="files" v-if="links">
    <h2>Do pobrania:</h2>
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

.files h2,
.nav h2 {
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
    }

    .offer-fade-leave-to {
        transform: translateX(-8px);
    }

    .nav {
        flex: 1;
        min-width: 210px;
        padding-bottom: 16px;

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

    .items {
        flex: 3;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;

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

            h2 {
                font-size: 1.5em;
                color: $colorPrimary;
            }

            h3 {
                font-size: 1.125em;
                font-weight: 600;
                margin-top: 32px;
                color: $colorPrimary;
            }

            p {
                font-size: 0.75em;
                font-weight: 600;
            }

            .subtitle {
                margin-top: 8px;
            }

            .more-info {
                margin-top: 16px;
                padding: 16px 0;
                border: {
                    style: solid;
                    width: 1px 0;
                    color: rgba(0,0,0,.25);
                }
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
