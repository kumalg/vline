<template>
  <li :class="[{'marked': item.marked}, 'item list-item']">
    <h2>{{item.title}}</h2>
    <p class="subtitle">{{item.subtitle}}</p>
    <ul class="more-info" v-if="item.moreInfo">
      <li>
        <p v-for="(info, index) in item.moreInfo" :key="index">{{info}}</p>
      </li>
    </ul>
    <h3>{{item.cost}} zł</h3>
  </li>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    item: Object,
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

.item {
    min-width: 192px;
    padding: 32px;
    margin: 8px 0;
    text-align: center;
    border: {
        style: solid;
        width: 1px;
        radius: 3px;
        color: rgba(0,0,0,.25);
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
            color: rgba(0,0,0,.25);
        }
    }

    &.marked {
        background: linear-gradient(45deg,$colorPrimaryDarker 0,$colorPrimaryLighter 90%);
        box-shadow: 0 8px 32px rgba($colorPrimary, .25);
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
            border-color: rgba(255,255,255,.25);
        }
    }
}
</style>
