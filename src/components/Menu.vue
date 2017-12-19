<template>
<div :class="['menu', {'menu-splash': splashStyle}]">
  <scrollactive id="menu-center" :offset="menuHeight" v-on:itemchanged="menuItemChanged">
    <a alt="logo" href="#splash" id="logo-button" class="scrollactive-item logo-button splash"></a>
    <div class="hamburger-menu navigation">
      <button id="nav-button" @click="navButtonClick" v-click-outside="hideExpandableMenu">
        <FontAwesomeIcon :icon="iconNav" class="nav-icon" />
      </button>
      <div :class="['menu-section', {'hide': expandableMenuHidden}]">
        <ul>
          <li v-for="item in menuItems" :key="item.href">
            <a :href="item.href" :class="{'scrollactive-item': !item.external}">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
  </scrollactive>
</div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";

export default {
  name: 'Menu',
  props: {
    splashStyle: Boolean,
    menuHeight: Number,
    menuItems: Array
  },
  data() {
    return {
      expandableMenuHidden: true,
    }
  },
  methods: {
    hideExpandableMenu() {
      this.expandableMenuHidden = true
    },
    navButtonClick() {
      this.expandableMenuHidden = !this.expandableMenuHidden
    },
    menuItemChanged(event, currentItem, lastActiveItem) {}
  },
  directives: {
    ClickOutside
  },
  components: {
    FontAwesomeIcon
  },
  computed: {
    iconNav() {
      return faBars;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/_variables.scss";

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
    z-index: 9999;
}

$hover-bg-color: rgba(255,255,255,0.1);

.menu-splash {
    background-color: transparent;
    box-shadow: none;

    #nav-button {
        color: white !important;

        &:hover {
            background-color: $hover-bg-color !important;
            // background-color: white !important;
            // color: $colorPrimary !important;
        }
    }

    .logo-button {
        display: none !important;
    }

    @media all and (min-width: 751px) {
        a {
            color: white !important;

            &:hover {
                background-color: $hover-bg-color !important;
                // background-color: white !important;
                // color: $colorPrimary !important;
            }
        }
    }
}

#menu-center {
    max-width: 960px;
    height: $menu-height;
    margin: 0 auto;
    padding: 0 16px;
    white-space: nowrap;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    transition: inherit;
     // > * {
    //   // display: inline-block;
    //   //margin-top: ($menu-height - 32px) / 2;
    // }
    .navigation {
        margin-left: auto;
    }

    ul {
        //margin-left: auto;
        //float: right;
        li + li {
            margin-left: 4px;
        }

        li {
            list-style: none;
            margin: 0;
            display: inline;
            -webkit-tap-highlight-color: transparent;

            a {
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
                transition: background-color 0.2s, color 0.2s;

                &:hover {
                    background-color: rgba(0,0,0,.1);
                }

                &.is-active {
                    color: white !important;
                    background-color: $colorPrimary !important;
                }
            }
        }
    }

    #logo-button {
        background: url("../assets/logo-menu.png") no-repeat center;
        height: 32px;
        width: 70px;
        border: none !important;
        margin: 0 16px;
        padding: 0;
        border-radius: 0;
        transition: transform .3s ease, margin .3s ease;
    }
}
$nav-button-height: 40px;

#nav-button {
    display: none;
    color: $colorText;
    margin: ($menu-height-small - $nav-button-height) / 2;
    margin-right: 0;
    height: $nav-button-height;
    width: $nav-button-height;
    background-color: transparent;
    transition: background-color 0.2s, color 0.2s;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    border: {
        radius: $nav-button-height / 2;
        style: none;
    }

    &:hover {
        background-color: rgba(0,0,0,.1);
    }
}

@media all and (max-width: 750px) {
    #menu-center,
    .menu {
        height: $menu-height-small;
    }

    #logo-button {
        transform: scale(0.75);
        margin-left: 0 !important;
    }

    .hamburger-menu {
        text-align: right;
        align-self: flex-start;

        #nav-button {
            display: initial;
        }

        .menu-section {
            position: fixed;
            right: 0;
            width: 100%;
            top: $menu-height-small;
            background-color: #fff;
            box-shadow: 0 0 64px 0 rgba(0, 0, 0, 0.15);
            padding: 16px 32px;
            display: block;
            transition: visibility 0.2s, opacity 0.2s, transform 0.2s ease;

            &.hide {
                opacity: 0;
                transform: translateY(-16px);
                visibility: hidden;
            }
            ul {
                li {
                    margin: 8px 0 !important;
                    display: block !important;
                    text-align: center;

                    a {
                        width: 100%;
                        max-width: 320px;
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>
