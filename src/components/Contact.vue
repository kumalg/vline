<template>
<section>
  <div class="container">
    <div>
      <div class="block">
        <h2>Biuro Obsługi Klienta</h2>
        <p>ul. Łaska 45</p>
        <p>98-220 Zduńska Wola</p>
        <p>Pn. - Pt.: 9:00 - 16:00</p>
      </div>
      <div class="block">
        <p>+43 656 92 56</p>
        <p>+43 656 92 56</p>
      </div>
    </div>
    <div>
      <div class="block">
        <h2>Dział płatności</h2>
        <p>792 777 421</p>
        <p>+43 656 92 56</p>
      </div>
      <div class="block">
        <h2>Dział serwisu</h2>
        <p>+43 656 92 57</p>
        <p>Czynne: 09.00 - 17.00</p>
      </div>
      <div class="block">
        <h2>Serwis SMS 24h</h2>
        <p>504 243 322</p>
      </div>
    </div>
    <div>
      <div class="block">
        <a href="#splash"><img src="../assets/logo_white.svg" class="logo" /></a>
      </div>
      <div class="block">
        <h2>Obserwuj nas</h2>
        <p>792 777 421</p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

section {
    background-color: #191919;
    color: $colorTextOnDarkLighter;
    width: 100%;
    .container {
        // font-size: 1.05em;
        display: flex;
        text-align: center;
        > * {
            flex: 1;
            h2 {
                font-size: 0.875em;
                font-weight: 600;
                margin-bottom: 8px;
            }
            p {
                font-size: 0.75em;
                line-height: 1.5em;
                color: $colorTextOnDarkDarker;
            }
        }

        .block + .block {
            margin-top: 16px;
        }

        @media all and (max-width: 700px) {
            flex-direction: column;
            > * + * {
              margin-top: 64px;
            }
        }
    }
    .logo {
        width: 128px;
        opacity: 0.25;
        transition: opacity 0.3s ease;
        margin-bottom: 8px;

        &:hover {
            opacity: 0.5;
        }
    }
}
</style>
