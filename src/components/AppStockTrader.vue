<template>
  <div id="trader-box">
    <h2>Trade or view your Portfolio</h2>
    <p>This application enables saving and loading your data.</p>
    <p>Click on 'End Day' to simulate beggining of a new day!</p>
    <hr />
    <p>Your funds:</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../utility/variables.scss";
#trader-box {
  font-family: $font;
  padding: 20px;
  margin: 30px auto;
  border: 1px solid black;
}
</style>
