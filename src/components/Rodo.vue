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
  padding: 24px 16px;
  text-align: center;
  a {
    display: inline-block;
    background: rgba(#fff, 0.1);
    color: #fff;
    font-weight: 600;
    margin: 8px 32px;
    padding: 8px 16px;
    border-radius: 32px;
    transition: background 0.2s ease;
    &:hover {
      background: rgba(#fff, 0.2);
    }
  }
}
</style>
