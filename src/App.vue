<template>
<div id="app">
  <div id="menu" ref="menu" class="m1 menu" :class="{'menu-splash': isSplashVisible}">
    <scrollactive id="menu-center" :offset="96">
      <a id="logo-button" class="scrollactive-item logo-button splash" href="#splash"></a>
      <div class="hamburger-menu navigation">
        <button id="nav-button" @click="navButtonClick" v-click-outside="hideMenu"><i class="fa fa-bars nav-icon" aria-hidden="true"></i></button>
        <div :class="['menu-section', {'hide': menuHidden}]">
          <ul>
            <li v-for="item in menuItems">
              <a :href="item.href" :class="{'scrollactive-item': !item.external}">{{item.title}}</a>
            </li>
          </ul>
        </div>
      </div>
    </scrollactive>
  </div>

  <section id="splash" ref="splash">
    <img src="./assets/logo_white.svg" id="logo" />
    <h6>Internet &nbsp;&nbsp; + &nbsp;&nbsp; Telewizja &nbsp;&nbsp; + &nbsp;&nbsp; Telefon</h6>
  </section>

  <section id="o_vline" ref="o_vline">
  </section>

  <section id="oferta" ref="oferta">
    <div class="container">
      <h1 class="heading">Oferta</h1>
      <ul>
        <li>
          <a class="active">Internet</a>
        </li>
        <li>
          <a>Telewizja</a>
        </li>
        <li>
          <a>Telefon</a>
        </li>
      </ul>
    </div>
  </section>

  <section id="promocje" ref="promocje">
    <div class="container">
      <h1 class="heading">Promocje</h1>
    </div>
  </section>

  <Aktualnosci id="aktualnosci" ref="aktualnosci" />

  <section id="kontakt" ref="kontakt">
  </section>

  <section id="stopka" ref="stopka">

  </section>
</div>
</template>

<script>
import Aktualnosci from './components/Aktualnosci'
import ClickOutside from 'vue-click-outside'

export default {
  name: 'app',
  data() {
    return {
      isSplashVisible: true,
      scrollPosition: null,
      menuHidden: true,
      menuItems: [{
          href: '#o_vline',
          title: 'O Vline',
        },
        {
          href: '#oferta',
          title: 'Oferta'
        },
        {
          href: '#promocje',
          title: 'Promocje'
        },
        {
          href: '#aktualnosci',
          title: 'Aktualności'
        },
        {
          href: '#kontakt',
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
    Aktualnosci
  },
  methods: {
    // makeActive(item){
    //   const itemName = item.target.getAttribute('class');
    //   console.log(itemName)
    //   this.active = itemName
    // },
    hideMenu() {
      this.menuHidden = true
    },
    navButtonClick() {
      this.menuHidden = !this.menuHidden
    },
    updateMenuStyle() {
      this.isSplashVisible = this.scrollPosition < this.$refs.splash.offsetTop + this.$refs.splash.offsetHeight - this.$refs.menu.offsetHeight
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
      this.updateMenuStyle()
    },
    updateResize() {
      this.updateScroll()
    }
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

<style src="./styles/reset.css"></style>
<style src="./styles/_menu.scss" lang="scss"></style>
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
  // color: #2c3e50;
  // margin-top: 60px;
}


#splash {
  background-color: $colorPrimary;
  background: url("./assets/splash-bg.jpg") no-repeat center/cover;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
  }

  h6 {
    font-size: 2em;
    font-weight: 300;
  }
}

#logo {
  margin-bottom: 80px;
}

#o_vline {
  background-color: #ebebeb;
  height: 100vh;
  width: 100%;
}

#oferta {
  background-color: #fff;
  height: 100vh;
  width: 100%;

  ul {
    margin: 32px 0 64px 0;
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

#promocje {
  background-color: #ebebeb;
  height: 640px;
  width: 100%;
}

#kontakt {
  background-color: #121212;
  height: 320px;
  width: 100%;
}

.container {
  max-width: 960px;
  padding-top: 80px;
  margin: 0 auto;
}

.heading {
  font-size: 2.25em;
  font-weight: 300;
  color: $colorPrimary;
  text-align: center;
}
</style>
