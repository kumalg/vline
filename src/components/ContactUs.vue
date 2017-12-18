<template>
<section>
  <div class="container">
    <h2>Zainteresowany ofertą? Masz pytania?</h2>
    <h1>Skontaktuj się z nami!</h1>
    <ul>
      <li>
        <a href="tel:436569256">+43&nbsp;656&nbsp;92&nbsp;56</a>
      </li>
      <li>
        <a href="mailto:vline@vline.net.pl">vline@vline.net.pl</a>
      </li>
    </ul>
  </div>

</section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';
section {
    // background-color: $colorBackgroundDark;
    background: linear-gradient(45deg,$colorPrimaryDarker 0,$colorPrimaryLighter 90%);

    .container {
        padding: {
            top: 64px;
            bottom: 64px;
        }

        h1,
        h2 {
            text-align: center;
            color: #fff;
        }
        h1 {
            font-size: 1.875em;
            font-weight: 300;
            // color: $colorPrimary;
        }
        h2 {
            font-size: 1.5em;
            font-weight: 300;
            opacity: 0.75;
        }

        ul {
            margin-top: 32px;
            text-align: center;
            li {
                list-style: none;
                margin: 16px 32px 0;
                display: inline-block;
                cursor: pointer;
                -webkit-tap-highlight-color: transparent;
                a {
                    color: #fff;
                    font-weight: 400;
                    font-size: 1.25em;
                    display: inline-block;
                    // background: linear-gradient(45deg,$colorPrimaryDarker 0,$colorPrimaryLighter 90%);
                    background-color: rgba(#fff,.1);
                    padding: 20px 64px;
                    border-radius: 100px;
                    // box-shadow: 0 8px 32px rgba($colorPrimary, .25);
                    transition: box-shadow .3s ease, background-color .3s ease;

                    &:hover {
                    // box-shadow: 0 0px 64px rgba($colorPrimary, .75);
                    // box-shadow: 0 0px 64px rgba($colorPrimaryDarker, .75);
                    background-color: rgba(#fff,.2);

                    }
                }
            }
        }

        @media all and (max-width: 400px) {
            ul {
              li {
                margin: {
                  left: 0px;
                  right: 0px
                }

                a {
                  padding: 15px 32px;
                  font-size: 1em;

                }
              }
            }
        }
    }
}
</style>
