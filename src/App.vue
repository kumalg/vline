<template>
<div id="app">
  <div id="menu" class="m1 menu" :class="{'menu-splash': isSplashVisible}">
    <scrollactive id="menu-center" :offset="menuHeight" v-on:itemchanged="yourFunction">
      <a id="logo-button" class="scrollactive-item logo-button splash" href="#splash"></a>
      <div class="hamburger-menu navigation">
        <button id="nav-button" @click="hamburgerButtonClick" v-click-outside="hideHamburgerMenu"><i class="fa fa-bars nav-icon" aria-hidden="true"></i></button>
        <div :class="['menu-section', {'hide': hamburgerMenuHidden}]">
          <ul>
            <li v-for="item in menuItems">
              <a :href="item.href" :class="{'scrollactive-item': !item.external}">{{item.title}}</a>
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
  <Contact id="contact" />
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
      hamburgerMenuHidden: true,
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
    hideHamburgerMenu() {
      this.hamburgerMenuHidden = true
    },
    hamburgerButtonClick() {
      this.hamburgerMenuHidden = !this.hamburgerMenuHidden
    },
    updateMenuStyle() {
      this.isSplashVisible = window.scrollY < window.innerHeight - this.menuHeight
    },
    updateScroll() {
      this.updateMenuStyle()
    },
    updateResize() {
      this.updateScroll()
    },
    yourFunction(event, currentItem, lastActiveItem) {}
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
$menu-height: 96px;
$colorPrimary: #6b21d6;
$colorText: #292929;

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
  padding: 80px 0;
  margin: 0 auto;
}

.heading {
  font-size: 2.25em;
  font-weight: 300;
  color: $colorPrimary;
  text-align: center;
}
</style>
