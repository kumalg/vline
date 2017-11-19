<template>
<section>
  <div class="container">
    <div class="logo-block">
      <a href="#splash"><img src="../assets/logo_white.svg" class="logo" /></a>
    </div>
    <div class="copy-block">
      <p>© {{ new Date().getFullYear() }}<br><b>Vline Spółka Jawna</b></p>
    </div>
    <div class="author-block">
      <p>Projekt i wykonanie:<br><a href="http://kumalg.pl">Kamil Golec</a></p>
    </div>
  </div>
</section>
</template>

<style lang="scss" scoped>
section {
    background-color: #121212;
    color: white;
    font-size: 0.8125em;
    .container {
        padding: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            font-weight: 400;
            color: #797979;
        }

        a,
        b {
            font-weight: 600;
            color: #ebebeb;
        }

        a:hover {
            text-decoration: underline;
        }

        > * {
            margin: 16px 8px;
            flex: 1;
        }

        .logo {
            height: 24px;
            opacity: 0.5;
            transition: opacity 0.3s ease;

            &:hover {
                opacity: 0.75;
            }
        }

        .copy-block {
            text-align: center;
        }

        .author-block {
            text-align: right;
        }

        @media all and (max-width: 450px) {
            flex-direction: column;

            * {
                text-align: center !important;
            }
        }
    }
}
</style>
