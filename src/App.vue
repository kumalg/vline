<template>
<div id="app">

  <div id="menu" :class="['menu', {'menu-splash': isSplashVisible}]">
    <scrollactive id="menu-center" :offset="menuHeight" v-on:itemchanged="menuItemChanged">
      <a href="#splash" id="logo-button" class="scrollactive-item logo-button splash"></a>
      <div class="hamburger-menu navigation">
        <button id="nav-button" @click="navButtonClick" v-click-outside="hideExpandableMenu">
          <i class="fa fa-bars nav-icon" aria-hidden="true"></i>
        </button>
        <div :class="['menu-section', {'hide': expandableMenuHidden}]">
          <ul>
            <li v-for="item in menuItems">
              <a :href="item.href" :class="{'scrollactive-item': !item.external}">
                {{item.title}}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </scrollactive>
  </div>

  <Splash id="splash" />
  <About id="about" />
  <Offer id="offer" />
  <Promotions id="promotions" />
  <News id="news" />
  <Contact id="contact" ref="contact"/>
  <section id="footer" />

</div>
</template>

<script>
import Splash from './components/Splash'
import About from './components/About'
import Offer from './components/Offer'
import Promotions from './components/Promotions'
import News from './components/News'
import Contact from './components/Contact'

import ClickOutside from 'vue-click-outside'

export default {
  name: 'app',
  data() {
    return {
      isSplashVisible: true,
      expandableMenuHidden: true,
      menuHeight: 96,
      menuItems: [{
          href: '#about',
          title: 'O Vline',
        },
        {
          href: '#offer',
          title: 'Oferta'
        },
        {
          href: '#promotions',
          title: 'Promocje'
        },
        {
          href: '#news',
          title: 'Aktualności'
        },
        {
          href: '#contact',
          title: 'Kontakt'
        },
        {
          href: 'https://poczta.vline.net.pl/src/login.php',
          external: true,
          title: 'Panel klienta'
        }
      ]
    }
  },
  components: {
    Splash,
    About,
    Offer,
    News,
    Promotions,
    Contact
  },
  methods: {
    hideExpandableMenu() {
      this.expandableMenuHidden = true
    },
    navButtonClick() {
      this.expandableMenuHidden = !this.expandableMenuHidden
    },
    updateMenuStyle() {
      this.isSplashVisible = window.scrollY < window.innerHeight - this.menuHeight
    },
    updateScroll() {
      this.updateMenuStyle()
      // var contact = this.$refs['contact'].$el
      // window.pageYOffset >= this.getOffsetTop(target) - this.offset
      //console.log('window.pageYOffset: ' + window.pageYOffset)
      //console.log('contact.offsetTop: ' + contact.offsetTop)
      //console.log('window.scrollTop + window.height: ' + (window.pageYOffset + window.innerHeight))
    //  console.log(this.$el.offsetHeight)
    },
    updateResize() {
      this.updateScroll()
    },
    menuItemChanged(event, currentItem, lastActiveItem) {}
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    window.addEventListener('resize', this.updateResize);
  },
  created: function() {
    this.updateMenuStyle()
  },
  directives: {
    ClickOutside
  }
}
</script>

<style src="./styles/reset.css"/>
<style src="./styles/_menu.scss" lang="scss"/>
<style lang="scss">
@import './styles/_colors.scss';
@import "./styles/_variables.scss";

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
}

#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; // text-align: center;
}

.container {
  max-width: 960px;
  padding: 80px 8px;
  margin: 0 auto;
}

.heading {
  font-size: 2.25em;
  font-weight: 300;
  color: $colorPrimary;
  text-align: center;
}
</style>
