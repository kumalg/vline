<template>
  <li :class="[{'marked': item.marked}, 'item list-item']">
    <div class="tooltip" v-if="item.marked">
        <img src="../assets/offer/mark.svg" class="img">
        <span class="tooltiptext">Najlepszy&nbsp;wybór</span>
    </div>
    <h2>{{item.title}}</h2>
    <p class="subtitle">{{item.subtitle}}</p>
    <ul class="more-info" v-if="item.more_info">
      <li>
        <p v-for="(info, index) in item.more_info" :key="index">{{info}}</p>
      </li>
    </ul>
    <template v-if="item.new_cost">
      <h3 class="old">&nbsp;{{item.cost}}&nbsp;</h3>
      <h3 class="promo">{{item.new_cost}}</h3>
    </template>
    <template v-else>
      <h3>{{item.cost}}</h3>
    </template>
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
$tooltipBackground: rgba(0, 0, 0, 0.75);

.tooltip {
  top: -32px;
  right: -8px;
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

.item {
  min-width: 192px;
  padding: 32px;
  margin: 8px 0;
  text-align: center;
  border: {
    style: solid;
    width: 1px;
    radius: 3px;
    color: rgba(0, 0, 0, 0.25);
  }

  h2 {
    font-size: 1.5em;
    color: $colorPrimary;
  }

  h3 {
    font-size: 1.125em;
    font-weight: 600;
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

  p {
    font-size: 0.75em;
    font-weight: 600;
  }

  .subtitle {
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
  }

  &.marked {
    background: linear-gradient(
      45deg,
      $colorPrimaryDarker 0,
      $colorPrimaryLighter 90%
    );
    box-shadow: 0 8px 32px rgba($colorPrimary, 0.25);
    border-width: 0;

    > * {
      color: white !important;
    }

    h2,
    h3 {
      font-weight: 300;
    }

    p {
      opacity: 0.95;
    }

    .more-info {
      border-color: rgba(255, 255, 255, 0.25);
    }
  }
}
</style>
