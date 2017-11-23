<template>
<div id="app">

  <PageMenu id="menu" :splashStyle="isSplashVisible" :menuHeight="menuHeight" :menuItems="menuItems" />

  <Splash id="splash" />
  <About id="about" />
  <Offer id="offer" />
  <Promotions id="promotions" />
  <News id="news" />
  <ContactUs id="contactUs"/>
  <Contact id="contact" ref="contact"/>
  <PageFooter id="footer" />

</div>
</template>

<script>
import Menu from './components/Menu'
import Splash from './components/Splash'
import About from './components/About'
import Offer from './components/Offer'
import Promotions from './components/Promotions'
import News from './components/News'
import ContactUs from './components/ContactUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default {
  name: 'app',
  data() {
    return {
      isSplashVisible: true,
      menuHeight: 96,
      menuItems: [{
          href: '#about',
          title: 'O Vline'
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
          href: '#contactUs',
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
    PageMenu: Menu,
    Splash,
    About,
    Offer,
    News,
    Promotions,
    ContactUs,
    Contact,
    PageFooter : Footer
  },
  methods: {
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
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    window.addEventListener('resize', this.updateResize);
  },
  created: function() {
    this.updateMenuStyle()
  },
 //  head: {
 //   meta: [
 //     // { name: 'application-name', content: 'Name of my application' },
 //     // { name: 'description', content: 'A description of the page', id: 'desc' }, // id to replace intead of create element
 //     // // ...
 //     // // Twitter
 //     // { name: 'twitter:title', content: 'Content Title' },
 //     // // with shorthand
 //     // { n: 'twitter:description', c: 'Content description less than 200 characters'},
 //     // // ...
 //     // // Google+ / Schema.org
 //     // { itemprop: 'name', content: 'Content Title' },
 //     // { itemprop: 'description', content: 'Content Title' },
 //     // // ...
 //     // // Facebook / Open Graph
 //     // { property: 'fb:app_id', content: '123456789' },
 //     // { property: 'og:title', content: 'Content Title' },
 //     // with shorthand
 //     { p: 'og:image', c: './assets/og_image.png' },
 //     // ...
 //   ]
 // }
}
</script>

<style src="./styles/reset.css"/>
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
  padding: 80px 16px;
  margin: 0 auto;
  box-sizing: content-box;

  > h1 {
    font-size: 2.25em;
    font-weight: 300;
    color: $colorPrimary;
    text-align: center;
  }
}
</style>
