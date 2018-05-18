<template>
  <li :class="[{'wyrozniony': item.wyrozniony}, 'item list-item']">
    <a target="_blank" :href="item.link">
      <div class="tooltip" v-if="item.wyrozniony">
          <img src="../assets/offer/mark.svg" class="img">
          <span class="tooltiptext">Najlepszy&nbsp;wybór</span>
      </div>
      <h2>{{item.tytul}}</h2>
      <p class="podtytul">{{item.podtytul}}</p>
      <ul :class="['more-info', {'without-bottom-border': !item.cena}]" v-if="item.wiecej_info && item.wiecej_info.length > 0">
        <li v-for="(info, index) in item.wiecej_info" :key="index">{{info}}</li>
      </ul>
      <template v-if="item.cena">
        <template v-if="item.new_cena">
          <h3 class="old">&nbsp;{{item.cena}}&nbsp;</h3>
          <h3 class="promo">{{item.new_cena}}</h3>
        </template>
        <template v-else>
          <h3>{{item.cena}}</h3>
        </template>
      </template>
    </a>
  </li>
</template>

<script>
export default {
  name: "Menu",
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";

.item {
  min-width: 192px;
  margin: 8px 0;
  text-align: center;
  transition: box-shadow .2s ease;
  border: {
    style: solid;
    width: 1px;
    radius: 3px;
    color: $colorBorder;
  }

  > a {
    display: block;
    color: inherit;
    padding: 32px;
  }

  &:hover {
    box-shadow: 0 8px 16px rgba($colorPrimary, 0.25);
  }

  h2 {
    font-size: 1.5em;
    color: $colorPrimary;
  }

  h3 {
    font-size: 1.125em;
    // font-weight: 600;
    // font-weight: 600;
    margin-top: 32px;
    color: $colorPrimary;
  }

  h3.promo {
    margin-top: 0;
  }

  h3.old {
    margin-top: 19px;
    text-decoration: line-through;
    opacity: 0.5;
    line-height: 0.8125em;
    font-size: 0.8125em;
  }

  p, ul.more-info > li {
    font-size: 0.75em;
    font-weight: 600;
  }

  .podtytul {
    margin-top: 8px;
  }

  .more-info {
    margin-top: 16px;
    padding: 16px 0;
    border: {
      style: solid;
      width: 1px 0;
      color: rgba(0, 0, 0, 0.25);
    }

    &.without-bottom-border {
      border-bottom-width: 0;
      padding-bottom: 0;
    }
  }

  &.wyrozniony {
    background: linear-gradient(
      45deg,
      $colorPrimaryDarker 0,
      $colorPrimaryLighter 90%
    );
    box-shadow: 0 8px 16px rgba($colorPrimary, 0.25);
    border-width: 0;

    > a {
      padding: 33px;

      > * {
        color: white !important;
      }
    }

    &:hover {
      box-shadow: 0 8px 16px rgba($colorPrimary, 0.5);
    }

    h2,
    h3 {
      font-weight: 300;
    }

    p, ul.more-info > li {
      opacity: 0.95;
    }

    .more-info {
      border-color: rgba(255, 255, 255, 0.25);
    }

    $tooltipBackground: rgba(0, 0, 0, 0.75);
    .tooltip {
      top: -33px;
      right: -9px;
      position: relative;
      text-align: right;

      .img {
        position: absolute;
      }

      .tooltiptext {
        font-size: 0.8125em;
        visibility: hidden;
        max-width: 150px;
        background-color: $tooltipBackground;
        color: #fff;
        text-align: center;
        border-radius: 3px;
        padding: 6px 12px;
        position: absolute;
        z-index: 1;
        bottom: 5px;
        right: -18px;
        transform: translateY(-8px);
        display: block;
        opacity: 0;
        transition: all 0.3s ease;

        &::after {
          content: "";
          position: absolute;
          top: 100%;
          right: 5px;
          border-width: 5px;
          border-style: solid;
          border-color: $tooltipBackground transparent transparent transparent;
        }
      }

      &:hover .tooltiptext {
        visibility: visible;
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>
