<template>
<footer>
  <div class="container">
    <!-- <div class="logo-block">
      <a href="#splash"><img src="../assets/logo_white.svg" class="logo" /></a>
    </div> -->
    <div class="copy-block">
      <p>© {{ new Date().getFullYear() }} <b>Vline Spółka Jawna</b></p>
    </div>
    <div class="author-block">
      <p>Projekt i wykonanie <a href="http://kumalg.pl">Kamil Golec</a></p>
    </div>
  </div>
</footer>
</template>

<style lang="scss" scoped>
footer {
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
            margin-left: 4px;
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
            // text-align: center;
            text-align: left;
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
