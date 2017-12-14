<template>
<div>
  <div>
    <ul class="info-items">
      <li class="info-item">
        <img src="../assets/about/tv.svg" />
        <h3>Najbogatszy wybór kanałów</h3>
        <p>
          Blisko 250 kanałów telewizyjnych, z czego aż ponad 120 w jakości HD! Kanały zostały podzielone na 4 pakiety. Dodatkowo - opcje premium, które zadowolą każdego widza.
        </p>
      </li>
      <li class="info-item">
        <img src="../assets/about/tv.svg" />
        <h3>Na kilku ekranach jednocześnie</h3>
        <p>
          Oglądaj swoje ulubione programy, transmisje sportowe i filmy – kiedy chcesz i na czym tylko chcesz.
        </p>
      </li>
      <li class="info-item">
        <img src="../assets/about/tv.svg" />
        <h3>Krystaliczna jakość obrazu</h3>
        <p>
          Twoje łącze światłowodowe może zapewnić Ci niesamowite wrażenia z oglądania programów w jakości Full HD.
        </p>
      </li>
      <li class="info-item">
        <img src="../assets/about/tv.svg" />
        <h3>Multimedialny dekoder</h3>
        <p>
          Możesz nagrywać, przewijać i zatrzymywać swoje ulubione programy - dzięki usłudze domowej nagrywarki. Możesz też obejrzeć swoje ulubione audycje nawet 3 dni do tyłu.
        </p>
      </li>
    </ul>
  </div>
  <div class="container-offer-inner">
    <h2 class="package-title">Pakiety</h2>
    <ul class="items" v-if="items">
      <li class="item list-item" v-for="item in items">
        <h2>{{item.title}}</h2>
        <!-- <p class="subtitle">{{item.subtitle}}</p> -->
        <ul class="more-info" v-if="item.moreInfo">
          <li>
            <p v-for="info in item.moreInfo">{{info}}</p>
          </li>
        </ul>
        <h3>od {{item.cost}} zł</h3>
      </li>
    </ul>
  </div>
  <div class="files" v-if="links">
    <h2>Do pobrania:</h2>
    <ul>
      <li v-for="link in links">
        <a target="_blank" :href="link.href">
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
  name: 'Offer_TV',
  data() {
    return {
      items: null,
      links: null,
    }
  },
  created: function() {
    this.fetchTVOffer()
  },
  methods: {
    fetchTVOffer() {
      var self = this;
      axios.get('/static/api/offer_tv.json')
        .then(function(resp) {
          self.items = resp.data
        })
        .catch(function(error) {
          console.log(error);
        });
      axios.get('/static/api/offer_tv_links.json')
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

.info-items {
    // flex: 3;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    .info-item {
        width: calc(50% - 16px);
        margin-bottom: 32px;

        h3 {
          font-size: 1.125em;
          // color: $colorPrimary;
          margin: 0 0 16px 0 ;
        }

        p {
            // text-align: justify;
            opacity: 0.75;
            font-size: 0.875em;
            line-height: 1.75em;
        }
    }
}

@media all and (max-width: 720px) {
    .info-item {
        width: 100% !important;
        text-align: center;
        p {
          max-width: 460px;
          margin: auto;
        }
    }
}

.package-title {
  color: $colorPrimary;
  font-size: 1.75em;
  font-weight: 400;
  text-align: center;
  margin: 32px 0;
}

.items {
    // flex: 3;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    .item {
        // color: $colorText;
        width: calc(25% - 12px);
        min-width: 192px;
        padding: 32px;
        margin: 8px 0;
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

@media all and (max-width: 900px) {
    .item {
        width: calc(50% - 8px) !important;
    }
}

@media all and (max-width: 470px) {
    .item {
        width: 100% !important;
    }
}

.files {
    margin-top: 32px;

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
                color: $colorText;

                &:hover {
                    color: $colorPrimary;
                }
            }
        }
    }
}
</style>
