<template>
  <div class="finish">
    <div class="finish__block">
      <img src="../img/galka.png" alt="galka" class="finish__img"/>
      <div class="finish__text">Спасибо!</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.finish {
  margin: 40px 0 0 40px;
  width: 401px;
  height: 520px;
  background: #ffffff;
  box-shadow: 0px 0px 10px #ebf0ff;
  border-radius: 24px;

  &__img {
    margin-top: 214px;
    margin-left: 175px;
  }

  &__text {
    margin: 10px;
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 31px;
    color: #000000;
    text-align: center;
  }
}
</style>
