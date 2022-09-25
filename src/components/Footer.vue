<template>
<footer>
  <div class="container">
    <!-- <div class="logo-block">
      <a href="#splash"><img src="../assets/logo_white.svg" class="logo" /></a>
    </div> -->
    <div class="copy-block">
      <p>© 2018 - {{ new Date().getFullYear() }} <b>Vline Spółka Jawna</b></p>
    </div>
    
    <div class="rodo">
        Rozporządzenie Ogólne o Danych Osobowych (RODO)
        <a href="./files/rodoinfo.odt" target="_blank">Pobierz dokument</a>
    </div>
    <!-- <div class="author-block">
      <p>Projekt i wykonanie <a href="http://kumalg.pl" target="_blank">Kamil Golec</a></p>
    </div> -->
  </div>
</footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: #121212;
    color: white;
    font-size: 0.8125em;

    .container {
        padding: 24px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

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
            margin: 8px 0px;
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
            // text-align: left;
        }

        .rodo {
            font-size: 12px;
            color: #797979;
            text-align: center;

            a {
                color: #797979;
            }
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
