<template>
  <div id="app">
    <!-- <UpperMenu/> -->
    <div id="menu" ref="menu" class="m1 menu" :class="[active, {'menu-splash': isSplashVisible}]">
      <div id="menu-center">
          <a id="logo-button" class="logo-button splash" href="#splash" @click="makeActive"></a>
          <ul class="menu-sections">
            <li v-for="item in menuItems">
              <a :href="'#' + item.name" :class="item.name" @click="makeActive">{{item.title}}</a>
            </li>
          </ul>
      </div>
    </div>

    <section id="splash" ref="splash">
      <h6>Internet + Telewizja + Telefon</h6>
    </section>

    <section id="o_vline" ref="o_vline">
    </section>

    <section id="oferta" ref="oferta">
    </section>

    <section id="promocje" ref="oferta">
    </section>

    <section id="aktualnosci" ref="aktualnosci">
    </section>

    <section id="kontakt" ref="kontakt">
    </section>
  </div>
</template>

<script>
// import UpperMenu from './components/UpperMenu'

export default {
  name: 'app',
  data() {
    return {
      isSplashVisible: true,
      active: 'splash',
      scrollPosition: null,
      menuItems: [
        {name:'o_vline', title: 'OVH uj'},
        {name:'oferta', title: 'Oferta'},
        {name:'promocje', title: 'Promocje'},
        {name:'aktualnosci', title: 'Aktualności'},
        {name:'kontakt', title: 'Kontakt'}
      ]
    }
  },
  components: {
  },
  methods: {
    makeActive(item){
      const itemName = item.target.getAttribute('class');
      console.log(itemName)
      this.active = itemName
    },
    updateMenuStyle() {
      this.isSplashVisible = this.scrollPosition <  this.$refs.splash.offsetTop + this.$refs.splash.offsetHeight - this.$refs.menu.offsetHeight
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
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
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

#o_vline {
  background-color: #ebebeb;
  height: 100vh;
  width: 100%;
}

#oferta {
  background-color: #fff;
  height: 100vh;
  width: 100%;
}

#promocje {
  background-color: #ebebeb;
  height: 640px;
  width: 100%;
}

#aktualnosci {
  background-color: #fff;
  height: 640px;
  width: 100%;
}

#kontakt {
  background-color: #121212;
  height: 320px;
  width: 100%;
}

</style>
