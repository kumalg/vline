<template>
  <div id="app">
    <Menu/>
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->

    <section id="splash">
      <h6>Internet + Telewizja + Telefon</h6>
    </section>

    <section id="o_vline">
      <div id="app">
        {{ message }}
      </div>
    </section>

    <section id="oferta">
    </section>

    <section id="promocje">
    </section>

    <section id="aktualnosci">
    </section>

    <section id="kontakt">
    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Menu from './components/Menu'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Menu
  }
}
</script>

<style src="./reset.css"></style>
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
