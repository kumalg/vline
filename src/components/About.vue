<template>
<section>
  <Rodo />
  <div class="container">
    <!-- <h1>O Vline</h1> -->
    <div class="block-with-icon">
      <div class="block-icon">
        <img src="../assets/about/enterprise.svg" />
      </div>
      <div class="block-content">
        <p><b>Vline</b> jest nowoczesnym, stabilnym i prężnie rozwijającym się przedsiębiorstwem telekomunikacyjnym. Świadczy kompleksowe usługi dla klientów biznesowych i indywidualnych na terenie województwa łódzkiego.
        </p>
      </div>
    </div>
  </div>
  <div class="mission-block">
    <div class="container">
      <p>Misja <b>Vline</b> to przede wszystkim rozwijanie społeczeństwa poprzez umożliwienie taniego dostępu do Nowych Technologii.
      </p>
      <ul>
        <li>
          <img src="../assets/about/internet.svg" />
          <h2>
              Internet
            </h2>
        </li>
        <li>
          <img src="../assets/about/tv.svg" />
          <h2>
              Telewizja światłowodowa
            </h2>
        </li>
        <li>
          <img src="../assets/about/voip.svg" />
          <h2>
              Cyfrowa Telefonia IP
            </h2>
        </li>
        <li>
          <img src="../assets/about/cctv.svg" />
          <h2>
              Monitoring IP
            </h2>
        </li>
        <li>
          <img src="../assets/about/oasis.svg" />
          <h2>
              Systemy Komunikacji Alarmowej OASIS
            </h2>
        </li>
      </ul>
    </div>
  </div>
  <div class="container">
    <div class="block-with-icon">
      <div class="block-icon">
        <img src="../assets/about/list.svg" style="max-width: 96px"/>
      </div>
      <div class="block-content">
        <p>Tworzymy i wdrażamy kompleksowe rozwiązania telekomunikacyjne oraz internetowe, dostosowane do specyficznych potrzeb Klientów na podstawie indywidualnej analizy ich wymagań.
        </p>
      </div>
    </div>

    <div>
      <span class="partnership">Bylibyśmy zaszczyceni możliwością współpracy z <b>Państwem</b></span>
    </div>

    <div class="block-with-icon">
      <div class="block-icon">
        <img src="../assets/about/crew.svg" style="max-width: 192px" />
      </div>
      <div class="block-content">
        <p>Chcielibyśmy zapewnić również, iż obok najnowocześniejszej technologii dysponujemy także życzliwym i profesjonalnym zespołem specjalistów będących do Państwa dyspozycji. Zachęcając Państwa do skorzystania z naszej oferty, służymy wszelkimi niezbędnymi
          informacjami.
        </p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Rodo from '@/components/Rodo'
export default {
  components: {
    Rodo
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
section {
  background-color: $colorBackgroundDark;
}
.container {
  p {
    font-size: 1em;
    line-height: 1.75em;
  }
  p + p {
    padding-top: 1em;
  }
  b {
    font-weight: 600;
    color: $colorPrimary;
  }
  > div + div {
    margin-top: 64px;
  }
}
.block-with-icon {
  display: flex;
  align-items: center;

  .block-icon {
    align-self: flex-start;
    flex: 1;
    width: 100%;
    text-align: center;
    img {
      max-width: 240px;
      width: 75%; //calc(60vw - (100vw - 100%) * 0.6);
    }
  }

  .block-content {
    margin-left: 32px;
    flex: 2;
  }

  @media all and (max-width: 640px) {
    flex-direction: column;
    text-align: center;

    .block-content {
      margin-top: 32px;
      margin-left: auto;
    }
  }
}

.partnership {
  display: block;
  margin: {
    left: auto;
    right: auto;
  }
  text-align: center !important;
  font-size: 1.875em;
  max-width: 640px;
}

.mission-block {
  background-color: #fff;
  text-align: center;
  > .container p {
    margin-left: auto;
    margin-right: auto;
    max-width: 640px;
  }
  ul {
    margin-top: 16px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;

    li {
      margin: 8px;
      flex: 1;
      padding: 32px 16px;
      text-align: center;
      transition: box-shadow .2s ease;
      border: {
        style: solid;
        width: 1px;
        radius: 3px;
        color: rgba(0, 0, 0, 0.25);
      }

      h2 {
        margin-top: 16px;
        font-size: 0.75em;
        font-weight: 600;
      }

      &:hover {
        // background-color: rgba(0, 0, 0, 0.05);
        box-shadow: 0 8px 16px rgba($colorPrimary, 0.25);
      }
    }
  }
}
</style>
