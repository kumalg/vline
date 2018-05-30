<template>
<div class="rodo-block">
  <div class="rodo-container">
    Rozporządzenie Ogólne o Danych Osobowych (RODO)
    <a href="./files/rodoinfo.odt" target="_blank">Pobierz dokument</a>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import "../styles/_colors.scss";

.rodo-container {
    background: linear-gradient(
        45deg,
        $colorPrimaryDarker 0,
        $colorPrimaryLighter 90%
    );
    color: white;
    font-size: 0.8125em;
    padding: 32px 16px;
    text-align: center;
    a {
        background: rgba(#fff,.1);
        color: #fff;
        font-weight: 600;
        margin: 0 32px;
        padding: 8px 16px;
        border-radius: 32px;
        transition: background .2s ease;
        &:hover {
            background: rgba(#fff,.2);
        }
    }
}
</style>
