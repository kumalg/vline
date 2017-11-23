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
        <a href="tel:436569256"><i class="fa fa-phone contact-icon" aria-hidden="true"></i>+43 656 92 56</a>
        <p><i class="fa fa-fax contact-icon" aria-hidden="true"></i>+43 656 92 56</p>
      </div>
      <div class="block">
        <a href="mailto:vline@vline.net.pl"><i class="fa fa-envelope-open contact-icon" aria-hidden="true"></i>vline@vline.net.pl</a>
      </div>
    </div>
    <div>
      <div class="block">
        <h2>Dział płatności</h2>
        <a href="tel:792777421"><i class="fa fa-mobile contact-icon" aria-hidden="true"></i>792 777 421</a>
        <a href="tel:436569256"><i class="fa fa-phone contact-icon" aria-hidden="true"></i>+43 656 92 56</a>
      </div>
      <div class="block">
        <h2>Dział serwisu</h2>
        <a href="tel:436569257"><i class="fa fa-phone contact-icon" aria-hidden="true"></i>+43 656 92 57</a>
        <p>Czynne: 09.00 - 17.00</p>
      </div>
      <div class="block">
        <h2>Serwis SMS 24h</h2>
        <a href="tel:504243322"><i class="fa fa-mobile contact-icon" aria-hidden="true"></i>504 243 322</a>
      </div>
    </div>
    <div>
      <div class="block">
        <a href="#splash"><img src="../assets/logo_white.svg" class="logo" /></a>
      </div>
      <div class="block">
        <h2>Obserwuj nas</h2>
        <a href="https://www.facebook.com/Vlinespj" target="_blank" class="social-button"><i class="fa fa-facebook" aria-hidden="true"></i></a>
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
            align-self: center;
            flex: 1;
            h2 {
                font-size: 0.875em;
                font-weight: 600;
                margin-bottom: 8px;
            }
            a,
            p {
                font-size: 0.8125em;
                line-height: 1.5em;
                color: $colorTextOnDarkDarker;
            }
            a {
                display: block;
                transition: color 0.3s;
                &:hover {
                    color: $colorTextOnDark;
                }
            }
            i.contact-icon {
                margin-right: 8px;
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
    .social-button {
        display: inline-block !important;
        height: 32px;
        width: 32px;
        text-align: center;
        padding: 0;
        margin: 8px;
        line-height: 28px !important;
        border: {
            style: solid;
            radius: 5px;
            width: 2px;
            color: rgba(255,255,255,0.15);
        }
    }
}
</style>
