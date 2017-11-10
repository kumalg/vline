<template>
  <div id="menu" class="m1 menu" v-bind:class="active">
		<div id="menu-center">
      <!-- <nav v-bind:class="active" v-on:click.prevent> -->
    		<a id="logo-button" class="logo-button splash" href="#splash" v-on:click="makeActive('splash')"></a>
        <ul class="menu-sections">
  				<li><a href="#o_vline" class="o_vline" v-on:click="makeActive('o_vline')">O Vline</a>
  				</li>

  				<li><a href="#oferta" class="oferta" v-on:click="makeActive('oferta')">Oferta</a>
  				</li>

  				<li><a href="#promocje" class="promocje" v-on:click="makeActive('promocje')">Promocje</a>
  				</li>

  				<li><a href="#aktualnosci" class="aktualnosci" v-on:click="makeActive('aktualnosci')">Aktualności</a>
  				</li>

  				<li><a href="#kontakt" class="kontakt" v-on:click="makeActive('kontakt')">Kontakt</a>
  				</li>
  			</ul>
      <!-- </nav> -->
		</div>
	</div>
</template>

<script>
export default {
  name: 'UpperMenu',
  data() {
    return {
      active: 'splash',
      scrollPosition: null
    }
  },
  methods: {
    makeActive(item){
        this.active = item;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
      // console.log(this.scrollPosition)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<style lang="scss">
$menu-height: 96px;
$colorPrimary: #6b21d6;
$colorText: #292929;

.menu {
  width: 100%;
  height: $menu-height;
  position: fixed;
  background-color: #fff;
  box-shadow: 0 0 64px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.menu-splash {
  background-color: transparent;
  box-shadow: none;

  a {
    color: white !important;

    &:hover {
      background-color: white !important;
      color: $colorPrimary !important;
    }
  }
}

.logo-button {
  &.hide {
    display: none !important;
  }
}

.light-menu {
  width: 100%;
  height: $menu-height;
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  background-color: rgba(4, 180, 49, 0.6);
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#menu-center {
  //background-color: blue;
  max-width: 980px;
  height: $menu-height;
  margin: 0 auto;
  padding: 0 16px;

  > * {
    display: inline-block;
    margin-top: ($menu-height - 32px) / 2;
  }

  ul {
    //background-color: red;
    float: right;

    li {
      list-style: none;
      margin: 0;
      display: inline;
      //background-color: blue;

      a {
        //background-color: green;
        padding: 0 20px;
        height: 32px;
        display: inline-block;
        font-weight: 600;
        font-size: 0.75em;
        color: $colorText;
        text-decoration: none;
        line-height: 32px;
        border: none;
        border-radius: 16px;
        //background-color: transparent;
        transition: background-color 0.2s, color 0.2s;

        &:hover {
          background-color: rgba(0,0,0,.1);
        }
      }
    }
  }

  #logo-button {
    background: url("../assets/logo-menu.png") no-repeat center;
    height: 32px;
    width: 70px;
    border: none !important;
    padding: 0;
    border-radius: 0;
    //background: red;
  }
}

#menu.splash .splash,
#menu.o_vline .o_vline,
#menu.oferta .oferta,
#menu.promocje .promocje,
#menu.aktualnosci .aktualnosci,
#menu.kontakt .kontakt {
    color: #fff;
    background-color: $colorPrimary;
}
</style>
