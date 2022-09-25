<template>
  <div id="app">
    <PageMenu
      id="menu"
      :splashStyle="isSplashVisible"
      :menuHeight="menuHeight"
      :menuItems="menuItems"
    />

    <!-- <Splash id="splash" /> -->
    <Carousel id="carousel" />
    <About id="about" />
    <Offer id="offer" />
    <!-- <Promotions id="promotions" /> -->
    <News id="news" />
    <ContactUs id="contactUs" />
    <Contact id="contact" ref="contact" />
    <PageFooter id="footer" />
  </div>
</template>

<script>
import Menu from "./components/Menu";
// import Splash from './components/Splash'
import Carousel from "./components/carousel/Carousel";
import About from "./components/About";
import Offer from "./components/Offer";
// import Promotions from './components/Promotions'
import News from "./components/News";
import ContactUs from "./components/ContactUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default {
  name: "app",
  data() {
    return {
      isSplashVisible: true,
      menuHeight: this.getNewMenuHeight(),
      menuItems: [
        {
          href: "#carousel",
          title: "Promocje",
        },
        {
          href: "#about",
          title: "O Vline",
        },
        {
          href: "#offer",
          title: "Oferta",
        },
        {
          href: "#news",
          title: "Aktualności",
        },
        {
          href: "#contactUs",
          title: "Kontakt",
        },
      ],
    };
  },
  components: {
    PageMenu: Menu,
    // Splash,
    Carousel,
    About,
    Offer,
    News,
    // Promotions,
    ContactUs,
    Contact,
    PageFooter: Footer,
  },
  methods: {
    getNewMenuHeight() {
      return window.innerWidth <= 750 ? 64 : 96;
    },
    updateMenuStyle() {
      this.isSplashVisible =
        window.scrollY < window.innerHeight - this.menuHeight;
    },
    updateScroll() {
      this.updateMenuStyle();
    },
    updateResize() {
      this.menuHeight = this.getNewMenuHeight();
      this.updateScroll();
    },
  },
  mounted() {
    // window.addEventListener('scroll', this.updateScroll)
    // window.addEventListener('resize', this.updateResize)
  },
  created: function() {
    // this.updateMenuStyle()
  },
};
</script>

<style src="./styles/reset.css"></style>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap&subset=latin-ext");

@import "./styles/_colors.scss";
@import "./styles/_variables.scss";

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  color: $colorText;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

section {
  width: 100%;
}

.container {
  max-width: 960px;
  padding: 80px 16px;
  margin: 0 auto;
  box-sizing: content-box;

  > h1 {
    font-size: 2.25em;
    font-weight: 300;
    color: $colorPrimary;
    text-align: center;
    margin-bottom: 32px;
  }
}
</style>
